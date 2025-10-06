import React, { useState } from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { Button } from '../../shared/ui/Button'
import { createActionTx, sendBase64Tx } from './actionsClient'

export interface BlinkButtonProps {
  action: string
  amount?: string | number
  to?: string
  mode?: 'local' | 'link'
  className?: string
  children?: React.ReactNode
}

export function BlinkButton({ 
  action, 
  amount = '0.01', 
  to,
  mode = 'local',
  className = '',
  children 
}: BlinkButtonProps) {
  const { connected, publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()
  const [loading, setLoading] = useState(false)

  const actionBaseUrl = import.meta.env.VITE_ACTION_BASE_URL || 'http://localhost:8787'
  const actionUrl = `${actionBaseUrl}/api/actions/${action}`

  const handleLocalAction = async () => {
    if (!connected || !publicKey || !sendTransaction) {
      alert('Please connect your wallet first')
      return
    }

    setLoading(true)
    try {
      // Create unsigned transaction
      const base64 = await createActionTx(actionUrl, {
        account: publicKey.toBase58(),
        amount,
        to
      })

      // Send transaction through wallet
      const signature = await sendBase64Tx(base64, connection, sendTransaction)
      
      console.log('Transaction successful:', signature)
      alert(`Transaction sent! Signature: ${signature}`)
    } catch (error) {
      console.error('Action failed:', error)
      alert(`Action failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenLink = () => {
    const linkUrl = `${actionUrl}?amount=${amount}${to ? `&to=${to}` : ''}`
    window.open(linkUrl, '_blank')
  }

  if (mode === 'link') {
    return (
      <Button
        variant="outline"
        onClick={handleOpenLink}
        className={className}
        leftIcon={<span>🔗</span>}
      >
        {children || `Open Blink Link`}
      </Button>
    )
  }

  return (
    <Button
      variant="primary"
      onClick={handleLocalAction}
      loading={loading}
      disabled={!connected}
      className={className}
      leftIcon={<span>⚡</span>}
    >
      {children || `${action} (local)`}
    </Button>
  )
}
