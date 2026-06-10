import { ClosingQuoteSection, JoinUsSection } from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function Donate() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Support"
        title="Support the Mission"
        lead="Take part in a growing cultural and educational ecosystem shaped by learning, service, and human development."
      />
      <JoinUsSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
