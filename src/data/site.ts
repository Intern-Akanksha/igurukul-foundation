export const site = {
  name: 'iGurukul Foundation',
  shortName: 'IGF',
  tagline: 'A Centre of Excellence in Learning & Human Development',
  location: 'San Francisco Bay Area, California',
  email: 'info@igurukulfoundation.org',
  website: 'https://igurukulfoundation.org',
  logoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/igfupdatedlogo.jpg',
}

export type NavItem = { label: string; to: string }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events', to: '/events' },
  { label: 'Partners', to: '/partners' },
  { label: 'Event 2026', to: '/event-2026' },
  { label: 'Contact', to: '/contact' },
]

export const quotes = {
  einstein: {
    text: 'Learn from Yesterday. Live for Today. Hope for Tomorrow. Never Stop Questioning.',
    author: 'Albert Einstein',
  },
  meher: {
    text: 'If you know your roots deeply, your branches can touch the sky.',
    author: 'Gangadhar Meher',
  },
  carter: {
    text: 'There are only two lasting bequests we can hope to give our children — one is roots, the other is wings.',
    author: 'Hodding Carter',
  },
}
