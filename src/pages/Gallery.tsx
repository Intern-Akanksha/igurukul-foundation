import { ClosingQuoteSection, MissionSection } from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function Gallery() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Gallery"
        title="Moments of Learning & Heritage"
        lead="A mission expressed through purposeful, human-centered action across our community."
      />
      <MissionSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
