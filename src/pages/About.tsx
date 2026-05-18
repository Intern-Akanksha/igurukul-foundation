import ActaPageShell from '../components/ActaPageShell'
import Reveal from '../components/Reveal'
import TeamSection from '../components/TeamSection'
import { site } from '../data/site'

export default function About() {
  return (
    <>
      <ActaPageShell
        eyebrow="Our Legacy"
        title={
          <>
            Celebrating{' '}
            <span className="text-[var(--acta-terracotta)]">26 Years</span> of Heritage &amp; Culture
          </>
        }
        lead={`For over a quarter century, ${site.name} has been a beacon for Indian classical arts, cultural preservation, and community connection in the Bay Area.`}
      >
        <div className="acta-stat-grid">
          {[
            { value: '26', label: 'Years of Heritage' },
            { value: '250+', label: 'Performing Artists' },
            { value: '15+', label: 'Dance & Music Academies' },
            { value: '27', label: 'Live Performances' },
          ].map((s, idx) => (
            <Reveal key={s.label} delayMs={80 * idx} from="scale">
              <div className="acta-panel acta-panel--padded text-center">
                <div className="acta-stat-item__value">{s.value}</div>
                <p className="acta-stat-item__label">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="acta-body max-w-3xl mx-auto text-center">
            This year&apos;s Cultural Extravaganza promises to be our most spectacular yet — welcoming
            500+ attendees for a joyful day of music, movement, food, and cultural connection.
          </p>
        </Reveal>
      </ActaPageShell>
      <TeamSection />
    </>
  )
}
