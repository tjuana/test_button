import { ACTIONS_BASE, DEFAULT_DONATION_AMOUNT, DEFAULT_DONATION_TO } from '../model/config'
import { buildActionUrl } from '../lib/actionsClient'

export function donateUrl(params?: { amount?: number; to?: string }) {
  const p = {
    amount: params?.amount ?? DEFAULT_DONATION_AMOUNT,
    to: params?.to ?? DEFAULT_DONATION_TO,
  }
  return buildActionUrl(ACTIONS_BASE, 'donate', p)
}

export const donateAction = {
  id: 'donate' as const,
  title: 'Donate in SOL',
  description: 'Send a small tip to the developer',
  icon: '💝',
}
