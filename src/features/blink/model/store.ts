import { create } from 'zustand'
import type { ActionMeta } from './types'

type State = {
  current?: ActionMeta
  loading: boolean
  error?: string
}

type Actions = {
  setAction: (meta: ActionMeta) => void
  setLoading: (v: boolean) => void
  setError: (e?: string) => void
  reset: () => void
}

export const useBlinkStore = create<State & Actions>((set) => ({
  current: undefined,
  loading: false,
  error: undefined,
  setAction: (meta) => set({ current: meta }),
  setLoading: (v) => set({ loading: v }),
  setError: (e) => set({ error: e }),
  reset: () => set({ current: undefined, loading: false, error: undefined }),
}))
