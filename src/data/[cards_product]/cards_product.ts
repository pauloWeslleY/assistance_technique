interface CardProductProps {
  title: string
  description: string
  imageURL: string
}

export const CARDS_PRODUCTS: Array<CardProductProps> = [
  {
    title: 'Google Pixel 2',
    description: `
      O Google Pixel 2 e o Pixel 2 XL apresentam muitas melhorias e
      novos recursos comparados aos seus predecessores...
    `,
    imageURL: '/images/google-pixel-3-colors.jpg',
  },
  {
    title: 'Chromecast Áudio',
    description: `
      Uma das melhores características do Chromecast Audio
      é poder juntar várias unidades em um grupo de áudio...
    `,
    imageURL: '/images/chromecast-audio-dos.jpg',
  },
  {
    title: 'Chromecast Ultra Rocks 4K',
    description: `
      O Chromecast Ultra do Google ultrapassou a qualidade 4K e HDR,
      o que é bastante impressionante considerando o preço...
    `,
    imageURL: '/images/chromecast-ultra.jpg',
  },
  {
    title: 'Moto 360 Smartwatch',
    description: `
      Com uma tela circular de 1,6 polegada (feita com vidro Gorilla Glass),
      o Moto 360 é, de fato, o primeiro relógio inteligente...
    `,
    imageURL: '/images/moto-360.jpg',
  },
]
