import { BookOpen, Calendar, Heart, Music, Sparkles, UsersRound } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import TribalPattern from '../components/TribalPattern'
import { site } from '../data/site'

const heroBgVideoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/iGF2026Promo.mp4'
const heroPoster = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'

const impactStats = [
  { value: '26+', label: 'Years of Community Heritage' },
  { value: '250+', label: 'Artists on Annual Stage' },
  { value: '15+', label: 'Partner Academies' },
  { value: '500+', label: 'Annual Attendees' },
]

const programPreview = [
  { title: 'Odia Literacy Centre', icon: BookOpen },
  { title: 'Odissi Dance and Music', icon: Music },
  { title: 'Yoga and Reiki Classes', icon: Heart },
  { title: 'Intergenerational Learning Forums', icon: UsersRound },
]

export default function Home() {
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], [0, 100])

  return (
    <motion.div className="relative">
      <section className="igf-section-parchment relative flex min-h-[72vh] items-center overflow-hidden py-16 text-white sm:min-h-[78vh] sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.video
            style={{ y: videoY }}
            className="h-[115%] w-full scale-105 object-cover"
            src={heroBgVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-hidden="true"
          />
        </div>
        <div className="igf-hero-sunset absolute inset-0" aria-hidden />
        <div className="igf-festival-hero-overlay absolute inset-0 opacity-75" aria-hidden />
        <TribalPattern />
        <div className="igf-grain absolute inset-0 opacity-20" aria-hidden />
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-igf-gold/25 blur-[80px] igf-float-slow" aria-hidden />
        <div
          className="absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-igf-orange/30 blur-[90px] igf-float-slow"
          style={{ animationDelay: '-3s' }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(232,184,74,0.32),transparent)]"
          aria-hidden
        />

        <Container className="relative z-10">
          <Reveal>
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="igf-hero-glow-ring mx-auto inline-flex items-center gap-2 rounded-full border border-igf-gold/35 bg-igf-maroon/40 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-igf-gold" aria-hidden />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.26em] text-igf-cream/95 sm:text-xs">
                  Cultural celebration · Bay Area
                </span>
              </div>
              <h1 className="igf-festival-heading mt-5 font-heading text-3xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                <span className="igf-shimmer-heading">Rooted in Heritage</span>
                <br />
                <span className="text-igf-cream">Rising Together</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/88 sm:text-base">
                Preserving Odia language, arts, and culture through education, community programs,
                and unforgettable events across the Bay Area.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                <Link to="/event-2026">
                  <Button attention className="igf-btn-shimmer px-6 py-2.5 text-sm shadow-lg shadow-orange-900/30">
                    <Calendar className="h-4 w-4" aria-hidden />
                    Cultural Extravaganza 2026
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="secondary"
                    className="border border-igf-gold/30 bg-white/10 px-6 py-2.5 text-sm text-white ring-igf-gold/25 backdrop-blur-md hover:bg-white/20"
                  >
                    Explore Our Mission
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </Container>
        <div className="igf-wave-divider absolute bottom-0 left-0 right-0 z-10 h-8 sm:h-10" aria-hidden />
      </section>

      <section className="igf-section igf-section-band">
        <Container>
          <div className="igf-stats-grid sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, idx) => (
              <Reveal key={stat.label} delayMs={60 * idx}>
                <div className="igf-travel-feature-card igf-torn-paper igf-card-compact text-center">
                  <div className="bg-gradient-to-br from-igf-orange to-amber-500 bg-clip-text font-heading text-3xl font-extrabold text-transparent sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs font-semibold leading-snug text-igf-gray sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="igf-section igf-parchment">
        <Container>
          <Reveal>
            <div className="igf-gradient-border-wrap shadow-[0_16px_48px_rgba(42,24,16,0.12)]">
              <div className="igf-gradient-border-inner igf-parchment p-5 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-igf-orange">
                      About
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-extrabold text-igf-ink sm:text-3xl md:text-4xl">
                      Cultural continuity for future generations
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-igf-gray sm:text-base">
                      {site.name} supports language literacy, performing arts, and community connection
                      through year-round educational and cultural initiatives.
                    </p>
                    <Link to="/about" className="mt-5 inline-flex">
                      <Button attention className="igf-btn-shimmer text-sm">
                        Read Our Story
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-igf-orange/20 via-igf-magenta/15 to-igf-indigo/20 blur-xl"
                      aria-hidden
                    />
                    <div className="igf-framed-media relative overflow-hidden rounded-sm">
                      <img
                        src={heroPoster}
                        alt="iGurukul Foundation community celebration"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-igf-indigo/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/40 px-3 py-2 text-center text-xs font-semibold text-white backdrop-blur-md sm:text-sm">
                        26 glorious years of arts & heritage
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="igf-section">
        <Container>
          <Reveal>
            <div className="igf-section-head">
              <p className="igf-page-eyebrow justify-center">
                <span className="tracking-[0.22em]">Programs</span>
              </p>
              <h2 className="font-heading text-2xl font-extrabold text-igf-ink sm:text-3xl md:text-4xl">
                Learning and community programs
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-igf-gray sm:text-base">
                From classical dance to language literacy — pathways that keep tradition alive and
                welcoming for every generation.
              </p>
            </div>
          </Reveal>
          <div className="igf-section-body grid gap-3 sm:grid-cols-2 sm:gap-4">
            {programPreview.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delayMs={60 * idx}>
                  <div className="group igf-travel-feature-card flex overflow-hidden sm:flex-row">
                    <div className="igf-travel-feature-cap flex w-full shrink-0 items-center justify-center py-4 sm:w-20 sm:py-0">
                      <Icon className="h-8 w-8 text-igf-gold" aria-hidden />
                    </div>
                    <div className="flex flex-1 flex-col justify-center border-t border-igf-gold/15 px-4 py-4 sm:border-t-0 sm:border-l sm:py-3">
                      <div className="font-heading text-base font-bold text-igf-ink sm:text-lg">
                        {item.title}
                      </div>
                      <div className="mt-1.5 h-0.5 w-10 rounded-full bg-gradient-to-r from-igf-orange to-igf-gold transition-all duration-500 group-hover:w-20" />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delayMs={180}>
            <div className="mt-6 text-center sm:mt-8">
              <Link to="/programs">
                <Button className="igf-btn-shimmer px-7 text-sm">View All Programs</Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="igf-section !pb-0 !pt-0">
        <div className="igf-cta-spectrum relative overflow-hidden px-4 py-10 text-white sm:px-6 sm:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-white blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-300 blur-3xl" />
          </div>
          <Container className="relative">
            <Reveal>
              <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3 md:gap-5 md:text-left">
                <div className="igf-cta-travel-card igf-card-compact backdrop-blur-md">
                  <h3 className="font-heading text-xl font-extrabold sm:text-2xl">Partner with us</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Support programs, sponsor events, and help us scale community impact.
                  </p>
                  <Link to="/partner-with-us" className="mt-4 inline-flex">
                    <Button className="border-0 bg-white text-sm text-igf-indigo hover:bg-amber-50">
                      Get Involved
                    </Button>
                  </Link>
                </div>
                <div className="igf-cta-travel-card igf-card-compact backdrop-blur-md">
                  <h3 className="font-heading text-xl font-extrabold sm:text-2xl">Donate today</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Your contribution keeps language and arts education accessible.
                  </p>
                  <Link to="/donate" className="mt-4 inline-flex">
                    <Button attention className="igf-btn-shimmer text-sm shadow-lg shadow-black/20">
                      Donate Now
                    </Button>
                  </Link>
                </div>
                <div className="igf-cta-travel-card igf-card-compact backdrop-blur-md sm:col-span-2 md:col-span-1">
                  <h3 className="font-heading text-xl font-extrabold sm:text-2xl">Stay connected</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    Reach our team for volunteering, participation, or collaboration ideas.
                  </p>
                  <Link to="/contact" className="mt-4 inline-flex">
                    <Button
                      variant="secondary"
                      className="border-white/40 bg-transparent text-sm text-white ring-white/30 hover:bg-white/15"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>
    </motion.div>
  )
}
