import { ClosingQuoteSection } from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'
import PastEventsSection from '../components/PastEventsSection'

export default function NewsEvents() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Events"
        title="News & Events"
        lead="Discover cultural programs, community gatherings, and learning initiatives hosted by iGurukul Foundation across the Bay Area."
      />
      <PastEventsSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
