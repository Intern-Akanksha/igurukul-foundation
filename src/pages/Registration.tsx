import {
  JoinUsSection,
  PhilosophySection,
} from '../components/FoundationSections'

export default function Registration() {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <PhilosophySection />
      <JoinUsSection />
    </div>
  )
}
