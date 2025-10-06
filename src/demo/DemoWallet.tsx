import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { BlinkButton } from '../features/blink/ui/BlinkButton'
import { BlinkLink } from '../features/blink/ui/BlinkLink'
import { donateUrl } from '../features/blink/actions/donate'
import { useBlinkStore } from '../features/blink/model/store'

export function DemoWalletSection() {
  const { connected, publicKey } = useWallet()
  const { error } = useBlinkStore()
  const url = donateUrl()

  return (
    <div className="mt-6 space-y-4">
      <WalletMultiButton />
      <div className="text-sm text-gray-500">
        {connected ? `Connected: ${publicKey?.toBase58()}` : 'Not connected'}
      </div>
      
      {connected && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <h3 className="text-lg font-medium">Blink Actions Demo</h3>
          <div className="flex gap-3 flex-wrap">
            <BlinkButton 
              actionId="donate" 
              actionUrl={url}
              variant="local"
            >
              Donate 0.01 SOL (Local)
            </BlinkButton>
            <BlinkLink actionUrl={url}>
              Open Blink Link
            </BlinkLink>
          </div>
          {error && (
            <div className="text-sm text-red-500 bg-red-50 p-2 rounded">
              Error: {error}
            </div>
          )}
          <p className="text-xs text-gray-400">
            Local mode: Creates transaction via POST and signs with your wallet<br/>
            Link mode: Opens Blink Action URL for sharing/demo
          </p>
        </div>
      )}
    </div>
  )
}