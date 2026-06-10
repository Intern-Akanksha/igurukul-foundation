import { ClosingQuoteSection, JoinUsSection } from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function Subscribe() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Stay Connected"
        title="Subscribe for Updates"
        lead="Join our community to receive event updates, cultural insights, and volunteer opportunities."
      />
      <JoinUsSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
