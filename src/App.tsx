import { DemoWalletSection } from './demo/DemoWallet'
import { SolanaProvider } from './app/providers/SolanaProvider'

export default function App() {
  return (
    <SolanaProvider endpoint="https://api.devnet.solana.com">
      <div className="p-4">
        <h1 className="text-xl font-semibold">Blinks Demo (devnet)</h1>
        <DemoWalletSection />
      </div>
    </SolanaProvider>
  )
}