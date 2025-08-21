import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { useState } from 'react'

export default function App() {
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={() => setOpenCart(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/producto/:slug" element={<Product />} />
          <Route path="*" element={
            <div className="max-w-3xl mx-auto p-6">
              <h1 className="text-2xl font-semibold">404</h1>
              <p className="text-gray-600">
                Página no encontrada. <NavLink to="/" className="text-brand-600 underline">Volver</NavLink>
              </p>
            </div>
          }/>
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </div>
  )
}
