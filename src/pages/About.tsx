import {
  ClosingQuoteSection,
  JourneySection,
  PhilosophySection,
  WhoWeAreSection,
} from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function About() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="About"
        title="About iGurukul Foundation"
        lead="A volunteer-driven foundation where learning, culture, and human development grow together."
      />
      <WhoWeAreSection />
      <JourneySection />
      <PhilosophySection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
