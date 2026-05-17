import Container from '../components/Container'
import Reveal from '../components/Reveal'
import TeamSection from '../components/TeamSection'
import { site } from '../data/site'

export default function About() {
  return (
    <>
    <div className="igf-page-wrap relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-igf-orange/8 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <div className="igf-section-head">
            <p className="igf-page-eyebrow justify-center">
              <span className="tracking-[0.22em]">Our Legacy</span>
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-igf-ink sm:text-4xl md:text-5xl">
              Celebrating{' '}
              <span className="bg-gradient-to-r from-igf-orange via-amber-500 to-igf-magenta bg-clip-text text-transparent">
                26 Years
              </span>{' '}
              of Heritage & Culture
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-igf-gray sm:text-base">
              For over a quarter century, {site.name} has been a beacon for Indian classical arts,
              cultural preservation, and community connection in the Bay Area. This year&apos;s
              Cultural Extravaganza promises to be our most spectacular yet — welcoming 500+
              attendees for a joyful day of music, movement, food, and cultural connection.
            </p>
          </div>
        </Reveal>

        <div className="igf-section-body igf-stats-grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '26', label: 'Years of Heritage' },
            { value: '250+', label: 'Performing Artists' },
            { value: '15+', label: 'Dance & Music Academies' },
            { value: '27', label: 'Live Performances' },
          ].map((s, idx) => (
            <Reveal key={s.label} delayMs={80 * idx} from="scale">
              <div className="igf-travel-feature-card igf-torn-paper igf-card-compact text-center">
                <div className="bg-gradient-to-br from-igf-orange to-amber-600 bg-clip-text font-heading text-3xl font-extrabold text-transparent sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs font-semibold text-igf-gray sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
    <TeamSection />
    </>
  )
}
