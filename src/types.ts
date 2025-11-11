export type Product = {
  id: string
  title: string
  brand: string
  type: '3-piece' | '2-piece' | 'Loose'
  fabric: 'Lawn' | 'Cambric' | 'Khaddar' | 'Linen' | 'Karandi'
  season: 'Summer' | 'Winter'
  finish: 'Embroidered' | 'Printed'
  price: number
  images: string[]
  description: string
  sizes?: string[]
}