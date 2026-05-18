import { site } from './site'

const CDN_BASE = 'https://wajweb.b-cdn.net/igurukul-foundation'

function assetUrl(path: string): string {
  return `${CDN_BASE}/${path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')}`
}

export type PartnerOrganization = {
  name: string
  shortName?: string
  description?: string
  logoUrl: string
}

export type SponsorshipTier = {
  name: string
  amount: string
  benefits: string[]
  accent: 'gold' | 'silver' | 'bronze' | 'popular'
}

export const presentingPartner: PartnerOrganization = {
  name: 'iGurukul Foundation',
  shortName: 'Presenting Organization',
  description: '26 glorious years of heritage, arts, and community in the Bay Area.',
  logoUrl: site.logoUrl,
}

export const partnerOrganizations: PartnerOrganization[] = [
  {
    name: 'KRIPA — Kala Roopa Institute of Performing Arts',
    shortName: 'KRIPA',
    logoUrl: assetUrl('assets/Sponsors_igf26/KRIPA Logo.jpeg'),
  },
  {
    name: 'In Sync Kathak',
    logoUrl: assetUrl('assets/Sponsors_igf26/LogoInSyncKathak.jpg'),
  },
  {
    name: 'Movement in Motion',
    logoUrl: assetUrl('assets/Sponsors_igf26/Movements in Motion_logo final-01.png'),
  },
  {
    name: 'Jyoti Kala Mandir',
    shortName: 'JKM',
    logoUrl: assetUrl('assets/Sponsors_igf26/JKM-color-logo.jpg'),
  },
  {
    name: 'California Nupur Dance Academy',
    shortName: 'CNDA',
    logoUrl: assetUrl('assets/Sponsors_igf26/CNDA_LOGO.jpg'),
  },
  {
    name: 'iGurukul Odissi',
    logoUrl: assetUrl('assets/Sponsors_igf26/iGO-Logo-Black.png'),
  },
  {
    name: 'iG Achiever',
    logoUrl: assetUrl('assets/Sponsors_igf26/igachieverlogo.jpeg'),
  },
  {
    name: 'Urban MoMo',
    logoUrl: assetUrl('assets/Sponsors_igf26/Urban MoMo Logo.jpg'),
  },
]

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: 'Gold Sponsor',
    amount: '$1,000',
    accent: 'gold',
    benefits: [
      'Featured video clips & stage announcement',
      'Booth space at the event',
      'Complimentary family tickets',
    ],
  },
  {
    name: 'Silver Sponsor',
    amount: '$500',
    accent: 'silver',
    benefits: ['Stage announcement or booth space', 'Complimentary family tickets'],
  },
  {
    name: 'Bronze Sponsor',
    amount: '$300',
    accent: 'bronze',
    benefits: ['Booth space at the event', 'Complimentary family tickets'],
  },
  {
    name: 'Popular Sponsor',
    amount: '$100',
    accent: 'popular',
    benefits: ['Complimentary family tickets'],
  },
]
