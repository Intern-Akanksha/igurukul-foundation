import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

export default function About() {
  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
              Our Legacy
            </div>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
              Celebrating 26 Years of Heritage & Culture
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-igf-gray">
              For over a quarter century, {site.name} has been a beacon for Indian classical arts, cultural preservation, and community connection in the Bay Area. This year's Cultural Extravaganza promises to be our most spectacular yet — welcoming 500+ attendees for a joyful day of music, movement, food, and cultural connection.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '26', label: 'Years of Heritage' },
              { value: '250+', label: 'Performing Artists' },
              { value: '15+', label: 'Dance & Music Academies' },
              { value: '27', label: 'Live Performances' },
            ].map((s, idx) => (
              <Reveal key={s.label} delayMs={80 * idx}>
                <div className="igf-surface rounded-3xl border border-black/5 p-7 text-center shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="font-heading text-4xl font-extrabold text-igf-orange">{s.value}</div>
                  <div className="mt-2 text-sm font-semibold text-igf-gray">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
