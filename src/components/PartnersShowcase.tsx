import GsapRevealBlock from './GsapRevealBlock'
import { partnerOrganizations, presentingPartner } from '../data/sponsors'
import { site } from '../data/site'

export default function PartnersShowcase() {
  const marqueePartners = [...partnerOrganizations, ...partnerOrganizations]

  return (
    <section className="lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="mx-auto max-w-3xl text-center">
          <div className="lux-card mx-auto max-w-xl p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] lux-text-gold">
              Presenting Organization
            </div>
            <div className="mt-5 flex justify-center">
              <div className="lux-nav__logo-frame">
                <img
                  src={site.logoUrl}
                  alt={presentingPartner.name}
                  className="h-20 w-20 rounded-lg object-cover"
                />
              </div>
            </div>
            <h2 className="mt-6 lux-card-title text-3xl">{presentingPartner.name}</h2>
            <p className="mt-3 lux-body-lg text-base">{presentingPartner.description}</p>
          </div>
        </GsapRevealBlock>

        <GsapRevealBlock delay={0.08} className="mt-10">
          <div className="lux-partner-marquee">
            <div className="lux-partner-track">
              {marqueePartners.map((partner, index) => (
                <div key={`${partner.name}-fwd-${index}`} className="lux-partner-chip">
                  <div className="lux-partner-orb">
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
                  <h3 className="mt-4 text-center lux-card-title text-lg leading-tight">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </GsapRevealBlock>

        <GsapRevealBlock delay={0.14} className="mt-5">
          <div className="lux-partner-marquee">
            <div className="lux-partner-track lux-partner-track--reverse">
              {marqueePartners
                .slice()
                .reverse()
                .map((partner, index) => (
                  <div key={`${partner.name}-rev-${index}`} className="lux-partner-chip">
                    <div className="lux-partner-orb">
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
                    <h3 className="mt-4 text-center lux-card-title text-lg leading-tight">
                      {partner.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </GsapRevealBlock>
      </div>
    </section>
  )
}
