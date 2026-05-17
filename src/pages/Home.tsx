import { BookOpen, Calendar, Heart, Music, Sparkles, UsersRound } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import GeometricDecor from '../components/GeometricDecor'
import { site } from '../data/site'
import { cn } from '../utils/cn'

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

const statMods = ['igf-mod-cyan', 'igf-mod-magenta', 'igf-mod-purple', 'igf-mod-orange'] as const
const programMods = ['igf-mod-cyan', 'igf-mod-purple', 'igf-mod-orange', 'igf-mod-magenta'] as const

export default function Home() {
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], [0, 100])

  return (
    <motion.div className="relative">
      <section className="relative min-h-[78vh] overflow-hidden py-20 text-white sm:py-28">
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
        <div className="igf-exhibit-hero-overlay absolute inset-0" aria-hidden />
        <GeometricDecor />
        <div className="igf-grain absolute inset-0 opacity-15" aria-hidden />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] igf-float-slow" aria-hidden />
        <div
          className="absolute -right-16 bottom-32 h-96 w-96 rounded-full bg-violet-500/25 blur-[110px] igf-float-slow"
          style={{ animationDelay: '-3s' }}
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
              <div className="mx-auto inline-flex items-center gap-2 rounded-sm border border-white/25 bg-white/10 px-5 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden />
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-igf-cream/95 sm:text-xs">
                  Cultural celebration · Bay Area
                </span>
              </div>
              <h1 className="igf-heading-exhibit mt-6 text-4xl uppercase sm:mt-8 sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                  Rooted in Heritage
                </span>
                <br />
                <span className="text-igf-cream">Rising Together</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/88 sm:text-lg">
                Preserving Odia language, arts, and culture through education, community programs,
                and unforgettable events across the Bay Area.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link to="/event-2026">
                  <Button attention className="px-7 py-3 text-sm">
                    <Calendar className="h-4 w-4" aria-hidden />
                    Cultural Extravaganza 2026
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="px-7 py-3 text-sm">
                    Explore Our Mission
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Reveal>
        </Container>
        <div className="igf-wave-divider absolute bottom-0 left-0 right-0 z-10" aria-hidden />
      </section>

      <section className="igf-section-dark relative py-14 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, idx) => (
              <Reveal key={stat.label} delayMs={80 * idx}>
                <div className={cn('igf-exhibit-block relative p-6 text-center sm:p-7', statMods[idx])}>
                  <div className="relative font-heading text-4xl font-extrabold sm:text-5xl">{stat.value}</div>
                  <div className="relative mt-2 text-sm font-semibold text-white/90">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="igf-section-light relative py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="igf-exhibit-card shadow-[0_24px_60px_rgba(15,39,68,0.1)]">
              <div className="p-8 sm:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="igf-eyebrow-exhibit">About</p>
                    <h2 className="mt-4 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl md:text-5xl">
                      Cultural continuity for future generations
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-igf-gray sm:text-lg">
                      {site.name} supports language literacy, performing arts, and community connection
                      through year-round educational and cultural initiatives.
                    </p>
                    <Link to="/about" className="mt-8 inline-flex">
                      <Button attention>
                        Read Our Story
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-sm bg-gradient-to-tr from-cyan-500/15 via-violet-500/15 to-igf-indigo/20 blur-2xl" aria-hidden />
                    <div className="igf-exhibit-media relative overflow-hidden">
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

      <section className="igf-section-muted relative py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="igf-eyebrow-exhibit">Programs</p>
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
                  <div
                    className={cn(
                      'group igf-exhibit-card igf-exhibit-card-accent flex items-start gap-5 p-6 sm:p-7',
                      programMods[idx],
                    )}
                  >
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-sm bg-igf-indigo/10 ring-1 ring-igf-indigo/15 transition duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-igf-indigo" aria-hidden />
                    </div>
                    <div>
                      <div className="font-heading text-lg font-bold text-igf-ink sm:text-xl">{item.title}</div>
                      <div className="igf-geometric-line mt-3 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delayMs={220}>
            <div className="mt-10 text-center">
              <Link to="/programs">
                <Button className="px-8">View All Programs</Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="igf-exhibit-cta-band relative overflow-hidden rounded-none px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl" />
          </div>
          <Container className="relative">
            <Reveal>
              <div className="grid gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
                <div className="igf-exhibit-cta-panel rounded-sm p-8">
                  <h3 className="font-heading text-2xl font-extrabold">Partner with us</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Support programs, sponsor events, and help us scale community impact.
                  </p>
                  <Link to="/partner-with-us" className="mt-6 inline-flex">
                    <Button variant="inverse">Get Involved</Button>
                  </Link>
                </div>
                <div className="igf-exhibit-cta-panel rounded-sm p-8">
                  <h3 className="font-heading text-2xl font-extrabold">Donate today</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Your contribution keeps language and arts education accessible.
                  </p>
                  <Link to="/donate" className="mt-6 inline-flex">
                    <Button variant="inverse" attention>
                      Donate Now
                    </Button>
                  </Link>
                </div>
                <div className="igf-exhibit-cta-panel rounded-sm p-8">
                  <h3 className="font-heading text-2xl font-extrabold">Stay connected</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Reach our team for volunteering, participation, or collaboration ideas.
                  </p>
                  <Link to="/contact" className="mt-6 inline-flex">
                    <Button variant="outline">Contact Us</Button>
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
