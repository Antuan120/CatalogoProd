import { useMemo, useState } from 'react'
import { products as all } from '@/data/products'
import ProductGrid from '@/components/ProductGrid'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import type { Category } from '@/types'

export default function Catalog() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<Category | 'Todas'>('Todas')

  const products = useMemo(() => {
    return all.filter(p => {
      const text = (p.name + ' ' + p.description + ' ' + p.tags?.join(' ')).toLowerCase()
      const matchQ = text.includes(q.toLowerCase())
      const matchCat = cat === 'Todas' ? true : p.category === cat
      return matchQ && matchCat
    })
  }, [q, cat])

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Catálogo</h1>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchBar onChange={setQ} />
          <CategoryFilter value={cat} onChange={setCat} />
        </div>
      </div>
      <ProductGrid products={products} />
    </div>
  )
}
