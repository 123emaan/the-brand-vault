import React, { useMemo } from 'react'
import type { Product } from '../types'
import styles from './ProductFilterSidebar.module.css'

type Props = {
  products: Product[]
  filters: {
    search: string
    brands: string[]
    type: string | null
    fabrics: string[]
    seasons: string[]
    finishes: string[]
  }
  onChange: (patch: Partial<Props['filters']>) => void
  onReset: () => void
}

const ProductFilterSidebar: React.FC<Props> = ({ products, filters, onChange, onReset }) => {
  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), [products])
  const fabrics = useMemo(() => Array.from(new Set(products.map(p => p.fabric))), [products])
  const seasons = ['Summer', 'Winter']
  const types = Array.from(new Set(products.map(p => p.type)))
  const finishes = Array.from(new Set(products.map(p => p.finish)))

  const toggleMulti = (key: 'brands'|'fabrics'|'seasons'|'finishes', value: string) => {
    const set = new Set(filters[key])
    if (set.has(value)) set.delete(value)
    else set.add(value)
    onChange({ [key]: Array.from(set) } as any)
  }

  return (
    <aside className={styles.sidebar}>
      <div className="kicker pretitle">Filters</div>

      <div className={styles.section}>
        <label>Search</label>
        <input value={filters.search} onChange={e=>onChange({search: e.target.value})} placeholder="Search products, brands..." />
      </div>

      <div className={styles.section}>
        <label>Brand</label>
        <div className={styles.multilist}>
          {brands.map(b => (
            <button key={b} className={filters.brands.includes(b) ? styles.activePill : styles.pill} onClick={()=>toggleMulti('brands', b)}>{b}</button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label>Type</label>
        <div className={styles.multilist}>
          <button className={filters.type === null ? styles.activePill : styles.pill} onClick={()=>onChange({type: null})}>All</button>
          {types.map(t => (
            <button key={t} className={filters.type === t ? styles.activePill : styles.pill} onClick={()=>onChange({type: t})}>{t}</button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label>Fabric</label>
        <div className={styles.multilist}>
          {fabrics.map(f => (
            <button key={f} className={filters.fabrics.includes(f) ? styles.activePill : styles.pill} onClick={()=>toggleMulti('fabrics', f)}>{f}</button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label>Season</label>
        <div className={styles.multilist}>
          {seasons.map(s => (
            <button key={s} className={filters.seasons.includes(s) ? styles.activePill : styles.pill} onClick={()=>toggleMulti('seasons', s)}>{s}</button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label>Finish</label>
        <div className={styles.multilist}>
          {finishes.map(f => (
            <button key={f} className={filters.finishes.includes(f) ? styles.activePill : styles.pill} onClick={()=>toggleMulti('finishes', f)}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{marginTop:12, display:'flex', gap:10}}>
        <button className="btn btn-ghost" onClick={onReset}>Reset</button>
        <button className="btn btn-primary" onClick={()=>onChange({search:''})}>Apply</button>
      </div>
    </aside>
  )
}

export default ProductFilterSidebar