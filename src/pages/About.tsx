import Container from '../components/Container'
import Reveal from '../components/Reveal'
import TeamSection from '../components/TeamSection'
import { site } from '../data/site'
import { cn } from '../utils/cn'

const statMods = ['igf-mod-cyan', 'igf-mod-magenta', 'igf-mod-purple', 'igf-mod-orange'] as const

export default function About() {
  return (
    <>
    <div className="igf-page-wrap relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-igf-indigo/8 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <div className="text-center">
            <p className="igf-eyebrow-exhibit">Our Legacy</p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
              Celebrating{' '}
              <span className="bg-gradient-to-r from-igf-indigo via-cyan-600 to-violet-600 bg-clip-text text-transparent">
                26 Years
              </span>{' '}
              of Heritage & Culture
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-igf-gray sm:text-lg">
              For over a quarter century, {site.name} has been a beacon for Indian classical arts,
              cultural preservation, and community connection in the Bay Area. This year&apos;s
              Cultural Extravaganza promises to be our most spectacular yet — welcoming 500+
              attendees for a joyful day of music, movement, food, and cultural connection.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '26', label: 'Years of Heritage' },
            { value: '250+', label: 'Performing Artists' },
            { value: '15+', label: 'Dance & Music Academies' },
            { value: '27', label: 'Live Performances' },
          ].map((s, idx) => (
            <Reveal key={s.label} delayMs={80 * idx} from="scale">
              <div className={cn('igf-exhibit-card igf-exhibit-stat-light p-6 text-center sm:p-7', statMods[idx])}>
                <div className="igf-stat-value font-heading text-4xl font-extrabold sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm font-semibold text-igf-gray">{s.label}</div>
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
