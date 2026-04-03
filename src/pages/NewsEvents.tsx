import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { featuredEvent, newsEvents } from '../data/site'

export default function NewsEvents() {
  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
            Events
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
            Workshops, seminars, and community celebrations. Check back often
            for new announcements and highlights.
          </p>
        </Reveal>

        <div id="featured-event" className="mt-12">
          <Reveal from="up">
            <div className="relative overflow-hidden rounded-3xl bg-igf-charcoal text-white shadow-[0_22px_70px_rgba(0,0,0,0.22)]">
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <div className="igf-hero-rays absolute -inset-24 opacity-100" />
              </div>
              <div className="relative grid gap-10 p-9 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <a
                    href={featuredEvent.flyerImageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                    aria-label="Open event flyer"
                  >
                    <div className="igf-float overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
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

                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-igf-orange" />
                    Highlight
                  </div>
                  <div className="mt-4 font-heading text-3xl font-extrabold leading-tight">
                    {featuredEvent.title}
                  </div>

                  <div className="mt-5 grid gap-3 text-sm text-white/90">
                    <div>
                      <span className="font-semibold text-white">📍</span>{' '}
                      <span className="font-semibold text-white">
                        {featuredEvent.venueName}
                      </span>
                      <div className="pl-5 text-white/90">
                        {featuredEvent.venueAddress}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-white">📅</span>{' '}
                      {featuredEvent.date}
                    </div>
                    <div>
                      <span className="font-semibold text-white">⏰</span>{' '}
                      {featuredEvent.time}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                      href={featuredEvent.registerUrl}
                      className="bg-white text-igf-charcoal hover:bg-white/90"
                      attention
                    >
                      Buy ticket
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="igf-surface rounded-3xl border border-black/5 p-9 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="font-heading text-xl font-extrabold text-igf-ink">
                  Latest updates
                </div>
                <div className="mt-6 grid gap-4">
                  {newsEvents.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white/50 p-6 ring-1 ring-black/5"
                    >
                      <div className="text-xs font-semibold text-igf-orange">
                        {item.date}
                      </div>
                      <div className="mt-2 font-heading text-base font-extrabold text-igf-ink">
                        {item.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-igf-gray">
                        {item.summary}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={120}>
              <div className="rounded-3xl bg-igf-charcoal p-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/85">
                  Gallery
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold">
                  Photo & video highlights
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0070.jpeg',
                    'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0089.jpeg',
                    'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0080.jpeg',
                    'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0001.jpeg',
                    'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0275.jpeg',
                    'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0180.jpeg',
                  ].map((src) => (
                    <div
                      key={src}
                      className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10"
                    >
                      <img
                        src={src}
                        alt="IGF event"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-sm text-white/90">
                  Add event photos, workshop snapshots, and performance videos
                  here when ready.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  )
}
