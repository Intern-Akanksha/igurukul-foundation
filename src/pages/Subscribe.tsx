import {
  ClosingQuoteSection,
  JoinUsSection,
} from '../components/FoundationSections'

export default function Subscribe() {
  return (
    <div className="relative overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <JoinUsSection />
      <ClosingQuoteSection />
    </div>
  )
}
