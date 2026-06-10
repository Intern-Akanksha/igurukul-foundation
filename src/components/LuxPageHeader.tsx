import GsapRevealBlock from './GsapRevealBlock'
import GsapSplitHeadline from './GsapSplitHeadline'

type LuxPageHeaderProps = {
  eyebrow: string
  title: string
  lead?: string
}

export default function LuxPageHeader({ eyebrow, title, lead }: LuxPageHeaderProps) {
  return (
    <section className="lux-page-header">
      <div className="lux-page-header__glow lux-glow lux-glow--gold" aria-hidden />
      <div className="lux-page-header__glow lux-glow lux-glow--burgundy" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:pb-10 lg:pt-28">
        <GsapRevealBlock immediate className="text-center">
          <div className="igf-page-eyebrow justify-center">{eyebrow}</div>
          <GsapSplitHeadline immediate as="h1" text={title} className="lux-section-title mt-4" />
          {lead ? <p className="lux-body-lg mx-auto mt-5 max-w-3xl">{lead}</p> : null}
        </GsapRevealBlock>
      </div>
    </section>
  )
}
