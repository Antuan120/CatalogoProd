import type { Product } from '@/types'
import { formatCurrency } from '@/utils/format'
import { Link } from 'react-router-dom'
import useCart from '@/hooks/useCart'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md">
      <Link to={`/producto/${product.slug}`}>
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover transition group-hover:scale-105" />
      </Link>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/producto/${product.slug}`} className="line-clamp-1 font-medium hover:text-brand-600">
              {product.name}
            </Link>
            <p className="line-clamp-2 text-sm text-gray-600">{product.description}</p>
          </div>
          {product.rating && <span className="chip">★ {product.rating}</span>}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{formatCurrency(product.price)}</span>
          <button onClick={() => add(product)} className="btn-primary">Agregar</button>
        </div>
      </div>
    </div>
  )
}
