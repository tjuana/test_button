import { Router } from 'express'
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'
import { z } from 'zod'
import { donateSchema, type DonateRequest } from './schema'

const actionsRouter = Router()

// GET /api/actions/donate - Action metadata
actionsRouter.get('/donate', (req, res) => {
  const { amount = '0.01' } = req.query
  const actionBaseUrl = process.env.ACTION_BASE_URL || 'http://localhost:8787'
  
  res.json({
    title: 'Donate in SOL',
    description: 'Send a small tip to the developer',
    links: {
      actions: [{
        label: `Donate ${amount} SOL`,
        href: `${actionBaseUrl}/api/actions/donate?amount=${amount}`
      }]
    }
  })
})

// POST /api/actions/donate - Create unsigned transaction
actionsRouter.post('/donate', async (req, res) => {
  try {
    // Validate request body
    const { account, amount, to }: DonateRequest = donateSchema.parse(req.body)
    
    // Get connection and donation address
    const connection = new Connection(process.env.RPC_URL!)
    const donationAddress = to || process.env.DONATION_ADDRESS
    
    if (!donationAddress) {
      return res.status(400).json({ 
        error: 'Donation address not configured. Please set DONATION_ADDRESS in environment variables.' 
      })
    }

    // Validate Solana addresses
    try {
      new PublicKey(account)
      new PublicKey(donationAddress)
    } catch (addressError) {
      return res.status(400).json({
        error: 'Invalid Solana address',
        message: 'Please provide valid Solana public keys'
      })
    }
    
    // Get latest blockhash
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()
    
    // Create transaction
    const tx = new Transaction({
      feePayer: new PublicKey(account),
      blockhash,
      lastValidBlockHeight
    })
    
    // Convert amount to lamports (Zod already validated the amount)
    const lamports = Math.round(amount * 1e9)
    
    // Add transfer instruction
    tx.add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(account),
        toPubkey: new PublicKey(donationAddress),
        lamports
      })
    )
    
    // Serialize transaction to base64
    const serializedTx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false
    })
    
    const base64 = serializedTx.toString('base64')
    
    res.json({
      transaction: base64,
      message: 'Donate via Action',
      amount,
      to: donationAddress
    })
    
  } catch (error) {
    console.error('Error creating donate transaction:', error)
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      })
    }
    
    res.status(500).json({ 
      error: 'Failed to create transaction',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export { actionsRouter }
