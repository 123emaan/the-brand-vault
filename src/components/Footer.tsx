import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className="site-footer card">
        <div style={{display:'flex', justifyContent:'space-between', gap:20, flexWrap:'wrap'}}>
          <div style={{flex:'1 1 260px', padding:18}}>
            <h3 style={{marginBottom:8}}>The Brand Vault</h3>
            <p className="muted">Curated surplus and last-season pieces from Pakistan's top brands. Quality you can trust at prices you'll love.</p>
          </div>
          <div style={{flex:'1 1 160px', padding:18}}>
            <h4 style={{marginBottom:8}}>Quick Links</h4>
            <nav className={styles.links}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
          <div style={{flex:'1 1 200px', padding:18}}>
            <h4 style={{marginBottom:8}}>Contact</h4>
            <p className="muted">Email: hello@thebrandvault.pk</p>
            <p className="muted">Karachi, Pakistan</p>
          </div>
        </div>
        <div style={{textAlign:'center', marginTop:18, color:'var(--muted)'}}>© {new Date().getFullYear()} The Brand Vault — All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer