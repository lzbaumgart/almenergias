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

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../images/svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.',
  },
  {
    category: 'information',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.',
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../images/svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'Chris Tham',
    description: 'Hello World',
    contact: 'chris@christham.net',
    image: '../images/authors/Chris Tham.jpg',
  },
]

export const DefaultAuthor = {
  name: 'Hello Astro',
  image: '../images/authors/default.png',
  contact: 'info@hellotham.com',
  description: 'Astronaut',
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'Serviços', href: 'about' },
  { name: 'Contato', href: 'contact' },
  //{ name: 'Blog', href: 'blog' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
