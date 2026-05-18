export type TeamMember = {
  id: string
  name: string
  role: string
  /** Single bio block (short profiles) */
  bio?: string
  /** Multi-paragraph bios for richer profiles */
  bioParagraphs?: string[]
  photoUrl?: string
  email?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'gayatri-joshi',
    name: 'Gayatri Joshi',
    role: 'President and Co-Founder',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/Gayatri%20Headshots-98.jpg',
    bioParagraphs: [
      'Gayatri Joshi is an internationally acclaimed Odissi dancer, choreographer, teacher, and visiting professor at the University of California, Santa Cruz. She is the co-founder of iGurukul Foundation and has been an integral part of the organization since its inception.',
      'With over three decades of dedication to the art form, she has played a significant role in elevating Odissi as both a prestigious academic pursuit and a globally respected classical dance tradition. In 2007, she founded iGurukul Odissi, where she developed a transformative curriculum that blends traditional discipline with contemporary innovation.',
      'Her choreographic repertoire includes more than 50 original works and large-scale productions, earning her numerous prestigious honors, including the 2025 Nritya Srujanika Award. By combining corporate leadership with artistic excellence, she has created a unique multidisciplinary approach that empowers students to grow into both accomplished artists and confident global leaders.',
      'Alongside her artistic journey, she also serves as a Business Data Leader at Wells Fargo.',
    ],
  },
  {
    id: 'manoj-joshi',
    name: 'Manoj Joshi',
    role: 'Board Member',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/manoj%20sir.avif',
    bioParagraphs: [
      'Manoj Joshi is a Bay Area Yogacharya formally trained in the Sivananda tradition, Kriya Yoga, SVYASA, Bihar School of Yoga, and Heartfulness. With over 30 years of experience, he has been teaching yoga, meditation, and Yoga Nidra, guiding individuals toward balance, clarity, and inner transformation.',
      'He is the Founder and CEO of 21SWP (21swp.org), a meditation platform serving executives, founders, and high-performing teams through structured, neuroscience-aligned reset programs. Prior to his work in wellness, Manoj brings over 15 years of experience in software engineering and agile leadership, blending technical insight with human-centered transformation.',
      'A passionate cultural contributor, Manoj is a veteran actor who has performed in over 30 Odia plays across the Bay Area and OSA conventions. He continues to inspire the community through his popular radio show WellnessByAllMeans and leads the “Arogya” segment on Ame Odia every Sunday, promoting holistic living and conscious well-being.',
    ],
  },
]
