import {
  ClosingQuoteSection,
  JoinUsSection,
  PhilosophySection,
} from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function Registration() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Join Us"
        title="Partner With Us"
        lead="Take part in a growing cultural and educational ecosystem shaped by learning, service, and human development."
      />
      <PhilosophySection />
      <JoinUsSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
