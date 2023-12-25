import { Form } from './Form/Form'
import { Container } from '../ContainerBox'

import styles from './styles.module.scss'

export const FormHero = () => {
  return (
    <Container>
      <div className={styles.form__hero}>
        <div className={styles.form__hero_contact}>
          <h3>Fale Conosco</h3>
          <span>Entre em Contato e logo retornaremos.</span>

          <ul className={styles.form__contact}>
            <li>
              <span>Telefone</span>: +55 (75) 94004-9898
            </li>
            <li>
              <span>E-mail</span>: contato@assitenciatecnica.io
            </li>
            <li>
              <span>Site</span>: http://www.assistenciatecnica.io
            </li>
          </ul>
        </div>
        <div className={styles.form__hero_inputs}>
          <Form />
        </div>
      </div>
    </Container>
  )
}
