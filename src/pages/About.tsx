import {
  JourneySection,
  PhilosophySection,
  WhoWeAreSection,
} from '../components/FoundationSections'

export default function About() {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <WhoWeAreSection />
      <JourneySection />
      <PhilosophySection />
    </div>
  )
}
