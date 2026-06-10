import { ClosingQuoteSection } from '../components/FoundationSections'
import GsapRevealBlock from '../components/GsapRevealBlock'
import PastEventsSection from '../components/PastEventsSection'

export default function NewsEvents() {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <section className="px-4 pb-6 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <GsapRevealBlock className="text-center">
            <div className="igf-page-eyebrow justify-center">Events</div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl">
              News &amp; Events
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 lux-text-ink/76 sm:text-lg">
              Discover cultural programs, community gatherings, and learning initiatives hosted by
              iGurukul Foundation across the Bay Area.
            </p>
          </GsapRevealBlock>
        </div>
      </section>
      <PastEventsSection />
      <ClosingQuoteSection />
    </div>
  )
}
