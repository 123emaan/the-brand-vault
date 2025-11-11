import React from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../types'
import styles from './ProductCard.module.css'

type Props = {
  product: Product
  onQuickView?: (p: Product) => void
}

const ProductCard: React.FC<Props> = ({ product, onQuickView }) => {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <img src={product.images[0]} alt={product.title} />
        <div className={styles.overlay}>
          <button className={styles.quick} onClick={() => onQuickView?.(product)}>Quick View</button>
          <Link to={`/product/${product.id}`} className={styles.view}>View</Link>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <div className={styles.brand}>{product.brand}</div>
          <div className={styles.priceRow}>
            <div className={styles.price}>PKR {product.price.toLocaleString()}</div>
            {product.originalPrice && <div className={styles.orig}>PKR {product.originalPrice.toLocaleString()}</div>}
          </div>
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.tags}>
          <span>{product.fabric}</span>
          <span>{product.finish}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard