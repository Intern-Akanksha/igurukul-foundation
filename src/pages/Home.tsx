import {
  ClosingQuoteSection,
  HeroSection,
  JoinUsSection,
  JourneySection,
  MissionSection,
  PhilosophySection,
  ProgramsSection,
  StrengthSection,
  VisionSection,
  WhoWeAreSection,
  WhyLearnOdiaSection,
} from '../components/FoundationSections'

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <HeroSection />
      <WhoWeAreSection />
      <JourneySection />
      <VisionSection />
      <MissionSection />
      <ProgramsSection />
      <WhyLearnOdiaSection />
      <StrengthSection />
      <PhilosophySection />
      <JoinUsSection />
      <ClosingQuoteSection />
    </div>
  )
}
