import { useCartContext } from '@/context/CartContext'

export default function useCart() {
  const { state, add, remove, setQty, clear } = useCartContext()
  const total = state.items.reduce((sum, i) => sum + i.product.price * i.qty, 0)
  const count = state.items.reduce((sum, i) => sum + i.qty, 0)
  return { items: state.items, add, remove, setQty, clear, total, count }
}
