import { CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'
import GsapRevealBlock from './GsapRevealBlock'
import { pastEvents } from '../data/events'

export default function PastEventsSection() {
  return (
    <section className="px-4 pb-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="max-w-3xl">
          <div className="igf-page-eyebrow">Past Events</div>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl">
            Celebrations, gatherings, and milestones from our community.
          </h2>
          <p className="mt-5 text-base leading-8 lux-text-ink/76 sm:text-lg">
            Browse recent foundation events — from cultural showcases and traditional observances to
            language and learning programs across the Bay Area.
          </p>
        </GsapRevealBlock>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pastEvents.map((event, index) => (
            <GsapRevealBlock key={event.id} delay={index * 0.08} className="h-full">
              <article className="lux-card flex h-full flex-col overflow-hidden">
                <div className="igf-motion-img-wrap relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(18,18,18,0.55)_100%)]" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
                        event.pricing === 'Free'
                          ? 'bg-[color-mix(in_srgb,var(--lux-gold)_88%,white)] text-[var(--lux-black)]'
                          : 'bg-[color-mix(in_srgb,var(--lux-burgundy)_88%,white)] text-[var(--lux-ivory)]'
                      }`}
                    >
                      {event.pricing}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight lux-text-ink">
                    {event.title}
                  </h3>

                  <dl className="mt-5 space-y-4 text-sm">
                    <div className="flex gap-3">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 lux-text-gold" aria-hidden />
                      <div>
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] lux-text-gold">
                          Date &amp; Time
                        </dt>
                        <dd className="mt-1 lux-text-ink/78">{event.dateTime}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 lux-text-gold" aria-hidden />
                      <div>
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] lux-text-gold">
                          Location
                        </dt>
                        <dd className="mt-1 leading-6 lux-text-ink/78">{event.location}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-auto pt-6">
                    <Link to={event.registrationHref} className="block">
                      <Button attention className="w-full justify-center">
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}
