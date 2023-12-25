import styles from './styles.module.scss'

interface CardProductItemProps {
  title: string
  description: string
  imageURL: string
}

interface CardsProps {
  card: CardProductItemProps
}

export const CardProductItem = ({ card }: CardsProps) => {
  const { title, description, imageURL } = card

  return (
    <div className={styles.card__product}>
      <div className={styles.card__product_image}>
        <img src={imageURL} alt="Card Item" />
        <h3>{title}</h3>
      </div>

      <div className={styles.card__product_body}>
        <p>{description}</p>
      </div>
    </div>
  )
}
