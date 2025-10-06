export type ActionId = 'donate' | 'swap' | 'mint'

export type ActionMeta = {
  id: ActionId
  title: string
  description?: string
  icon?: string
  params?: Record<string, unknown> // для форм в будущем
}

export type CreateTxRequest = {
  account: string // кошелёк пользователя
  params?: Record<string, unknown> // amount, to, token и т.п.
}

export type CreateTxResponse = {
  transaction: string // base64
  message?: string
  amount?: number
  to?: string
}

export type BlinkButtonVariant = 'local' | 'link'

export type BlinkButtonProps = {
  actionId: ActionId
  actionUrl: string // готовая ссылка (из пресета)
  children?: React.ReactNode
  variant?: BlinkButtonVariant // local = POST+send, link = window.open
  className?: string
}
