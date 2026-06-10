import {
  ProgramsSection,
  VisionSection,
  WhyLearnOdiaSection,
} from '../components/FoundationSections'

export default function Programs() {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <VisionSection />
      <ProgramsSection />
      <WhyLearnOdiaSection />
    </div>
  )
}
