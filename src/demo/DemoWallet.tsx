import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export function DemoWalletSection() {
  const { connected, publicKey } = useWallet()
  return (
    <div className="mt-6 space-y-2">
      <WalletMultiButton />
      <div className="text-sm text-gray-500">
        {connected ? `Connected: ${publicKey?.toBase58()}` : 'Not connected'}
      </div>
    </div>
  )
}