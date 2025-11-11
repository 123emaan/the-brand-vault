import React from 'react'
import type { Product } from '../types'
import styles from './QuickViewModal.module.css'
import { Link } from 'react-router-dom'

type Props = {
  product?: Product | null
  onClose: () => void
}

const QuickViewModal: React.FC<Props> = ({ product, onClose }) => {
  if (!product) return null
  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <div className={styles.content}>
          <div className={styles.media}>
            <img src={product.images[0]} alt={product.title} />
          </div>
          <div className={styles.info}>
            <h3>{product.title}</h3>
            <p className="muted">{product.brand} • {product.fabric} • {product.finish}</p>
            <div style={{marginTop:12}}>
              <div className="price">PKR {product.price.toLocaleString()}</div>
              {product.originalPrice && <div className="orig">PKR {product.originalPrice.toLocaleString()}</div>}
            </div>
            <p style={{marginTop:12}} className="muted">{product.description}</p>

            <div style={{marginTop:14, display:'flex', gap:10}}>
              <Link to={`/product/${product.id}`} onClick={onClose} className="btn btn-primary" style={{textDecoration:'none'}}>View Product</Link>
              <button className="btn btn-ghost" onClick={()=>{ navigator.clipboard?.writeText(window.location.href); alert('Link copied') }}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal