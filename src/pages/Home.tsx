import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { featuredEvent, newsEvents, programs, quotes, site } from '../data/site'

const heroImage = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

function QuoteCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="igf-surface rounded-3xl border border-black/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <div className="font-quote text-base italic text-igf-ink">
        “{text}”
      </div>
      <div className="mt-3 text-sm font-semibold text-igf-gray">— {author}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-igf-bg/90 via-igf-bg/65 to-igf-bg/95" />
        <div className="igf-hero-gradient pointer-events-none absolute inset-0" />
        <div className="igf-pattern pointer-events-none absolute inset-0" />
        <div className="igf-hero-rays pointer-events-none absolute inset-0 opacity-45" />
        <Container className="relative py-20 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal>
                <div className="igf-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-igf-gray ring-1 ring-black/5">
                  <span className="h-1.5 w-1.5 rounded-full bg-igf-orange" />
                  {site.shortName} • Cultural & Educational Non‑Profit
                </div>
              </Reveal>

              <Reveal delayMs={120}>
                <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl sm:leading-[1.05]">
                  {site.tagline}
                </h1>
              </Reveal>

              <Reveal delayMs={220}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-igf-gray">
                  A professional, welcoming community space dedicated to social
                  learning, human development, and preserving Odia language and
                  culture across generations.
                </p>
              </Reveal>

              <Reveal delayMs={320}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/registration">
                    <Button className="w-full sm:w-auto" attention>
                      Register for Classes
                    </Button>
                  </Link>
                  <Link to="/programs">
                    <Button className="w-full sm:w-auto" variant="secondary">
                      Explore Programs
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="w-full sm:w-auto" variant="ghost">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-5 lg:col-span-5">
              <Reveal delayMs={160} from="right">
                <QuoteCard {...quotes.einstein} />
              </Reveal>
              <Reveal delayMs={240} from="left">
                <QuoteCard {...quotes.gandhi} />
              </Reveal>
              <Reveal delayMs={320} from="right">
                <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-igf-charcoal p-7 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div className="igf-hero-rays absolute -inset-24 opacity-100" />
                  </div>
                  <div className="relative">
                    <div className="text-xs font-semibold uppercase tracking-wide text-white/85">
                      Cultural depth
                    </div>
                    <div className="mt-3 font-heading text-xl font-extrabold leading-tight">
                      Language • Arts • Wellness • Community
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-white/90">
                      A premium learning experience built on tradition, trust,
                      and educational excellence.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-igf-ink">Events</h2>
                <p className="mt-2 max-w-2xl text-base text-igf-gray">
                  Upcoming gatherings, workshops, and cultural celebrations.
                </p>
              </div>
              <Link to="/news-events">
                <Button variant="secondary">See all events</Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={120} from="left">
            <div className="mt-10 igf-surface overflow-hidden rounded-3xl border border-black/5 shadow-[0_18px_46px_rgba(0,0,0,0.09)]">
              <div className="grid gap-8 p-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <a
                    href={featuredEvent.flyerImageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label="Open event flyer"
                  >
                    <div className="igf-float overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                      <img
                        src={featuredEvent.flyerImageUrl}
                        alt={featuredEvent.flyerImageAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full transform-gpu transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </a>
                </div>

                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-semibold text-igf-gray ring-1 ring-black/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-igf-orange" />
                    Featured Event
                  </div>
                  <div className="mt-4 font-heading text-2xl font-extrabold text-igf-ink">
                    {featuredEvent.title}
                  </div>
                  <div className="mt-4 grid gap-2 text-sm text-igf-gray">
                    <div>
                      <span className="font-semibold text-igf-ink">📍</span>{' '}
                      <span className="font-semibold text-igf-ink">{featuredEvent.venueName}</span>
                      <div className="pl-5">{featuredEvent.venueAddress}</div>
                    </div>
                    <div>
                      <span className="font-semibold text-igf-ink">📅</span> {featuredEvent.date}
                    </div>
                    <div>
                      <span className="font-semibold text-igf-ink">⏰</span> {featuredEvent.time}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button href={featuredEvent.registerUrl} attention>
                      Buy ticket
                    </Button>
                    <Link to="/news-events#featured-event" className="w-full sm:w-auto">
                      <Button className="w-full sm:w-auto" variant="secondary">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {newsEvents.slice(0, 3).map((item, idx) => (
              <Reveal key={item.title} delayMs={90 * idx}>
                <div className="igf-surface rounded-3xl border border-black/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(0,0,0,0.12)]">
                  <div className="text-xs font-semibold text-igf-orange">{item.date}</div>
                  <div className="mt-2 font-heading text-base font-extrabold text-igf-ink">
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-igf-gray">{item.summary}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-igf-ink">
                  Programs & Activities
                </h2>
                <p className="mt-2 max-w-2xl text-base text-igf-gray">
                  Learning experiences that build language skills, cultural
                  confidence, wellness, and community connection.
                </p>
              </div>
              <Link to="/programs">
                <Button variant="secondary">View all programs</Button>
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map((p, idx) => (
              <Reveal key={p.title} delayMs={80 * idx}>
                <div className="group igf-surface rounded-3xl border border-black/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(0,0,0,0.12)]">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/50 ring-1 ring-black/5">
                      <span className="h-2.5 w-2.5 rounded-full bg-igf-orange" />
                    </div>
                    <div>
                      <div className="font-heading text-base font-extrabold text-igf-ink">
                        {p.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-igf-gray">
                        {p.description}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-heading text-2xl font-extrabold text-igf-ink">
                  Why Learn Odia?
                </h2>
                <p className="mt-2 text-base text-igf-gray">
                  Language is a bridge—between generations, stories, and a sense
                  of belonging.
                </p>
              </Reveal>

              <Reveal delayMs={120}>
                <ul className="mt-6 grid gap-3 text-sm text-igf-gray sm:grid-cols-2">
                  <li className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                    Strengthen family connection through shared language
                  </li>
                  <li className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                    Preserve culture, literature, and community identity
                  </li>
                  <li className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                    Build confidence for performances and community events
                  </li>
                  <li className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                    Support youth in learning roots while thriving globally
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delayMs={160}>
                <div className="relative overflow-hidden rounded-3xl bg-igf-charcoal p-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <div className="pointer-events-none absolute inset-0 opacity-35">
                    <div className="igf-hero-gradient absolute inset-0" />
                  </div>
                  <div className="relative">
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/85">
                    Featured
                  </div>
                  <div className="mt-3 font-heading text-2xl font-extrabold">
                    Odia Literacy Centre
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    Structured learning paths for reading and writing, designed
                    for busy families and all experience levels.
                  </p>
                  <div className="mt-6">
                    <Link to="/registration">
                      <Button
                        className="bg-white text-igf-charcoal hover:bg-white/90"
                        attention
                      >
                        Register Now
                      </Button>
                    </Link>
                  </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="sponsor" className="bg-white/60 py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-wide text-igf-orange">
                  Sponsor
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold text-igf-ink">
                  Urban Momo
                </div>
                <div className="mt-3 text-base leading-relaxed text-igf-gray">
                  Bay Area&apos;s Best Indo‑Chinese Cuisine.
                </div>
                <div className="mt-5 grid gap-2 text-sm text-igf-gray">
                  <div>
                    <span className="font-semibold text-igf-ink">Email:</span>{' '}
                    <a
                      className="font-semibold text-igf-ink underline decoration-black/15 underline-offset-4 hover:decoration-igf-orange"
                      href="mailto:2urbanmomo@gmail.com"
                    >
                      2urbanmomo@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-igf-ink">Phone:</span>{' '}
                    <a
                      className="font-semibold text-igf-ink underline decoration-black/15 underline-offset-4 hover:decoration-igf-orange"
                      href="tel:+14089711848"
                    >
                      (408) 971 1848
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-igf-ink">Location:</span>{' '}
                    254 South B Street, San Mateo, 94401
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.urbanmomos.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-igf-ink underline decoration-black/15 underline-offset-4 hover:decoration-igf-orange"
                  >
                    Click here
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delayMs={120} from="right">
                <a
                  href="https://www.urbanmomos.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                  aria-label="Urban Momo sponsor"
                >
                  <div className="igf-surface overflow-hidden rounded-3xl border border-black/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(0,0,0,0.12)]">
                    <img
                      src="https://wajweb.b-cdn.net/igurukul-foundation/Image%20(4).jpg"
                      alt="Urban Momo"
                      loading="lazy"
                      decoding="async"
                      className="mx-auto h-20 w-auto object-contain sm:h-24"
                    />
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
