export type FoundationEvent = {
  id: string
  title: string
  imageUrl: string
  pricing: 'Paid' | 'Free'
  dateTime: string
  location: string
  registrationHref: string
}

export const pastEvents: FoundationEvent[] = [
  {
    id: 'cultural-extravaganza-2026',
    title: 'iGurukul Cultural Extravaganza 2026',
    imageUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(5).png',
    pricing: 'Paid',
    dateTime: 'Sun, Apr 12, 2026 · 3:30 PM – 12:30 AM',
    location: 'College of San Mateo Theatre, 1700 W Hillsdale Blvd, San Mateo, CA, 94402',
    registrationHref: '/event-2026',
  },
  {
    id: 'sabitri-celebration-2026',
    title: 'Sabitri Celebration',
    imageUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/tnb8xc1gawlybfjp0w4g%20(1).png',
    pricing: 'Free',
    dateTime: 'Sat, May 16, 2026 · 5:00 PM – 7:00 PM',
    location: 'iGurukul Santa Clara, 2067 Agnew Road, Santa Clara, California, 95054',
    registrationHref: '/registration',
  },
  {
    id: 'odia-yearly-exams-2026',
    title: 'Odia Yearly Exams',
    imageUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/odia%20exam.jpeg',
    pricing: 'Paid',
    dateTime: 'Sun, May 31, 2026 · 9:30 PM – 10:30 PM',
    location: 'iGurukul Fremont Center, 5500 Stewart Ave, Fremont, California (CA), 94538',
    registrationHref: '/registration',
  },
]
