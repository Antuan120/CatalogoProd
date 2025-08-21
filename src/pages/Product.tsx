import { useParams } from 'react-router-dom'
import { products } from '@/data/products'
import { formatCurrency } from '@/utils/format'
import useCart from '@/hooks/useCart'

export default function Product() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { add } = useCart()

  if (!product) return <div className="mx-auto max-w-6xl p-6">Producto no encontrado.</div>

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-96 w-full rounded-xl object-cover" />
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p><span className="chip">{product.category}</span></p>
          <p className="text-2xl font-bold">{formatCurrency(product.price)}</p>
          <button className="btn-primary" onClick={() => add(product)}>Agregar al carrito</button>
          <p className="text-sm text-gray-500">Stock: {product.stock} unidades</p>
        </div>
      </div>
    </div>
  )
}
