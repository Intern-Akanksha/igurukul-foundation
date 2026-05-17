import { Link } from 'react-router-dom'
import { Handshake } from 'lucide-react'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import {
  partnerOrganizations,
  presentingPartner,
  sponsorshipTiers,
  type PartnerOrganization,
} from '../data/sponsors'
import { cn } from '../utils/cn'

const tierStyles: Record<(typeof sponsorshipTiers)[number]['accent'], string> = {
  gold: 'border-amber-400/50 bg-gradient-to-br from-amber-50 to-white ring-amber-300/40',
  silver: 'border-slate-300/60 bg-gradient-to-br from-slate-50 to-white ring-slate-300/40',
  bronze: 'border-orange-300/50 bg-gradient-to-br from-orange-50/80 to-white ring-orange-200/50',
  popular: 'border-igf-magenta/30 bg-gradient-to-br from-purple-50/80 to-white ring-igf-magenta/20',
}

function PartnerCard({ partner, delayMs = 0 }: { partner: PartnerOrganization; delayMs?: number }) {
  return (
    <Reveal delayMs={delayMs} from="scale">
      <div className="igf-glass-card group flex h-full flex-col items-center p-6 text-center sm:p-8">
        <div className="relative flex h-28 w-full items-center justify-center sm:h-32">
          <div
            className="absolute inset-4 rounded-2xl bg-gradient-to-br from-igf-orange/10 to-igf-indigo/5 opacity-0 transition duration-500 group-hover:opacity-100"
            aria-hidden
          />
          <img
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            loading="lazy"
            decoding="async"
            className="relative max-h-24 max-w-[85%] object-contain transition duration-500 group-hover:scale-105 sm:max-h-28"
          />
        </div>
        <h3 className="mt-5 font-heading text-base font-bold leading-snug text-igf-ink sm:text-lg">
          {partner.name}
        </h3>
        {partner.shortName && !partner.name.startsWith(partner.shortName) ? (
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-igf-orange">
            {partner.shortName}
          </p>
        ) : null}
        {partner.description ? (
          <p className="mt-3 text-sm leading-relaxed text-igf-gray">{partner.description}</p>
        ) : null}
      </div>
    </Reveal>
  )
}

export default function Sponsors() {
  return (
    <div className="igf-page-wrap relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-igf-indigo/10 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <div className="text-center">
            <p className="igf-page-eyebrow justify-center">
              <span className="tracking-[0.22em]">Community</span>
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
              Partners &amp; Sponsors
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-igf-gray sm:text-lg">
              Thank you to our partnering organizations and sponsors who make the Cultural
              Extravaganza and year-round programs possible.
            </p>
          </div>
        </Reveal>

        <section className="igf-section igf-section-band">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-extrabold text-igf-ink sm:text-3xl">
              Presenting Organization
            </h2>
          </Reveal>
          <div className="mx-auto mt-8 max-w-md">
            <PartnerCard partner={presentingPartner} />
          </div>
        </section>

        <section className="igf-section-body">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-extrabold text-igf-ink sm:text-3xl">
              Partnering Organizations
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-igf-gray sm:text-base">
              Proudly supported by these amazing organizations
            </p>
          </Reveal>
          <div className="igf-section-body grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {partnerOrganizations.map((partner, idx) => (
              <PartnerCard key={partner.name} partner={partner} delayMs={60 * idx} />
            ))}
          </div>
        </section>

        <section className="igf-section-body">
          <Reveal>
            <div className="text-center">
              <Handshake className="mx-auto h-10 w-10 text-igf-orange" aria-hidden />
              <h2 className="mt-4 font-heading text-2xl font-extrabold text-igf-ink sm:text-3xl">
                Sponsorship Opportunities
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-igf-gray sm:text-base">
                Help us celebrate and preserve Indian classical arts for the next generation
              </p>
            </div>
          </Reveal>
          <div className="igf-section-body grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorshipTiers.map((tier, idx) => (
              <Reveal key={tier.name} delayMs={80 * idx} from="scale">
                <div
                  className={cn(
                    'flex h-full flex-col rounded-2xl border p-6 shadow-sm ring-1',
                    tierStyles[tier.accent],
                  )}
                >
                  <h3 className="font-heading text-lg font-bold text-igf-ink">{tier.name}</h3>
                  <p className="mt-2 font-heading text-3xl font-extrabold text-igf-orange">{tier.amount}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-igf-gray">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2">
                        <span className="text-igf-orange" aria-hidden>
                          •
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/donate">
                <Button attention>Donate</Button>
              </Link>
              <Link to="/partner-with-us">
                <Button variant="secondary">Become a Partner</Button>
              </Link>
            </div>
          </Reveal>
        </section>
      </Container>
    </div>
  )
}