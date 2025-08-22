import { useParams, useNavigate, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { formatCurrency } from '@/utils/format'
import useCart from '@/hooks/useCart'
import { useCallback } from 'react'

export default function Product() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { add } = useCart()
  const navigate = useNavigate()

  // Botón para regresar (atrás o al catálogo si no hay historial)
  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/catalogo')
    }
  }, [navigate])

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl p-6">
        <button
          onClick={goBack}
          className="mb-4 inline-flex items-center gap-2 text-brand-600 hover:underline"
        >
          ← Regresar
        </button>
        Producto no encontrado.
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Encabezado con botón regresar */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
        >
          ← Regresar
        </button>

        {/* Opcional: breadcrumb al catálogo */}
        <div className="text-sm text-gray-500">
          <Link to="/catalogo" className="hover:underline">
            Catálogo
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-96 w-full rounded-xl object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p>
            <span className="chip">{product.category}</span>
          </p>
          <p className="text-2xl font-bold">{formatCurrency(product.price)}</p>
          <button className="btn-primary" onClick={() => add(product)}>
            Agregar al carrito
          </button>
          <p className="text-sm text-gray-500">
            Stock: {product.stock} unidades
          </p>
        </div>
      </div>
    </div>
  )
}
