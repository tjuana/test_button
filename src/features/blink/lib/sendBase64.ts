import { Transaction } from '@solana/web3.js'

/**
 * Send a base64 encoded transaction using the wallet
 */
export async function sendBase64Tx(
  base64: string,
  connection: any,
  sendTransaction: any
): Promise<string> {
  const tx = Transaction.from(Buffer.from(base64, 'base64'))
  return sendTransaction(tx, connection)
}
