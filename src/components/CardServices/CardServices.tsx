import { useMemo } from 'react'
import { IconType } from 'react-icons'
import { Container } from '../ContainerBox'
import { CardsServicesItem } from './CardsServicesItem'

import styles from './styles.module.scss'

interface CardServicesProps {
  cards: {
    title: string
    icon: IconType
    description: string
  }[]
}

export const CardServices = ({ cards }: CardServicesProps) => {
  const cardItem = useMemo(() => {
    const data = cards.map(card => {
      return {
        title: card.title,
        description: card.description,
        icon: card.icon,
      }
    })

    return data
  }, [cards])

  return (
    <Container>
      <section className={styles.cards}>
        {cardItem.map(props => (
          <CardsServicesItem key={`card-${props.icon}`} cards={props} />
        ))}
      </section>
    </Container>
  )
}
