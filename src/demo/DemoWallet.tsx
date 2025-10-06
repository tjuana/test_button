import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { BlinkButton } from '../features/blink/BlinkButton'

export function DemoWalletSection() {
  const { connected, publicKey } = useWallet()
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
              action="donate" 
              amount="0.01"
              mode="local"
            >
              Donate 0.01 SOL (Local)
            </BlinkButton>
            <BlinkButton 
              action="donate" 
              amount="0.01"
              mode="link"
            >
              Open Blink Link
            </BlinkButton>
          </div>
          <p className="text-xs text-gray-400">
            Local mode: Creates transaction via POST and signs with your wallet<br/>
            Link mode: Opens Blink Action URL for sharing/demo
          </p>
        </div>
      )}
    </div>
  )
}