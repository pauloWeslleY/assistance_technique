import { Container } from '../ContainerBox'
import { CardProductItem } from './CardProductItem'

import styles from './styles.module.scss'

interface CardProductProps {
  cards: {
    title: string
    description: string
    imageURL: string
  }[]
}

export const CardProduct = ({ cards }: CardProductProps) => {
  return (
    <Container>
      <div className={styles.card__title}>
        <h3>Produtos</h3>
        <span>Últimos Lançamentos</span>
      </div>

      <div className={styles.card__container}>
        {cards.map(card => (
          <CardProductItem key={`card-${card.title}`} card={card} />
        ))}
      </div>
    </Container>
  )
}
