import { ReactElement } from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaPhoneAlt,
} from 'react-icons/fa'

import styles from './styles.module.scss'

interface IconProps {
  icon: ReactElement
}

export const NavBar = () => {
  const ICON: Array<IconProps> = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <FaGooglePlusG /> },
  ]

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <FaPhoneAlt />
          <span>+ 4 (8056) 0000 1756</span>
        </div>

        <ul className={styles.navbar__menu}>
          <li>
            <a href="/#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="/#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/#">
              <FaGooglePlusG />
            </a>
          </li>
          <li>
            <a href="/#">
              <FaPinterestP />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
