import styles from './styles.module.scss'

export const FooterBar = () => {
  const YEAR = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <div className={styles.footer__bar}>
        <div className={styles.footer__bar_copyright}>
          © Copyright 2019 - {YEAR}
        </div>
        <div className={styles.footer__bar_link}>
          Create by -
          <blockquote>
            <cite>
              <a
                href="https://weslleylima.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weslley Lima
              </a>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
