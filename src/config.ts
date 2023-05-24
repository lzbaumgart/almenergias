import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'ALM Energias',
  description: 'Empresa de instalação de energia solar.',
  author: {
    name: 'Lucas Baumgart',
    url: 'https://almenergias.com',
    email: 'lucasbaumgart@almenergias.com',
  },
  org: {
    email: '',
    summary: '',
    url: '',
    name: '',
  },
  location: 'Sapiranga, RS',
  latlng: [-29.641429, -51.0050353] as [number, number],
  social: [
    {
      name: 'Email',
      link: 'mailto:contato@almenergias.com',
      icon: 'envelope',
    },
    {
      name: 'Phone',
      link: '555-5555',
      icon: 'telephone',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/almenergias',
      icon: 'instagram',
    },
  ],
  buildTime: new Date(),
}

export const Logo = '../images/astro/logo-alm.png'
export const LogoImage = '../images/astro/full-logo-light.png'
export const FeaturedSVG = '../images/gallery/imagem-capa.jpg'
export const DefaultSVG = '../images/svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Serviços', href: 'about' },
  { name: 'Contato', href: 'contact' },
  //{ name: 'Blog', href: 'blog' },
]
