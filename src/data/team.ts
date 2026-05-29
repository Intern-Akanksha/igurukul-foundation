export type TeamMember = {
  id: string
  name: string
  role: string
  /** Single bio block (short profiles) */
  bio?: string
  /** Multi-paragraph bios for richer profiles */
  bioParagraphs?: string[]
  photoUrl?: string
  photoObjectPosition?: string
  email?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'kuku-das',
    name: 'Kuku Das',
    role: 'Co-Founder & Past President',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/kuku_das.jpeg',
    bioParagraphs: [
      'Kuku Das is a Cultural Commissioner for the City of Santa Clara, CA, Founder and CEO of International Gurukul Inc., and former President of the Odisha Society of the Americas (2019-21).',
      'A co-founder of iGurukul, she has served as a cultural ambassador for Odisha in the Bay Area for over two decades, dedicated to advancing Odia language, arts, drama, and community across the global diaspora.',
      'Her contributions have been recognized with prestigious honors including the OSA Distinguished Odia Award (2023) and the Trailblazer Woman Award.',
    ],
  },
  {
    id: 'gayatri-joshi',
    name: 'Gayatri Joshi',
    role: 'President & Co-Founder',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/Gayatri%20Headshots-98.jpg',
    bioParagraphs: [
      'Gayatri Joshi is an internationally acclaimed Odissi dancer, choreographer, teacher, and visiting professor at the University of California, Santa Cruz. She is the co-founder of iGurukul Foundation and has been an integral part of the organization since its inception.',
      'With over three decades of dedication to the art form, she has played a significant role in elevating Odissi as both a prestigious academic pursuit and a globally respected classical dance tradition. In 2007, she founded iGurukul Odissi, where she developed a transformative curriculum that blends traditional discipline with contemporary innovation.',
      'Her choreographic repertoire includes more than 50 original works and large-scale productions, earning her numerous prestigious honors, including the 2025 Nritya Srujanika Award. By combining corporate leadership with artistic excellence, she has created a unique multidisciplinary approach that empowers students to grow into both accomplished artists and confident global leaders.',
      'Alongside her artistic journey, she also serves as a Business Data Leader at Wells Fargo.',
    ],
  },
  {
    id: 'jayashree-panda',
    name: 'Jayashree Panda',
    role: 'Vice President',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/jayshree_panda.jpeg',
    bioParagraphs: [
      'Jayashree Panda is a passionate educator, dedicated community leader, and a founding member of iGurukul Foundation. Since its inception, she has served as an Odia language teacher, art and craft instructor, and an active volunteer.',
      'She also serves on the Board of the non-profit organization Pragnya as Program Director, leading academic and enrichment programs for neurodivergent children and adults for the past eight years.',
      'Jayashree holds certifications in Psychological First Aid and Mental Health First Aid for Youth and Children.',
    ],
  },
  {
    id: 'mita-moharana',
    name: 'Mita Moharana',
    role: 'Secretary',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/mita_moharana.jpeg',
    photoObjectPosition: 'center 18%',
    bioParagraphs: [
      'Mita Moharana is a dedicated educator, community leader, and founding member of both iGurukul Foundation and the Jagannath Cultural and Educational Center.',
      'A passionate advocate for Odia literature and cultural preservation, she has been associated with iGurukul since its inception, serving as an Odia language teacher, drama instructor, editorial board member, and active volunteer for over two decades.',
      'Through her continued dedication, she has contributed significantly to iGurukul’s literary, cultural, and community initiatives.',
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
  {
    id: 'pranab-panda',
    name: 'Pranab Panda',
    role: 'Board Member',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/pranab_panda.jpeg',
    bioParagraphs: [
      'Pranab Panda has been associated with iGurukul Foundation since its inception, serving as a Hindi teacher, playwright, drama director, and dedicated volunteer.',
      'He has authored and directed several creative Hindi plays that have enriched iGurukul’s cultural programs and community initiatives.',
      'Professionally, he is a Senior Tech Lead at Apple, where he has been leading global embedded software and DevOps initiatives since 2016. Known for steady leadership, mentoring, and results-oriented execution, he brings together technology, creativity, and community service in all his endeavors.',
    ],
  },
  {
    id: 'samar-moharana',
    name: 'Samar Moharana',
    role: 'Board Member',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/samar_moharana.jpeg',
    bioParagraphs: [
      'Samar Moharana has been an integral part of iGurukul Foundation since its inception, serving as a dedicated volunteer and force behind many of the organization’s initiatives and events.',
      'A detail-oriented IT professional, he is skilled in coordinating cross-functional teams across business and engineering environments.',
      'Known for his calm communication style, reliability, and consistent execution, Samar is a trusted contributor whose quiet leadership and commitment have played an important role in supporting iGurukul’s continued growth and success.',
    ],
  },
  {
    id: 'bibek-das',
    name: 'Bibek Das',
    role: 'Board Member',
    photoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/bibek_das.jpeg',
    bioParagraphs: [
      'Bibek Das has been a part of iGurukul Foundation since its inception and is one of its most dependable and hardworking volunteers. Always willing to serve, he has played a key role in supporting numerous organizational and community initiatives behind the scenes.',
      'Professionally, Bibek is a Senior Software Engineer specializing in computer networking, with deep expertise in Layer 2/3 protocols, distributed operating systems, and embedded systems.',
      'His strong technical knowledge, dedication, and reliability make him a valued contributor both professionally and within the iGurukul community.',
    ],
  },
]
