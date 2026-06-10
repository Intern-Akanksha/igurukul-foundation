import {
  ClosingQuoteSection,
  JoinUsSection,
  PhilosophySection,
} from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'
import PartnersShowcase from '../components/PartnersShowcase'

export default function Sponsors() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Partners"
        title="Partners & Sponsors"
        lead="The foundation grows through artistic collaboration, educational participation, and trusted community partnerships."
      />
      <PartnersShowcase />
      <PhilosophySection />
      <JoinUsSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
