import type { Product } from '../types'

const products: Product[] = [
  {
    id: 'p001',
    title: 'Embroidered 3-piece - Pastel Lawn',
    brand: 'Agha Noor',
    type: '3-piece',
    fabric: 'Lawn',
    season: 'Summer',
    finish: 'Embroidered',
    price: 12999,
    originalPrice: 25999,
    images: [
      'https://picsum.photos/seed/aghanoor1/800/800',
      'https://picsum.photos/seed/aghanoor2/800/800'
    ],
    description:
      'Soft pastel lawn 3-piece with intricate embroidery — last season surplus. Excellent finish, breathable fabric perfect for summer.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p002',
    title: 'Printed 2-piece - Summer Cambric',
    brand: 'Sapphire',
    type: '2-piece',
    fabric: 'Cambric',
    season: 'Summer',
    finish: 'Printed',
    price: 3499,
    originalPrice: 6999,
    images: ['https://picsum.photos/seed/sapphire1/800/800'],
    description:
      'Vibrant printed cambric 2-piece — comfortable daily wear. Seasonal offer sourced from surplus.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p003',
    title: 'Khaddar Winter 2-piece - Deep Maroon',
    brand: 'Nishaat',
    type: '2-piece',
    fabric: 'Khaddar',
    season: 'Winter',
    finish: 'Embroidered',
    price: 8999,
    originalPrice: 17999,
    images: ['https://picsum.photos/seed/nishaat1/800/800'],
    description:
      'Warm khaddar 2-piece with tasteful embroidery. Heavy-weight, ideal for cold months.',
    sizes: ['M', 'L']
  },
  {
    id: 'p004',
    title: 'Loose Linen Fabric - Natural',
    brand: 'Saya',
    type: 'Loose',
    fabric: 'Linen',
    season: 'Summer',
    finish: 'Printed',
    price: 1999,
    originalPrice: 3999,
    images: ['https://picsum.photos/seed/saya1/800/800'],
    description:
      'High-quality linen loose fabric sold by the meter — slightly imperfect pieces, perfect for custom stitching.',
    sizes: []
  },
  {
    id: 'p005',
    title: 'Karandi Winter 3-piece - Olive',
    brand: 'Limelight',
    type: '3-piece',
    fabric: 'Karandi',
    season: 'Winter',
    finish: 'Embroidered',
    price: 14999,
    originalPrice: 29999,
    images: ['https://picsum.photos/seed/limelight1/800/800'],
    description:
      'Elegant karandi 3-piece with delicate embroidery and premium lining. Sourced from last-season returns.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p006',
    title: 'Printed Lawn 2-piece - Floral Mint',
    brand: 'Agha Noor',
    type: '2-piece',
    fabric: 'Lawn',
    season: 'Summer',
    finish: 'Printed',
    price: 2799,
    originalPrice: 5499,
    images: ['https://picsum.photos/seed/aghanoor3/800/800'],
    description:
      'Lightweight printed lawn with crisp colors and soft handfeel — perfect for warm weather.',
    sizes: ['S', 'M']
  },
  {
    id: 'p007',
    title: 'Limited Khaddar - Heavy Weave',
    brand: 'Nishaat',
    type: 'Loose',
    fabric: 'Khaddar',
    season: 'Winter',
    finish: 'Embroidered',
    price: 2599,
    originalPrice: 4999,
    images: ['https://picsum.photos/seed/nishaat2/800/800'],
    description:
      'Heavy khaddar loose fabric — excellent for winter projects. Minimal flaws from overstock.',
    sizes: []
  },
  {
    id: 'p008',
    title: 'Summer Linen 2-piece - Natural Beige',
    brand: 'Limelight',
    type: '2-piece',
    fabric: 'Linen',
    season: 'Summer',
    finish: 'Printed',
    price: 4599,
    originalPrice: 8999,
    images: ['https://picsum.photos/seed/limelight2/800/800'],
    description:
      'Breathable linen 2-piece with subtle print — light and elegant for casual outings.',
    sizes: ['S', 'M', 'L']
  }
]

export default products