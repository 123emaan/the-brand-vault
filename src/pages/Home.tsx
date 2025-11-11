import React, { useMemo, useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductFilterSidebar from '../components/ProductFilterSidebar'
import QuickViewModal from '../components/QuickViewModal'

const Home: React.FC = () => {
  const [filters, setFilters] = useState({
    search: '',
    brands: [] as string[],
    type: null as string | null,
    fabrics: [] as string[],
    seasons: [] as string[],
    finishes: [] as string[]
  })
  const [quick, setQuick] = useState<any>(null)

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim()
    return productsData.filter(p => {
      if (filters.brands.length && !filters.brands.includes(p.brand)) return false
      if (filters.type && filters.type !== p.type) return false
      if (filters.fabrics.length && !filters.fabrics.includes(p.fabric)) return false
      if (filters.seasons.length && !filters.seasons.includes(p.season)) return false
      if (filters.finishes.length && !filters.finishes.includes(p.finish)) return false
      if (q) {
        const hay = `${p.title} ${p.brand} ${p.fabric} ${p.finish}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [filters])

  function onChange(patch: Partial<typeof filters>) {
    setFilters(prev => ({ ...prev, ...patch }))
  }

  function resetAll() {
    setFilters({
      search: '',
      brands: [],
      type: null,
      fabrics: [],
      seasons: [],
      finishes: []
    })
  }

  const featuredBrands = ['Agha Noor','Sapphire','Nishaat','Saya','Limelight']

  return (
    <div>
      <section className="hero card fade-in" aria-label="Featured">
        <div className="text">
          <div className="pretitle">Curated Fashion</div>
          <h1>Branded elegance, accessible prices — quality you trust</h1>
          <p>Explore a handpicked collection from Pakistan's most beloved brands. Each piece is carefully curated and offered at prices that make premium fashion accessible to everyone.</p>
          <div style={{display:'flex', gap:12, marginTop:14}}>
            <a className="btn btn-primary" href="#shop">Shop the Collection</a>
            <a className="btn btn-ghost" href="/about">Learn Our Story</a>
          </div>

          <div style={{marginTop:22, display:'flex', gap:10, alignItems:'center', flexWrap:'wrap'}}>
            <div className="kicker">Popular categories</div>
            <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
              <div style={{background:'#fff', padding:'8px 12px', borderRadius:999, boxShadow:'var(--shadow-soft)', fontWeight:800}}>3-piece suits</div>
              <div style={{background:'#fff', padding:'8px 12px', borderRadius:999, boxShadow:'var(--shadow-soft)', fontWeight:800}}>Lawn & Cambric</div>
              <div style={{background:'#fff', padding:'8px 12px', borderRadius:999, boxShadow:'var(--shadow-soft)', fontWeight:800}}>Khaddar & Karandi</div>
            </div>
          </div>
        </div>

        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div className="collage" aria-hidden>
            <img className="large" src="https://picsum.photos/seed/hero-large/640/820" alt="model" />
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              <img className="small" src="https://picsum.photos/seed/hero-1/320/420" alt="detail" />
              <img className="small" src="https://picsum.photos/seed/hero-2/320/420" alt="detail2" />
            </div>
          </div>
        </div>
      </section>

      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12, marginTop:6}}>
        <div className="pretitle">Featured Brands</div>
        <div className="muted">{filtered.length} items</div>
      </div>

      <div className="featured-brands">
        {featuredBrands.map(b => <div className="brand-pill" key={b}><img src={`https://picsum.photos/seed/${b.replace(/\s/g,'')}/40/40`} style={{width:28,height:28,borderRadius:6}} alt={b} /> {b}</div>)}
      </div>

      <div id="shop" className="shop-layout">
        <ProductFilterSidebar products={productsData} filters={filters} onChange={onChange} onReset={resetAll} />

        <section>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
            <div>
              <h2 style={{fontSize:20}}>Our Collection</h2>
              <div className="muted">Seasonal finds • curated just for you</div>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:12}}>
              <div className="muted">Sort: Popular</div>
            </div>
          </div>

          <div className="product-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} onQuickView={(prod)=>setQuick(prod)} />
            ))}
          </div>
        </section>
      </div>

      <QuickViewModal product={quick} onClose={()=>setQuick(null)} />
    </div>
  )
}

export default Home