import type { CreateTxRequest, CreateTxResponse } from '../model/types'

/**
 * Create an unsigned transaction by calling the Action endpoint
 */
export async function postAction(url: string, body: CreateTxRequest): Promise<CreateTxResponse> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`Action failed: ${response.status} ${response.statusText}. ${errorData.error || ''}`)
  }
  
  return response.json()
}

/**
 * Build Action URL with parameters
 */
export function buildActionUrl(base: string, id: string, params?: Record<string, unknown>) {
  const url = new URL(`/api/actions/${id}`, base)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value))
    })
  }
  return url.toString()
}

/**
 * Get Action metadata
 */
export async function getActionMetadata(url: string): Promise<any> {
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error(`Failed to fetch action metadata: ${response.status} ${response.statusText}`)
  }
  
  return response.json()
}
