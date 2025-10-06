import { useCallback } from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { Button } from '../../../shared/ui/Button'
import { useBlinkStore } from '../model/store'
import { postAction } from '../lib/actionsClient'
import { sendBase64Tx } from '../lib/sendBase64'
import type { BlinkButtonProps } from '../model/types'

export function BlinkButton({ 
  actionId, 
  actionUrl, 
  children, 
  variant = 'local',
  className = ''
}: BlinkButtonProps) {
  const { publicKey, connected, sendTransaction } = useWallet()
  const { connection } = useConnection()
  const { loading, setLoading, setError } = useBlinkStore()

  const onClick = useCallback(async () => {
    try {
      setError(undefined)
      
      if (variant === 'link') {
        window.open(actionUrl, '_blank', 'noopener,noreferrer')
        return
      }
      
      if (!connected || !publicKey) {
        throw new Error('Wallet not connected')
      }

      setLoading(true)
      const res = await postAction(actionUrl, { account: publicKey.toBase58() })
      const sig = await sendBase64Tx(res.transaction, connection, sendTransaction)
      console.log('tx:', sig)
    } catch (e: any) {
      setError(e?.message ?? String(e))
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [variant, actionUrl, connected, publicKey, connection, sendTransaction, setLoading, setError])

  const buttonVariant = variant === 'link' ? 'outline' : 'primary'
  const icon = variant === 'link' ? '🔗' : '⚡'

  return (
    <Button
      variant={buttonVariant}
      onClick={onClick}
      loading={loading}
      disabled={variant === 'local' && !connected}
      className={className}
      leftIcon={<span>{icon}</span>}
    >
      {children ?? actionId}
    </Button>
  )
}
