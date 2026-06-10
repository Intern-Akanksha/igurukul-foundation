export type PartnerOrganization = {
  name: string
  shortName?: string
  description?: string
  logoUrl?: string
}

export type SponsorshipTier = {
  name: string
  amount: string
  benefits: string[]
  accent: 'gold' | 'silver' | 'bronze' | 'popular'
}

export const presentingPartner: PartnerOrganization = {
  name: 'iGurukul Foundation',
  shortName: 'Foundation',
  description: 'A centre of excellence in learning and human development.',
}

export const partnerOrganizations: PartnerOrganization[] = [
  {
    name: 'KRIPA - Kala Roopa Institute of Performing Arts',
    shortName: 'KRIPA',
    logoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/assets/Sponsors_igf26/KRIPA%20Logo.jpeg',
  },
  {
    name: 'In Sync Kathak',
    logoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/assets/Sponsors_igf26/LogoInSyncKathak.jpg',
  },
  {
    name: 'Movement in Motion',
    logoUrl:
      'https://wajweb.b-cdn.net/igurukul-foundation/assets/Sponsors_igf26/Movements%20in%20Motion_logo%20final-01.png',
  },
  {
    name: 'California Nupur Dance Academy',
    shortName: 'CNDA',
    logoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/assets/Sponsors_igf26/CNDA_LOGO.jpg',
  },
  {
    name: 'iGurukul Odissi',
    shortName: 'iGO',
    logoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/assets/Sponsors_igf26/iGO-Logo-Black.png',
  },
  {
    name: 'iG Achiever',
    logoUrl: 'https://wajweb.b-cdn.net/igurukul-foundation/assets/Sponsors_igf26/igachieverlogo.jpeg',
  },
]

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: 'Participation',
    amount: '01',
    accent: 'gold',
    benefits: ['Learning to Know', 'Learning to Grow'],
  },
  {
    name: 'Partnership',
    amount: '02',
    accent: 'silver',
    benefits: ['Learning to Be', 'Learning to Live Together'],
  },
  {
    name: 'Peace',
    amount: '03',
    accent: 'bronze',
    benefits: ['Service', 'Harmony'],
  },
  {
    name: 'Progress',
    amount: '04',
    accent: 'popular',
    benefits: ['Growth', 'Human Development'],
  },
]
