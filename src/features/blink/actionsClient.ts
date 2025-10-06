import { Transaction, Connection, PublicKey } from '@solana/web3.js'

export interface ActionParams {
  account: string
  amount?: string | number
  to?: string
}

export interface ActionResponse {
  transaction: string
  message: string
  amount?: number
  to?: string
}

/**
 * Create an unsigned transaction by calling the Action endpoint
 */
export async function createActionTx(
  url: string, 
  params: ActionParams
): Promise<string> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Action failed: ${response.status} ${response.statusText}. ${errorData.error || ''}`)
    }

    const data: ActionResponse = await response.json()
    return data.transaction
  } catch (error) {
    console.error('Error creating action transaction:', error)
    throw error
  }
}

/**
 * Send a base64 encoded transaction using the wallet
 */
export async function sendBase64Tx(
  base64: string,
  connection: Connection,
  sendTransaction: (tx: Transaction, connection: Connection) => Promise<string>
): Promise<string> {
  try {
    // Deserialize transaction from base64
    const tx = Transaction.from(Buffer.from(base64, 'base64'))
    
    // Send transaction
    const signature = await sendTransaction(tx, connection)
    
    console.log('Transaction sent:', signature)
    return signature
  } catch (error) {
    console.error('Error sending transaction:', error)
    throw error
  }
}

/**
 * Get Action metadata
 */
export async function getActionMetadata(url: string): Promise<any> {
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch action metadata: ${response.status} ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching action metadata:', error)
    throw error
  }
}
