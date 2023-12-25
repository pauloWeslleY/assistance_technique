import { useMemo } from 'react'
import { Container } from '../ContainerBox'

import styles from './styles.module.scss'

interface TableHeroProps {
  table: {
    service: string
    average_time: string
    payment: string
    value: string
  }[]
}

export const TableHero = ({ table: TABLE }: TableHeroProps) => {
  const TITLE: Array<string> = [
    'Serviços',
    'Tempo Médio',
    'Forma de pagamento',
    'Valor',
  ]

  const dataTable = useMemo(() => {
    const data = TABLE.map(props => {
      return {
        service: props.service,
        averageTime: props.average_time,
        payments: props.payment,
        value: props.value,
      }
    })

    return data
  }, [TABLE])

  return (
    <Container>
      <div className={styles.table__title}>
        <h3>Tabela de Serviços</h3>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {TITLE.map(props => (
              <th key={`head-${props}`}>{props}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((props, index) => (
            <tr key={`table-${index}`}>
              <td>{props.service}</td>
              <td>{props.averageTime}</td>
              <td>{props.payments}</td>
              <td>R$: {props.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
