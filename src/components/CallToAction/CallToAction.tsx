import { Container } from '../ContainerBox'

import styles from './styles.module.scss'

interface CallToActionProps {
  title: string
  subtitle: string
  description: string
  imageUrl: string
}

export const CallToAction = (props: CallToActionProps) => {
  const { title, subtitle, description, imageUrl } = props

  return (
    <Container>
      <div className={styles.callTo__hero}>
        <div className={styles.callTo__hero_image}>
          <img src={imageUrl} alt="Banner" />
        </div>

        <div className={styles.callTo__hero_item}>
          <h2>{title}</h2>
          <span>{subtitle}</span>

          <p>{description}</p>
        </div>
      </div>
    </Container>
  )
}
