import type { Product } from '@/types'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) return <p className="text-gray-600">No se encontraron productos.</p>
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
