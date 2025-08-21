import { useState } from 'react'

export default function SearchBar({ onChange }: { onChange: (q: string) => void }) {
  const [q, setQ] = useState('')
  return (
    <div className="flex items-center gap-2">
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); onChange(e.target.value) }}
        placeholder="Buscar productos..."
        className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  )
}
