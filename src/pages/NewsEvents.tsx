import { Link } from 'react-router-dom'
import ActaPageShell from '../components/ActaPageShell'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { featuredEvent, newsEvents } from '../data/site'
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react'

export default function NewsEvents() {
  return (
    <ActaPageShell
      eyebrow="Events"
      title="Past Events & Community Highlights"
      lead="Explore memorable milestones from our community journey and preview the upcoming annual showcase."
    >
        <section>
          <div className="acta-panel acta-panel--padded">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                <Reveal from="left">
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-igf-orange/40 via-igf-magenta/30 to-igf-indigo/40 opacity-60 blur-xl transition duration-700 group-hover:opacity-90" />
                    <img
                      src={featuredEvent.flyerImageUrl}
                      alt={featuredEvent.flyerImageAlt}
                      loading="lazy"
                      decoding="async"
                      className="relative aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </Reveal>

                <Reveal from="scale">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-igf-orange/15 to-igf-magenta/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-igf-orange ring-1 ring-igf-orange/25">
                      <Sparkles className="h-4 w-4" aria-hidden />
                      Highlighted Event
                    </div>
                    <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-igf-ink sm:text-4xl">
                      Cultural Extravaganza 2026
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-igf-gray sm:text-lg">
                      Our flagship annual celebration of language, music, dance, and community.
                      Explore the dedicated event page for full program details.
                    </p>

                    <div className="mt-8 grid gap-4">
                      <div className="igf-glass-card flex gap-4 p-5 sm:p-6">
                        <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" aria-hidden />
                        <div>
                          <div className="text-sm font-semibold text-igf-ink">Venue</div>
                          <div className="mt-1 text-sm text-igf-gray">{featuredEvent.venueName}</div>
                          <div className="text-sm text-igf-gray">{featuredEvent.venueAddress}</div>
                        </div>
                      </div>
                      <div className="igf-glass-card flex gap-4 p-5 sm:p-6">
                        <Calendar className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" aria-hidden />
                        <div>
                          <div className="text-sm font-semibold text-igf-ink">Date</div>
                          <div className="mt-1 text-sm text-igf-gray">{featuredEvent.date}</div>
                        </div>
                      </div>
                      <div className="igf-glass-card flex gap-4 p-5 sm:p-6">
                        <Clock className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" aria-hidden />
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
            </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <Reveal>
            <h3 className="acta-subsection-title">Past Events</h3>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {newsEvents.map((event, idx) => (
              <Reveal key={event.title} delayMs={80 * idx} from="scale">
                <div className="acta-panel acta-panel--padded h-full">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-igf-orange">{event.date}</div>
                  <div className="mt-3 text-lg font-bold text-igf-ink">{event.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-igf-gray">{event.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
    </ActaPageShell>
  )
}
