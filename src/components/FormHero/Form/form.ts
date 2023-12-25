interface FormProps {
  id: string
  title: string
  type: string
  description: string
}

export const FORM: Array<FormProps> = [
  {
    id: 'name',
    type: 'text',
    title: 'Nome:',
    description: 'Digite seu nome',
  },
  {
    id: 'email',
    type: 'email',
    title: 'Email:',
    description: 'Digite seu email',
  },
  {
    id: 'password',
    type: 'password',
    title: 'Senha:',
    description: 'Digite sua senha',
  },
  {
    id: 'text',
    type: 'text',
    title: 'Telefone:',
    description: 'Digite seu telefone',
  },
  {
    id: 'business',
    type: 'text',
    title: 'Assunto:',
    description: 'Digite o assunto',
  },
]
