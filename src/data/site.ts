export const site = {
  name: 'iGurukul Foundation',
  shortName: 'IGF',
  tagline:
    'International Gurukul: A Centre of Excellence in Learning',
  location: 'Immigrant community',
  email: 'igurukulfoundation@gmail.com',
  website: 'https://igurukul.org',
}

export type NavItem = { label: string; to: string }

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Events', to: '/news-events' },
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
  footer: {
    text: 'There are only two lasting bequests we can give our children: one is roots, the other is wings.',
    author: 'Hodding Carter',
  },
}

export type Program = {
  title: string
  description: string
  emphasis?: string
}

export const programs: Program[] = [
  {
    title: 'Oriya Literacy Centre',
    description:
      'Language classes that build reading, writing, and cultural confidence for youth and adults.',
    emphasis: 'Why learn Oriya? Connect across generations and preserve identity.',
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
    'https://igurukulfoundation.org/wp-content/uploads/2026/03/igf2026flyer-768x994.jpeg',
  flyerImageAlt: 'iGurukul Foundation event flyer for 2026',
  registerUrl:
    'https://igurukulfoundation.onwajooba.com/checkout/igurukul-cultural-extravaganza-2026-88000246/Jr0XaegAq9/1',
  venueName: 'College of San Mateo Theater',
  venueAddress: '1700 W Hillsdale Blvd, San Mateo, CA 94402',
  date: 'Sunday, April 12, 2026',
  time: '10:00 AM – 7:00 PM',
}

export const newsEvents: NewsEvent[] = [
  {
    title: 'Oriya Literacy Workshop: Reading & Writing Essentials',
    date: 'Upcoming',
    summary:
      'A practical session for learners and parents, focused on foundational scripts and pronunciation.',
  },
  {
    title: 'Odissi Showcase & Community Gathering',
    date: 'Upcoming',
    summary:
      'An evening of dance, music, and community celebration featuring students and mentors.',
  },
  {
    title: 'Yoga for Everyday Balance',
    date: 'Ongoing',
    summary:
      'Weekly sessions designed to support posture, breath, and calm focus for all experience levels.',
  },
]
