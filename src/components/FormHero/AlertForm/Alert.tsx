import { ElementType } from 'react'

import styles from './styles.module.scss'

interface AlertProps {
  message: string
  icon: ElementType
}

export const Alert = ({ message, icon: Icon }: AlertProps) => (
  <div className={styles.alert}>
    <span className={styles.alert__icon}>
      <Icon />
    </span>
    <p className={styles.alert__message}>{message}</p>
  </div>
)
