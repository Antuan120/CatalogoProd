import type { Category } from '@/types'

const categories: Category[] = ['Labios', 'Rostro', 'Ojos', 'Cuidado de la piel', 'Cabello', 'Uñas', 'Higiene personal']

export default function CategoryFilter({
  value,
  onChange
}: {
  value: Category | 'Todas',
  onChange: (c: Category | 'Todas') => void
}) {
  const all: (Category | 'Todas')[] = ['Todas', ...categories]
  return (
    <div className="flex flex-wrap gap-2">
      {all.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`chip ${value === c ? 'bg-brand-500 text-white' : ''}`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
