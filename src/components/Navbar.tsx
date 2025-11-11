import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <div className={styles.logoMark} />
          <div>
            <div className={styles.title}>The Brand Vault</div>
            <div className={styles.subtitle}>Branded fashion, accessible</div>
          </div>
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" end className={({isActive}) => isActive? styles.active : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive? styles.active : ''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive? styles.active : ''}>Contact</NavLink>
        </nav>

        <div className={styles.actions}>
          <input className={styles.search} placeholder="Search products, brands..." />
          <button className={styles.cart}>Cart</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar