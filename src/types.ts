export type Category = 'Labios' | 'Rostro' | 'Ojos' | 'Cuidado de la piel'

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image: string
  category: Category
  stock: number
  tags?: string[]
  rating?: number
}
