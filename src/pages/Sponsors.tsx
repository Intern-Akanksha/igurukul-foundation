import {
  JoinUsSection,
  PhilosophySection,
} from '../components/FoundationSections'
import GsapRevealBlock from '../components/GsapRevealBlock'
import { partnerOrganizations, presentingPartner } from '../data/sponsors'

export default function Sponsors() {
  const marqueePartners = [...partnerOrganizations, ...partnerOrganizations]

  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <section className="px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <GsapRevealBlock className="text-center">
            <div className="igf-page-eyebrow justify-center">Partners</div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl">
              Partners & Sponsors
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 lux-text-ink/76 sm:text-lg">
              The foundation grows through artistic collaboration, educational participation,
              and trusted community partnerships.
            </p>
          </GsapRevealBlock>

          <div className="lux-panel lux-panel--padded relative mt-12 overflow-hidden">
            <div className="lux-glow lux-glow--gold pointer-events-none absolute left-[-3rem] top-[-2rem] h-36 w-36" />
            <div className="lux-glow lux-glow--burgundy pointer-events-none absolute right-[-2rem] top-[24%] h-32 w-32" />
            <div className="lux-glow lux-glow--gold pointer-events-none absolute bottom-[-2rem] left-[40%] h-32 w-32" />

            <GsapRevealBlock>
              <div className="mx-auto max-w-3xl text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] lux-text-gold">
                  Presenting Organization
                </div>
                <div className="mt-5 flex justify-center">
                  <div className="overflow-hidden rounded-[1.1rem] border border-[color-mix(in_srgb,var(--lux-gold)_20%,transparent)] bg-white/90 p-1.5 shadow-[var(--lux-shadow-gold)]">
                    <img
                      src="https://wajweb.b-cdn.net/igurukul-foundation/igfupdatedlogo.jpg"
                      alt={presentingPartner.name}
                      className="h-16 w-16 rounded-[0.9rem] object-cover"
                    />
                  </div>
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold lux-text-ink">
                  {presentingPartner.name}
                </h2>
                <p className="mt-3 text-base leading-8 lux-text-ink/76">
                  {presentingPartner.description}
                </p>
              </div>
            </GsapRevealBlock>

            <div className="mt-10 space-y-5">
              <GsapRevealBlock delay={0.05}>
                <div className="igf-partner-marquee">
                  <div className="igf-partner-track">
                    {marqueePartners.map((partner, index) => (
                      <div key={`${partner.name}-forward-${index}`} className="igf-partner-chip">
                        <div className="igf-partner-orb">
                          {partner.logoUrl ? (
                            <img
                              src={partner.logoUrl}
                              alt={partner.name}
                              loading="lazy"
                              decoding="async"
                              className="max-h-14 w-auto max-w-[92px] object-contain"
                            />
                          ) : null}
                        </div>
                        <h3 className="mt-4 text-center font-display text-[1.28rem] leading-tight lux-text-ink">
                          {partner.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </GsapRevealBlock>

              <GsapRevealBlock delay={0.12}>
                <div className="igf-partner-marquee">
                  <div className="igf-partner-track igf-partner-track-reverse">
                    {marqueePartners
                      .slice()
                      .reverse()
                      .map((partner, index) => (
                        <div key={`${partner.name}-reverse-${index}`} className="igf-partner-chip">
                          <div className="igf-partner-orb">
                            {partner.logoUrl ? (
                              <img
                                src={partner.logoUrl}
                                alt={partner.name}
                                loading="lazy"
                                decoding="async"
                                className="max-h-14 w-auto max-w-[92px] object-contain"
                              />
                            ) : null}
                          </div>
                          <h3 className="mt-4 text-center font-display text-[1.28rem] leading-tight lux-text-ink">
                            {partner.name}
                          </h3>
                        </div>
                      ))}
                  </div>
                </div>
              </GsapRevealBlock>
            </div>
          </div>
        </div>
      </section>
      <PhilosophySection />
      <JoinUsSection />
    </div>
  )
}

