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
      <section className="relative min-h-[85vh] overflow-hidden py-28 text-white sm:py-36">
        <motion.video
          style={{ y: videoY }}
          className="absolute inset-0 h-[110%] w-full object-cover"
          src={heroBgVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
        />
        <div className="igf-festival-hero-overlay absolute inset-0" aria-hidden />
        <TribalPattern />
        <div className="igf-grain absolute inset-0 opacity-20" aria-hidden />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-igf-gold/25 blur-[100px] igf-float-slow" aria-hidden />
        <div
          className="absolute -right-16 bottom-32 h-96 w-96 rounded-full bg-igf-orange/30 blur-[110px] igf-float-slow"
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
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="igf-hero-glow-ring mx-auto inline-flex items-center gap-2 rounded-full border border-igf-gold/35 bg-igf-maroon/40 px-5 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-igf-gold" aria-hidden />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-igf-cream/95 sm:text-xs">
                  Cultural celebration · Bay Area
                </span>
              </div>
              <h1 className="igf-festival-heading mt-8 font-heading text-4xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
                <span className="igf-shimmer-heading">Rooted in Heritage</span>
                <br />
                <span className="text-igf-cream">Rising Together</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
                Preserving Odia language, arts, and culture through education, community programs,
                and unforgettable events across the Bay Area.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link to="/event-2026">
                  <Button attention className="igf-btn-shimmer px-7 py-3 text-sm shadow-lg shadow-orange-900/30">
                    <Calendar className="h-4 w-4" aria-hidden />
                    Cultural Extravaganza 2026
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="secondary"
                    className="border border-igf-gold/30 bg-white/10 px-7 py-3 text-sm text-white ring-igf-gold/25 backdrop-blur-md hover:bg-white/20"
                  >
                    Explore Our Mission
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </Container>
        <div className="igf-wave-divider absolute bottom-0 left-0 right-0 z-10" aria-hidden />
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-igf-orange/40 to-transparent" aria-hidden />
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, idx) => (
              <Reveal key={stat.label} delayMs={80 * idx}>
                <div className="igf-glass-card p-8 text-center">
                  <div className="bg-gradient-to-br from-igf-orange to-amber-500 bg-clip-text font-heading text-4xl font-extrabold text-transparent sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-igf-gray">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="igf-gradient-border-wrap shadow-[0_24px_60px_rgba(61,43,107,0.12)]">
              <div className="igf-gradient-border-inner p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-igf-orange">About</p>
                    <h2 className="mt-4 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl md:text-5xl">
                      Cultural continuity for future generations
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-igf-gray sm:text-lg">
                      {site.name} supports language literacy, performing arts, and community connection
                      through year-round educational and cultural initiatives.
                    </p>
                    <Link to="/about" className="mt-8 inline-flex">
                      <Button attention className="igf-btn-shimmer">
                        Read Our Story
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-igf-orange/20 via-igf-magenta/15 to-igf-indigo/20 blur-2xl" aria-hidden />
                    <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10">
                      <img
                        src={heroPoster}
                        alt="iGurukul Foundation community celebration"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-igf-indigo/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/35 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur-md">
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

      <section className="relative py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="igf-page-eyebrow justify-center">
                <span className="tracking-[0.22em]">Programs</span>
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl md:text-5xl">
                Learning and community programs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-igf-gray">
                From classical dance to language literacy — pathways that keep tradition alive and
                welcoming for every generation.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {programPreview.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delayMs={80 * idx}>
                  <div className="group igf-glass-card flex items-start gap-5 p-6 sm:p-7">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-igf-orange/20 to-igf-magenta/20 ring-1 ring-igf-orange/25 transition duration-500 group-hover:scale-110 group-hover:from-igf-orange/35 group-hover:to-igf-indigo/25">
                      <Icon className="h-7 w-7 text-igf-orange" aria-hidden />
                    </div>
                    <div>
                      <div className="font-heading text-lg font-bold text-igf-ink sm:text-xl">{item.title}</div>
                      <div className="mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-igf-orange to-igf-magenta transition-all duration-500 group-hover:w-24" />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delayMs={220}>
            <div className="mt-10 text-center">
              <Link to="/programs">
                <Button className="igf-btn-shimmer px-8">View All Programs</Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-20 sm:py-24">
        <div className="igf-cta-spectrum relative overflow-hidden rounded-none px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-amber-300 blur-3xl" />
          </div>
          <Container className="relative">
            <Reveal>
              <div className="grid gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md transition duration-500 hover:border-white/30 hover:bg-white/15">
                  <h3 className="font-heading text-2xl font-extrabold">Partner with us</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Support programs, sponsor events, and help us scale community impact.
                  </p>
                  <Link to="/partner-with-us" className="mt-6 inline-flex">
                    <Button className="border-0 bg-white text-igf-indigo hover:bg-amber-50">Get Involved</Button>
                  </Link>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md transition duration-500 hover:border-amber-200/40 hover:bg-white/15">
                  <h3 className="font-heading text-2xl font-extrabold">Donate today</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Your contribution keeps language and arts education accessible.
                  </p>
                  <Link to="/donate" className="mt-6 inline-flex">
                    <Button attention className="igf-btn-shimmer shadow-lg shadow-black/20">
                      Donate Now
                    </Button>
                  </Link>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md transition duration-500 hover:border-white/30 hover:bg-white/15">
                  <h3 className="font-heading text-2xl font-extrabold">Stay connected</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Reach our team for volunteering, participation, or collaboration ideas.
                  </p>
                  <Link to="/contact" className="mt-6 inline-flex">
                    <Button
                      variant="secondary"
                      className="border-white/40 bg-transparent text-white ring-white/30 hover:bg-white/15"
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
