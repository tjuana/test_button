export const ACTIONS_BASE = import.meta.env.VITE_ACTIONS_BASE ?? 'http://localhost:8787'
export const DEFAULT_RPC = import.meta.env.VITE_SOLANA_RPC ?? 'https://api.devnet.solana.com'
export const DEFAULT_DONATION_TO = import.meta.env.VITE_DONATION_TO ?? ''
export const DEFAULT_DONATION_AMOUNT = Number(import.meta.env.VITE_DONATION_AMOUNT ?? 0.01)

// Action URLs
export const getActionUrl = (actionId: string, params?: Record<string, unknown>) => {
  const base = ACTIONS_BASE
  const url = new URL(`/api/actions/${actionId}`, base)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value))
    })
  }
  return url.toString()
}
