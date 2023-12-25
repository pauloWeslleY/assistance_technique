import { useMemo } from 'react'
import { Main } from '../../layout'
import { Banner } from '../../components/Banner'
import { CallToAction } from '../../components/CallToAction'
import { CardServices } from '../../components/CardServices'
import { Divider } from '../../components/Divider'
import { TableHero } from '../../components/TableHero'
import { CardProduct } from '../../components/CardProduct'
import { Maps } from '../../components/GoogleMaps'
import { FormHero } from '../../components/FormHero'
import { Footer } from '../../components/Footer'

import { CARDS_PROPS as CARDS } from '../../data/[cards_props]/cards_props'
import { CARDS_PRODUCTS } from '../../data/[cards_product]/cards_product'
import { TABLE } from '../../data/[table_props]/table_props'

export const Home = () => {
  const data = useMemo(() => {
    const response = CARDS_PRODUCTS.map(props => {
      return {
        title: props.title,
        description: props.description,
        imageURL: props.imageURL,
      }
    })

    return response
  }, [])

  return (
    <Main>
      <Banner />

      <CardServices cards={CARDS} />

      <section>
        <TableHero table={TABLE} />

        <CardProduct cards={data} />
      </section>

      <Divider />
      <Maps />
      <Divider />

      <section>
        <CallToAction
          title="A importância da assistência técnica"
          subtitle="2009-2011"
          description={`
            A assistência técnica desempenha um papel fundamental na manutenção
            e reparação de produtos e equipamentos tecnológicos. Quando esses
            dispositivos apresentam problemas, é a assistência técnica que
            entra em ação para diagnosticar, solucionar e restaurar seu
            funcionamento adequado.
          `}
          imageUrl="/images/slider-01.jpg"
        />

        <FormHero />
      </section>

      <footer>
        <Footer />
      </footer>
    </Main>
  )
}
