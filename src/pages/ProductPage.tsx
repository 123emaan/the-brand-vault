import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

const ProductPage: React.FC = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div style={{textAlign:'center', padding:40}}>
        <h2>Product Not Found</h2>
        <p className="muted">We couldn't find that product. Try browsing our collection.</p>
        <Link to="/" className="btn btn-primary">Back to Shop</Link>
      </div>
    )
  }

  return (
    <div style={{maxWidth:1000, margin:'0 auto'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
        <div className="card" style={{padding:16}}>
          <img src={product.images[0]} alt={product.title} style={{width:'100%', borderRadius:10}} />
        </div>
        <div>
          <div className="kicker pretitle">{product.brand}</div>
          <h1 style={{marginBottom:8}}>{product.title}</h1>
          <div className="muted">{product.fabric} • {product.finish} • {product.season}</div>
          <div style={{marginTop:12}}>
            <div className="price" style={{fontSize:28}}>PKR {product.price.toLocaleString()}</div>
          </div>

          <div style={{marginTop:18}}>
            <h4>Product Details</h4>
            <p className="muted">{product.description}</p>

            {product.sizes && product.sizes.length > 0 && (
              <>
                <h4 style={{marginTop:12}}>Available Sizes</h4>
                <div style={{display:'flex', gap:8}}>
                  {product.sizes.map(s => <div key={s} style={{padding:'8px 12px', background:'#fbfbfb', borderRadius:8}}>{s}</div>)}
                </div>
              </>
            )}

            <div style={{marginTop:18, display:'flex', gap:10}}>
              <button className="btn btn-primary">Add to Cart</button>
              <a className="btn btn-ghost" href="#inquiry">Ask about this product</a>
            </div>
          </div>
        </div>
      </div>

      <div id="inquiry" style={{marginTop:24}} className="card">
        <div style={{padding:16}}>
          <h3>Inquiry about this item</h3>
          <p className="muted">Email hello@thebrandvault.pk with the product code <strong>{product.id}</strong> for any questions or bulk order inquiries.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage