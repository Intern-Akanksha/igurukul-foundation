import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { featuredEvent, newsEvents } from '../data/site'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function NewsEvents() {
  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
              Events
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
              Past Events & Community Highlights
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
              Explore memorable milestones from our community journey and preview the upcoming annual
              showcase.
            </p>
          </div>
        </Reveal>

        <section className="igf-surface mt-12 rounded-3xl border border-black/5 px-6 py-12 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal from="left">
              <div className="group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={featuredEvent.flyerImageUrl}
                  alt={featuredEvent.flyerImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="inline-flex rounded-full bg-igf-orange/10 px-3 py-1 text-xs font-semibold text-igf-orange ring-1 ring-igf-orange/20">
                  Highlighted Event
                </div>
                <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-igf-ink">
                  Cultural Extravaganza 2026
                </h2>
                <p className="mt-4 text-base leading-relaxed text-igf-gray">
                  Our flagship annual celebration of language, music, dance, and community.
                  Explore the dedicated event page for full program details.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md">
                    <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" />
                    <div>
                      <div className="text-sm font-semibold text-igf-ink">Venue</div>
                      <div className="mt-1 text-sm text-igf-gray">{featuredEvent.venueName}</div>
                      <div className="text-sm text-igf-gray">{featuredEvent.venueAddress}</div>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md">
                    <Calendar className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" />
                    <div>
                      <div className="text-sm font-semibold text-igf-ink">Date</div>
                      <div className="mt-1 text-sm text-igf-gray">{featuredEvent.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md">
                    <Clock className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" />
                    <div>
                      <div className="text-sm font-semibold text-igf-ink">Time</div>
                      <div className="mt-1 text-sm text-igf-gray">{featuredEvent.time}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/event-2026">
                    <Button attention>Open Upcoming Event 2026</Button>
                  </Link>
                  <Button href={featuredEvent.registerUrl}>Buy Ticket</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mt-12">
          <Reveal>
            <h3 className="font-heading text-2xl font-extrabold text-igf-ink">Past Events</h3>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {newsEvents.map((event, idx) => (
              <Reveal key={event.title} delayMs={80 * idx}>
                <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-igf-orange">
                    {event.date}
                  </div>
                  <div className="mt-2 text-base font-semibold text-igf-ink">{event.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-igf-gray">{event.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}
