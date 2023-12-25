import { ChangeEvent, FormEvent, useState } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { Alert } from '../AlertForm/Alert'

import styles from './styles.module.scss'

interface FormProps {
  username: string
  email: string
  password: string
  telephone: string
  business: string
  message: string
}

export const Form = () => {
  const [erro, setErro] = useState('')
  const [form, setForm] = useState<FormProps>({
    username: '',
    email: '',
    password: '',
    telephone: '',
    business: '',
    message: '',
  })

  const handleSign = (event: FormEvent) => {
    event.preventDefault()

    const { email, message, password, username } = form

    if (!username && !email && !password && !message) {
      setErro('Por favor, preencha todos os campos.')
      return
    }

    // Limpar os campos
    setForm({
      username: '',
      email: '',
      password: '',
      business: '',
      telephone: '',
      message: '',
    })
    setErro('')
  }

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSign} className={styles.form}>
      {erro && <Alert icon={FiAlertTriangle} message={erro} />}
      <label htmlFor="username">Nome</label>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleOnChange}
        placeholder="Nome"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleOnChange}
        placeholder="Email"
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleOnChange}
        placeholder="Senha"
      />
      <label htmlFor="telephone">Telefone</label>
      <input
        type="text"
        name="telephone"
        value={form.telephone}
        onChange={handleOnChange}
        placeholder="Telefone"
      />
      <label htmlFor="business">Assunto</label>
      <input
        type="text"
        name="business"
        value={form.business}
        onChange={handleOnChange}
        placeholder="Assunto"
      />

      <label htmlFor="message">Mensagem:</label>
      <textarea
        name="message"
        placeholder="Digite seu mensagem"
        onChange={handleOnChange}
        value={form.message}
      />

      <div className={styles.form__button}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}
