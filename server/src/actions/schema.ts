import { z } from 'zod'

// Base schema for all actions
export const baseActionSchema = z.object({
  account: z.string().min(1, 'Account is required'),
})

// Donate action schema
export const donateSchema = baseActionSchema.extend({
  amount: z.union([z.string(), z.number()]).optional().default('0.01'),
  to: z.string().optional()
})

// Future action schemas can be added here
// export const swapSchema = baseActionSchema.extend({
//   amount: z.number().positive(),
//   tokenIn: z.string(),
//   tokenOut: z.string(),
// })

// export const mintSchema = baseActionSchema.extend({
//   name: z.string(),
//   symbol: z.string(),
//   uri: z.string().url(),
// })

export type DonateRequest = z.infer<typeof donateSchema>
// export type SwapRequest = z.infer<typeof swapSchema>
// export type MintRequest = z.infer<typeof mintSchema>
