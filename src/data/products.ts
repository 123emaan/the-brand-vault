import type { Product } from '../types'

const products: Product[] = [
  {
    id: 'p001',
    title: 'Embroidered Pastel Lawn 3-piece',
    brand: 'Agha Noor',
    type: '3-piece',
    fabric: 'Lawn',
    season: 'Summer',
    finish: 'Embroidered',
    price: 12999,
    images: [
      'https://picsum.photos/seed/aghanoor1/800/800',
      'https://picsum.photos/seed/aghanoor2/800/800'
    ],
    description:
      'Soft pastel lawn 3-piece with intricate embroidery. Excellent finish, breathable fabric perfect for summer. Premium quality at an accessible price.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p002',
    title: 'Printed Summer Cambric 2-piece',
    brand: 'Sapphire',
    type: '2-piece',
    fabric: 'Cambric',
    season: 'Summer',
    finish: 'Printed',
    price: 3499,
    images: ['https://picsum.photos/seed/sapphire1/800/800'],
    description:
      'Vibrant printed cambric 2-piece — comfortable daily wear with beautiful colors. Perfect for the modern wardrobe.',
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
    images: ['https://picsum.photos/seed/nishaat1/800/800'],
    description:
      'Warm khaddar 2-piece with tasteful embroidery. Heavy-weight fabric ideal for cold months. Elegant design with exceptional quality.',
    sizes: ['M', 'L']
  },
  {
    id: 'p004',
    title: 'Premium Linen Loose Fabric',
    brand: 'Saya',
    type: 'Loose',
    fabric: 'Linen',
    season: 'Summer',
    finish: 'Printed',
    price: 1999,
    images: ['https://picsum.photos/seed/saya1/800/800'],
    description:
      'High-quality linen loose fabric sold by the meter — perfect for custom stitching. Natural, breathable, and versatile.',
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
    images: ['https://picsum.photos/seed/limelight1/800/800'],
    description:
      'Elegant karandi 3-piece with delicate embroidery and premium lining. Sophisticated design for the discerning fashionista.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p006',
    title: 'Floral Mint Lawn 2-piece',
    brand: 'Agha Noor',
    type: '2-piece',
    fabric: 'Lawn',
    season: 'Summer',
    finish: 'Printed',
    price: 2799,
    images: ['https://picsum.photos/seed/aghanoor3/800/800'],
    description:
      'Lightweight printed lawn with crisp colors and soft handfeel — perfect for warm weather. Fresh and feminine design.',
    sizes: ['S', 'M']
  },
  {
    id: 'p007',
    title: 'Heavy Weave Khaddar Fabric',
    brand: 'Nishaat',
    type: 'Loose',
    fabric: 'Khaddar',
    season: 'Winter',
    finish: 'Embroidered',
    price: 2599,
    images: ['https://picsum.photos/seed/nishaat2/800/800'],
    description:
      'Heavy khaddar loose fabric — excellent for winter projects. Durable weave with beautiful texture.',
    sizes: []
  },
  {
    id: 'p008',
    title: 'Natural Beige Linen 2-piece',
    brand: 'Limelight',
    type: '2-piece',
    fabric: 'Linen',
    season: 'Summer',
    finish: 'Printed',
    price: 4599,
    images: ['https://picsum.photos/seed/limelight2/800/800'],
    description:
      'Breathable linen 2-piece with subtle print — light and elegant for casual outings. Timeless style, comfortable fit.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'p009',
    title: 'Embroidered Cambric 3-piece - Rose',
    brand: 'Sapphire',
    type: '3-piece',
    fabric: 'Cambric',
    season: 'Summer',
    finish: 'Embroidered',
    price: 9999,
    images: ['https://picsum.photos/seed/sapphire2/800/800'],
    description:
      'Delicate rose-toned cambric 3-piece with elegant embroidery. Perfect balance of tradition and contemporary style.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p010',
    title: 'Winter Karandi 2-piece - Charcoal',
    brand: 'Saya',
    type: '2-piece',
    fabric: 'Karandi',
    season: 'Winter',
    finish: 'Printed',
    price: 6999,
    images: ['https://picsum.photos/seed/saya2/800/800'],
    description:
      'Classic charcoal karandi 2-piece with refined print. Warm, sophisticated, and versatile for the winter season.',
    sizes: ['M', 'L', 'XL']
  }
]

export default products