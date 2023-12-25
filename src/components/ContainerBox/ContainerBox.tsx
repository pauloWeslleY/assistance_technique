import { ReactNode, HTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Container = ({ children, ...props }: ContainerProps) => (
  <div {...props} className={styles.container}>
    {children}
  </div>
)
