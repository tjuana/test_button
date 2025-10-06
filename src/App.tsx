import { DemoWalletSection } from './demo/DemoWallet'

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Blinks Demo (devnet)</h1>
      <DemoWalletSection />
      {/* тут позже появится BlinkButton */}
    </div>
  )
}