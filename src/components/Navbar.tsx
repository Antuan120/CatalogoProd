import { NavLink } from 'react-router-dom'
import useCart from '@/hooks/useCart'

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-500"></div>
          <span className="text-lg font-semibold">Belleza</span>
        </NavLink>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className="hover:text-brand-600">Inicio</NavLink>
          <NavLink to="/catalogo" className="hover:text-brand-600">Catálogo</NavLink>
          <button className="relative btn-ghost" onClick={onCartClick} aria-label="Abrir carrito">
            🛍️
            {count > 0 && <span className="absolute -right-2 -top-2 rounded-full bg-brand-500 px-2 text-xs text-white">{count}</span>}
          </button>
        </nav>
      </div>
    </header>
  )
}
