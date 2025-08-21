import useCart from '@/hooks/useCart'
import { formatCurrency } from '@/utils/format'

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, remove, setQty, total, clear } = useCart()
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}></div>
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Tu carrito</h2>
          <button className="btn-ghost" onClick={onClose}>Cerrar</button>
        </div>
        <div className="flex h-[calc(100%-8rem)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-gray-600">Aún no agregas productos.</p>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-600">{formatCurrency(product.price)} c/u</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="chip" onClick={() => setQty(product.id, Math.max(1, qty - 1))}>-</button>
                      <span className="w-8 text-center">{qty}</span>
                      <button className="chip" onClick={() => setQty(product.id, qty + 1)}>+</button>
                      <button className="ml-auto text-sm text-red-600" onClick={() => remove(product.id)}>Quitar</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Total</span>
            <span className="text-lg font-semibold">{formatCurrency(total)}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={clear} className="btn-ghost">Vaciar</button>
            <button className="btn-primary flex-1">Pagar</button>
          </div>
        </div>
      </aside>
    </div>
  )
}
