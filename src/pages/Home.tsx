import { Link } from 'react-router-dom'
import ProductGrid from '@/components/ProductGrid'
import { products } from '@/data/products'

export default function Home() {
  return (
    <div>
      <section className="relative">
        <img src="https://img.freepik.com/premium-photo/beauty-makeup-cosmetics-flatlay-design-with-copyspace-cosmetic-products-makeup-tools-gray-background-girly-feminine-style_360074-8154.jpg" alt="" className="h-80 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-end px-4 pb-8">
          <div className="text-white">
            <h1 className="text-3xl font-semibold">Brilla con tu mejor look</h1>
            <p className="mt-2 max-w-xl text-white/90">Descubre nuestra selección de maquillaje y cuidado de la piel.</p>
            <Link to="/catalogo" className="btn-primary mt-4 inline-block">Ver catálogo</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-10">
        <h2 className="text-xl font-semibold">Lo más popular</h2>
        <ProductGrid products={products.slice(0, 3)} />
      </section>
    </div>
  )
}
