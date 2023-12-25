import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Container } from '../ContainerBox'
import { FooterBar } from './FooterBar'

import styles from './styles.module.scss'

export const Footer = () => (
  <>
    <div className={styles.footer__container}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.footer__context}>
            <h2>Assistência Online</h2>
            <span>
              Assistência técnica a qualquer hora, em qualquer lugar!
              contato@assitenciatecnica.io
            </span>
          </div>
          <div className={styles.footer__social_links}>
            <h2>Rede Sociais</h2>
            <ul className={styles.footer__social}>
              <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  <FaGooglePlusG />
                </a>
              </li>
              <li>
                <a href="/#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
    <FooterBar />
  </>
)
