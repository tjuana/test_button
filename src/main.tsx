import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SolanaProvider } from './lib/solanaProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SolanaProvider endpoint={import.meta.env.VITE_SOLANA_RPC ?? 'https://api.devnet.solana.com'}>
      <App />
    </SolanaProvider>
  </StrictMode>,
)
