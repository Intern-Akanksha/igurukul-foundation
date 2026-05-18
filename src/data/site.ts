const CDN = 'https://wajweb.b-cdn.net/igurukul-foundation'

export const site = {
  name: 'iGurukul Foundation',
  shortName: 'IGF',
  tagline: 'Rooted in Heritage · Rising Together',
  location: 'San Francisco Bay Area, California',
  email: 'info@igurukulfoundation.org',
  website: 'https://igurukulfoundation.org',
  logoUrl: `${CDN}/igfupdatedlogo.jpg`,
}

export const sitePhotos = {
  heroPoster: `${CDN}/iGurukul_2025_0070.jpeg`,
  odissi: `${CDN}/iGurukul_2025_0339a.jpeg`,
  classical: `${CDN}/iGurukul_2025_0089.jpeg`,
  community: `${CDN}/iGurukul_2025_0001.jpeg`,
} as const

export type NavItem = { label: string; to: string }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/about#team' },
  // { label: 'Programs', to: '/programs' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events', to: '/events' },
  { label: 'Partners', to: '/partners' },
  { label: 'Event 2026', to: '/event-2026' },
  { label: 'Contact', to: '/contact' },
]

export const quotes = {
  einstein: {
    text: 'Learn from Yesterday, Live for Today, Hope for Future, and Never Stop Questioning.',
    author: 'Albert Einstein',
  },
  gandhi: {
    text: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  huxley: {
    text: 'That men do not learn very much from the lessons of history is the most important of all the lessons of history.',
    author: 'Julian Huxley',
  },
}

export type Program = {
  title: string
  description: string
  emphasis?: string
}

export const programs: Program[] = [
  {
    title: 'Odia Literacy Centre',
    description:
      'Language classes that build reading, writing, and cultural confidence for youth and adults.',
    emphasis: 'Why learn Odia? Connect across generations and preserve identity.',
  },
  {
    title: 'Odissi Dance and Music',
    description:
      'Training and performance opportunities rooted in classical tradition and community celebration.',
  },
  {
    title: 'Yoga and Reiki Classes',
    description:
      'Well-being sessions that support balance, mindfulness, and holistic health.',
  },
  {
    title: 'IG Oriental Forum',
    description:
      'A platform for dialogue, ideas, and cultural exchange through talks and community learning.',
  },
  {
    title: 'Meet Your Parents & Grandparents',
    description:
      'Intergenerational storytelling and connection experiences that strengthen family roots.',
  },
  {
    title: 'Online Learning Portal (Future)',
    description:
      'A future-ready space for online classes and resources for learners anywhere.',
  },
  {
    title: 'Development Learning & Extension Programs',
    description:
      'Community programs focused on social learning, human development, and outreach.',
  },
]

export type NewsEvent = {
  title: string
  date: string
  summary: string
  location?: string
}

export type FeaturedEvent = {
  title: string
  flyerImageUrl: string
  flyerImageAlt: string
  registerUrl: string
  venueName: string
  venueAddress: string
  date: string
  time: string
}

export const featuredEvent: FeaturedEvent = {
  title: 'IGF 2026 Cultural Program & Community Learning Day',
  flyerImageUrl:
    'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(5).png',
  flyerImageAlt: 'iGurukul Foundation event flyer',
  registerUrl:
    'https://igurukulfoundation.onwajooba.com/checkout/igurukul-cultural-extravaganza-2026-88000246/Jr0XaegAq9/1',
  venueName: 'College of San Mateo Theater',
  venueAddress: '1700 W Hillsdale Blvd, San Mateo, CA 94402',
  date: 'Sunday, April 12, 2026',
  time: '10:00 AM – 7:00 PM',
}

export const newsEvents: NewsEvent[] = [
  {
    title: 'Odia Literacy Workshop: Reading & Writing Essentials',
    date: 'Past Event',
    summary:
      'A practical workshop for learners and parents focused on foundational scripts and pronunciation.',
  },
  {
    title: 'Odissi Showcase & Community Gathering',
    date: 'Past Event',
    summary:
      'An evening of dance, music, and community celebration featuring students and mentors.',
  },
  {
    title: 'Yoga for Everyday Balance',
    date: 'Past Series',
    summary:
      'Weekly sessions designed to support posture, breath, and calm focus for all experience levels.',
  },
]
