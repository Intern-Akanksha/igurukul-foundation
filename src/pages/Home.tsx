import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
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
  'Odia Literacy Centre',
  'Odissi Dance and Music',
  'Yoga and Reiki Classes',
  'Intergenerational Learning Forums',
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-igf-charcoal py-24 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroBgVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-igf-charcoal/70 via-igf-charcoal/75 to-igf-charcoal/90" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                iGurukul Foundation
              </p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-6xl">
                Rooted in Heritage, Rising Together
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
                Preserving Odia language, arts, and culture through education, community programs,
                and meaningful events across the Bay Area.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link to="/about">
                  <Button attention>Explore Our Mission</Button>
                </Link>
                {/* <Link to="/partner-with-us">
                  <Button variant="secondary" className="bg-white/10 text-white ring-white/20 hover:bg-white/20">
                    Partner With Us
                  </Button>
                </Link> */}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, idx) => (
              <Reveal key={stat.label} delayMs={80 * idx}>
                <div className="igf-surface rounded-3xl border border-black/5 p-7 text-center shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="font-heading text-4xl font-extrabold text-igf-orange">{stat.value}</div>
                  <div className="mt-2 text-sm font-semibold text-igf-gray">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">About</p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                  Cultural continuity for future generations
                </h2>
                <p className="mt-4 text-base leading-relaxed text-igf-gray">
                  {site.name} supports language literacy, performing arts, and community connection
                  through year-round educational and cultural initiatives.
                </p>
                <Link to="/about" className="mt-6 inline-flex">
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">Programs</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                Learning and community programs
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {programPreview.map((item, idx) => (
              <Reveal key={item} delayMs={80 * idx}>
                <div className="rounded-2xl bg-white/60 p-5 text-sm font-semibold text-igf-ink ring-1 ring-black/5">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={220}>
            <div className="mt-8 text-center">
              <Link to="/programs">
                <Button>View All Programs</Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <div className="grid gap-6 rounded-3xl border border-black/5 bg-white/70 p-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.08)] md:grid-cols-3 md:text-left">
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-igf-ink">Partner with us</h3>
                <p className="mt-3 text-sm text-igf-gray">Support programs, sponsor events, and help us scale community impact.</p>
                <Link to="/partner-with-us" className="mt-4 inline-flex">
                  <Button>Get Involved</Button>
                </Link>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-igf-ink">Donate today</h3>
                <p className="mt-3 text-sm text-igf-gray">Your contribution keeps language and arts education accessible.</p>
                <Link to="/donate" className="mt-4 inline-flex">
                  <Button attention>Donate Now</Button>
                </Link>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-extrabold text-igf-ink">Stay connected</h3>
                <p className="mt-3 text-sm text-igf-gray">Reach our team for volunteering, participation, or collaboration ideas.</p>
                <Link to="/contact" className="mt-4 inline-flex">
                  <Button variant="secondary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  )
}
