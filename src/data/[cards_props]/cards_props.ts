import { IconType } from 'react-icons'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { PiUsers } from 'react-icons/pi'

interface CardsProps {
  title: string
  icon: IconType
  description: string
}

export const CARDS_PROPS: Array<CardsProps> = [
  {
    title: 'Assistência Técnica',
    icon: FaTools,
    description: `
      Serviços prestados por equipe técnica
      qualificada com alto nível técnico e
      treinamento constantes.
    `,
  },
  {
    title: 'Vendas de Produtos',
    icon: AiOutlineShoppingCart,
    description: `
      Aqui você encontrará os lançamentos e
      melhores produtos de tecnologia do mercado.
    `,
  },
  {
    title: 'Suporte ao Técnico',
    icon: PiUsers,
    description: `
      A Assistência Técnica, presta suporte técnico empresarial
      para hardware, software, sistemas e infraestrutura.
    `,
  },
]
