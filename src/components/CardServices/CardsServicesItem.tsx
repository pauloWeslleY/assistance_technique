import { ElementType } from 'react'

import styles from './styles.module.scss'

interface CardsServicesItemProps {
  title: string
  icon: ElementType
  description: string
}

interface CardsItemProps {
  cards: CardsServicesItemProps
}

export const CardsServicesItem = ({ cards }: CardsItemProps) => {
  const { title, description, icon: Icon } = cards

  return (
    <article className={styles.card__service_item}>
      <h2>{title}</h2>
      <Icon />
      <span>{description}</span>
    </article>
  )
}
