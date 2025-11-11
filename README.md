# The Brand Vault

A beautiful, modern e-commerce frontend for "The Brand Vault" — a Pakistani women's clothing brand offering branded clothes at affordable prices.

## 🌟 Features

### Visual Design
- **Premium Aesthetic**: Clean, elegant, fashion-boutique quality design
- **Color Palette**: Deep Teal (#0f766e), Gold Accent (#d4af37), Neutral Background (#fbfaf9)
- **Typography**: Google Fonts - Poppins (headings) and Noto Sans (body)
- **Responsive**: Mobile-first design adapting from mobile → tablet → desktop

### Product Catalog
- **10 Curated Products** from top Pakistani brands:
  - Agha Noor, Sapphire, Nishaat, Saya, Limelight
- **Product Types**: 3-piece suits, 2-piece suits, Loose fabric
- **Fabrics**: Lawn, Cambric, Khaddar, Linen, Karandi
- **Seasons**: Summer and Winter collections
- **Finishes**: Embroidered or Printed

### Key Components
- **Hero Section**: Collage-style imagery with compelling headline
- **Product Grid**: Responsive (4 → 2 → 1 columns), large beautiful imagery
- **Filter Sidebar**: Sticky sidebar with filters for Brand, Type, Fabric, Season, Finish
- **Product Cards**: Elegant hover effects with image scale and smooth transitions
- **Quick View Modal**: Large imagery, elegant overlay for fast browsing
- **Navigation**: Glassy backdrop, refined logo, smooth interactions

### Pages
1. **Home** — Hero banner, featured brands, product grid with filters
2. **About** — Brand story focusing on affordability and quality
3. **Contact** — Contact info & inquiry form
4. **Product Detail** — Large image, description, fabric, brand, single price display

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
/the-brand-vault/
├── /src/
│   ├── /components/
│   │   ├── Navbar.tsx + Navbar.module.css
│   │   ├── Footer.tsx + Footer.module.css
│   │   ├── ProductCard.tsx + ProductCard.module.css
│   │   ├── ProductFilterSidebar.tsx + ProductFilterSidebar.module.css
│   │   └── QuickViewModal.tsx + QuickViewModal.module.css
│   ├── /pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── ProductPage.tsx
│   ├── /assets/
│   │   └── /styles/
│   │       └── global.css
│   ├── /data/
│   │   └── products.ts
│   ├── types.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠 Technology Stack

- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Routing**: React Router v6
- **Styling**: CSS Modules + Global CSS
- **Fonts**: Google Fonts (Poppins, Noto Sans)

## 🎨 Design Philosophy

### Messaging
- Focus on: "affordable branded fashion", "quality you trust", "curated collection"
- Tone: elegant, inviting, premium yet accessible
- Single price display (no price comparisons)

### User Experience
- Super inviting and aesthetic — think high-end fashion boutique
- Clean, spacious layout with elegant typography
- Smooth hover effects and subtle animations
- Fast, responsive interactions

## 🔌 Backend Integration

The application is designed with easy backend integration in mind:

- Product data is centralized in `/src/data/products.ts`
- Type definitions in `/src/types.ts` match common API structures
- Replace mock data with API calls in component lifecycle
- Filtering logic can be moved to backend queries

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a complete, production-ready frontend. To extend:

1. Replace mock product data with API integration
2. Add shopping cart functionality
3. Implement authentication/user accounts
4. Add payment gateway integration
5. Connect to inventory management system

## 📄 License

All rights reserved © 2025 The Brand Vault

## 💡 Notes

- Uses placeholder images from picsum.photos
- All product data is mock data for demonstration
- Forms are not connected to backend (demo functionality only)
- Ready for API integration

---

Built with ❤️ for fashion-conscious Pakistani women who love quality and value.
