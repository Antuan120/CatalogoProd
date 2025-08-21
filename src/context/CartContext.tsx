import { createContext, useContext, useMemo, useReducer } from 'react'
import type { Product } from '@/types'

type CartItem = { product: Product; qty: number }
type CartState = { items: CartItem[] }

type Action =
  | { type: 'add'; product: Product; qty?: number }
  | { type: 'remove'; productId: string }
  | { type: 'clear' }
  | { type: 'setQty'; productId: string; qty: number }

const CartContext = createContext<{
  state: CartState
  add: (p: Product, qty?: number) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
} | null>(null)

const reducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'add': {
      const idx = state.items.findIndex(i => i.product.id === action.product.id)
      if (idx >= 0) {
        const items = [...state.items]
        items[idx] = { ...items[idx], qty: Math.min(items[idx].qty + (action.qty ?? 1), items[idx].product.stock) }
        return { items }
      }
      return { items: [...state.items, { product: action.product, qty: Math.min(action.qty ?? 1, action.product.stock) }] }
    }
    case 'remove': {
      return { items: state.items.filter(i => i.product.id !== action.productId) }
    }
    case 'setQty': {
      return {
        items: state.items.map(i => i.product.id === action.productId ? { ...i, qty: Math.max(1, Math.min(action.qty, i.product.stock)) } : i)
      }
    }
    case 'clear': return { items: [] }
    default: return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  const api = useMemo(() => ({
    state,
    add: (p: Product, qty?: number) => dispatch({ type: 'add', product: p, qty }),
    remove: (id: string) => dispatch({ type: 'remove', productId: id }),
    setQty: (id: string, qty: number) => dispatch({ type: 'setQty', productId: id, qty }),
    clear: () => dispatch({ type: 'clear' })
  }), [state])
  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCartContext must be used within CartProvider')
  return ctx
}
