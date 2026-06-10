import {
  ClosingQuoteSection,
  ProgramsSection,
  VisionSection,
  WhyLearnOdiaSection,
} from '../components/FoundationSections'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function Programs() {
  return (
    <LuxPageShell>
      <LuxPageHeader
        eyebrow="Programs"
        title="Our Programs"
        lead="Programs that connect language, heritage, wellness, service, and human growth."
      />
      <VisionSection />
      <ProgramsSection />
      <WhyLearnOdiaSection />
      <ClosingQuoteSection />
    </LuxPageShell>
  )
}
