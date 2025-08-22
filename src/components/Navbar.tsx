import { NavLink } from 'react-router-dom'
import useCart from '@/hooks/useCart'

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-40 border-b bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Marca */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center font-bold text-fuchsia-600">
            B
          </div>
          <span className="text-lg font-bold text-white tracking-wide">Belleza</span>
        </NavLink>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className="text-white hover:text-yellow-200 transition-colors"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/catalogo"
            className="text-white hover:text-yellow-200 transition-colors"
          >
            Catálogo
          </NavLink>

          {/* Botón carrito */}
          <button
            className="relative text-white hover:text-yellow-200 transition-colors"
            onClick={onCartClick}
            aria-label="Abrir carrito"
          >
            🛍️
            {count > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-fuchsia-500 px-2 text-xs font-bold text-white shadow-md">
                {count}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
