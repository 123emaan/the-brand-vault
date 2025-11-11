import React from 'react'

const About: React.FC = () => {
  return (
    <div style={{maxWidth:980, margin:'0 auto'}}>
      <div className="kicker pretitle">About Us</div>
      <h1>Our Story — Fashion with purpose</h1>
      <p className="muted" style={{marginTop:12}}>
        The Brand Vault started with a simple belief: every woman deserves access to high-quality branded clothing at fair prices. We carefully curate collections from Pakistan's most trusted fashion labels, ensuring each item meets our exacting quality standards while remaining beautifully affordable.
      </p>

      <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:22}}>
        <div className="card" style={{padding:18}}>
          <h3>Quality First</h3>
          <p className="muted">Every product is inspected and curated by our team. We only list pieces that meet a high bar of craftsmanship — so you get authentic brand quality at prices you'll love.</p>
        </div>
        <div className="card" style={{padding:18}}>
          <h3>Affordable Pricing</h3>
          <p className="muted">Through smart sourcing and careful curation, we bring you premium fashion at accessible prices. It's the quality you expect, at a value you'll appreciate.</p>
        </div>
        <div className="card" style={{padding:18}}>
          <h3>Sustainable Approach</h3>
          <p className="muted">Reducing waste and extending the lifecycle of beautiful garments supports a healthier fashion economy. Each purchase makes a positive impact.</p>
        </div>
        <div className="card" style={{padding:18}}>
          <h3>Brands You Trust</h3>
          <p className="muted">Agha Noor, Sapphire, Nishaat, Saya, Limelight and more — sourced with care and authenticity guaranteed.</p>
        </div>
      </section>

      <div style={{marginTop:20}} className="card">
        <div style={{display:'flex', gap:18, padding:18, alignItems:'center'}}>
          <img src="https://picsum.photos/seed/store/400/250" alt="store" style={{width:360, borderRadius:10}} />
          <div>
            <h3>Visit our collection</h3>
            <p className="muted">Browse the latest arrivals and seasonal collections — handpicked for style-conscious shoppers who love quality and value.</p>
            <a href="/" className="btn btn-primary" style={{marginTop:8}}>Start Shopping</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About