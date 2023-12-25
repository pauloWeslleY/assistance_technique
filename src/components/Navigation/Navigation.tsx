import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import styles from './styles.module.scss'

export const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const location = useLocation()

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={styles.container}>
      <nav
        className={styles.navbar}
        onClick={isNavOpen ? toggleNav : undefined}
      >
        <div className={styles.navbar__logo}>
          <img src="/images/logo-full-navbar.png" alt="Logotipo" />
        </div>

        <ul
          className={`${styles.navbar__links} ${isNavOpen ? styles.open : ''}`}
        >
          <li className={location.pathname === '/' ? styles.active : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/service' ? styles.active : ''}>
            <Link to="/service">Service</Link>
          </li>
          <li className={location.pathname === '/product' ? styles.active : ''}>
            <Link to="/product">Product</Link>
          </li>
          <li className={location.pathname === '/about' ? styles.active : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/contact' ? styles.active : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className={styles.navbar__toggle_button} onClick={toggleNav}>
          {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
    </div>
  )
}
