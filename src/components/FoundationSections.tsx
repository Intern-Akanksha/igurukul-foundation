import {
  ArrowRight,
  BookOpenText,
  Briefcase,
  Compass,
  Gem,
  HandHeart,
  HeartHandshake,
  Leaf,
  Link as LinkIcon,
  Mail,
  Orbit,
  Palette,
  Sparkles,
  Stethoscope,
  Users,
  Wind,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  closingQuote,
  corePrograms,
  foundationHero,
  joinUs,
  journeyFounders,
  journeyMilestones,
  missionCards,
  philosophy,
  sectionTitles,
  strengths,
  visionPillars,
  whoWeAre,
  whoWeAreKeywords,
  whyLearnOdia,
} from '../data/foundationContent'
import Button from './Button'
import GsapRevealBlock from './GsapRevealBlock'
import GsapSplitHeadline from './GsapSplitHeadline'
import PremiumHero from './PremiumHero'

const programImageMap: Partial<Record<(typeof corePrograms)[number], string>> = {
  'Odia Literacy Program':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%2012.44.43%20PM.jpeg',
  'Annual Odia Camp':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.33.28%20PM.jpeg',
  'iGurukul Cultural Extravaganza':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.31.11%20PM.jpeg',
  'Community Service & Food Drives':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.26.47%20PM.jpeg',
  'Caring Hands Initiative':
    'https://wajweb.b-cdn.net/igurukul-foundation/odia%20exam.jpeg',
  'Yoga, Wellness & Reiki':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%2012.41.08%20PM.jpeg',
  'Hosting Eminent Artists':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.36.19%20PM.jpeg',
  'Intergenerational Learning':
    '',
  'Online Learning':
    '',
}

const strengthIcons = [
  BookOpenText,
  Briefcase,
  Stethoscope,
  Palette,
  Briefcase,
  Wind,
  HeartHandshake,
  Users,
  Users,
] as const

const philosophyIcons = [Users, LinkIcon, Leaf, Orbit] as const

function SectionHeader({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: string
  title: string
  lead?: string
  center?: boolean
}) {
  return (
    <GsapRevealBlock className={center ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
      <div className={`igf-page-eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</div>
      <GsapSplitHeadline as="h2" text={title} className="lux-section-title mt-4" />
      {lead ? <p className={`lux-body-lg mt-6 ${center ? 'mx-auto max-w-3xl' : ''}`}>{lead}</p> : null}
    </GsapRevealBlock>
  )
}

export function HeroSection() {
  return <PremiumHero />
}

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={sectionTitles.whoWeAre} title={whoWeAre.title} />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <GsapRevealBlock>
            <div className="lux-panel relative overflow-hidden p-2">
              <div className="igf-motion-img-wrap aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.33.28%20PM.jpeg"
                  alt="iGurukul Foundation community learning together"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lux-glow lux-glow--gold pointer-events-none absolute -right-6 -top-6 h-24 w-24" />
            </div>
          </GsapRevealBlock>
          <div>
            <div className="space-y-6">
              {whoWeAre.blocks.map((block, index) => (
                <GsapRevealBlock key={block.title} delay={index * 0.08}>
                  <div className="lux-card p-6">
                    <h3 className="lux-card-title">{block.title}</h3>
                    <p className="mt-3 lux-body-lg text-base">{block.body}</p>
                  </div>
                </GsapRevealBlock>
              ))}
            </div>
            <GsapRevealBlock delay={0.2} className="mt-8 flex flex-wrap gap-2">
              {whoWeAreKeywords.map((keyword) => (
                <span key={keyword} className="lux-keyword">
                  {keyword}
                </span>
              ))}
            </GsapRevealBlock>
            <GsapRevealBlock delay={0.28}>
              <blockquote className="lux-inline-quote">
                <p>
                  {'\u201C'}
                  {foundationHero.quote}
                  {'\u201D'}
                </p>
                <cite>{foundationHero.quoteAuthor}</cite>
              </blockquote>
            </GsapRevealBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

export function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden lux-section-alt lux-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Journey"
          title={sectionTitles.journey}
          lead="From grassroots Odia learning to an established nonprofit centre of excellence, the journey reflects continuity, service, and cultural leadership."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
          {journeyFounders.map((founder, index) => (
            <GsapRevealBlock key={founder.id} delay={index * 0.1}>
              <div className="lux-card flex items-center gap-4 p-5">
                <div className="lux-icon-wrap h-14 w-14 shrink-0 rounded-full">
                  <Users className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold lux-text-ink">{founder.name}</div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] lux-text-gold">
                    {founder.role}
                  </div>
                </div>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
        <div className="relative mt-12">
          <div className="absolute left-[1.15rem] top-4 bottom-4 hidden w-px lux-timeline-line md:block" />
          <div className="space-y-6">
            {journeyMilestones.map((item, index) => (
              <GsapRevealBlock key={item.year} delay={index * 0.1}>
                <div className="lux-card relative p-6 md:pl-14">
                  <div className="absolute left-0 top-6 hidden h-9 w-9 items-center justify-center rounded-full lux-timeline-dot md:flex">
                    <span className="block h-2.5 w-2.5 rounded-full bg-[var(--lux-gold)]" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] lux-text-gold">
                    {item.year}
                  </div>
                  <h3 className="mt-2 lux-card-title text-2xl">{item.title}</h3>
                  <p className="mt-3 lux-body-lg text-base">{item.body}</p>
                </div>
              </GsapRevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionSection() {
  const visionIcons = [Compass, Leaf, Gem, Users] as const
  return (
    <section id="vision" className="lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Vision" title={sectionTitles.vision} center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visionPillars.map((pillar, index) => {
            const Icon = visionIcons[index] ?? Compass
            return (
              <GsapRevealBlock key={pillar.title} delay={index * 0.08}>
                <div className="lux-card group h-full p-7 transition duration-500 hover:-translate-y-2">
                  <div className="lux-icon-wrap h-12 w-12">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 lux-card-title">{pillar.title}</h3>
                  <p className="mt-4 lux-body-lg text-base">{pillar.body}</p>
                </div>
              </GsapRevealBlock>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function MissionSection() {
  return (
    <section id="mission" className="lux-section-alt lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Our Mission" title={sectionTitles.mission} center />
        <div className="mt-12 space-y-6">
          {missionCards.map((card, index) => (
            <GsapRevealBlock key={card.title} delay={index * 0.08}>
              <div
                className={`lux-card flex flex-col gap-6 p-7 md:flex-row md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="lux-icon-wrap h-14 w-14 shrink-0">
                  <HandHeart className="h-6 w-6" aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="lux-card-title">{card.title}</h3>
                  <p className="mt-3 lux-body-lg text-base">{card.body}</p>
                </div>
                <div className="hidden h-24 w-32 shrink-0 overflow-hidden rounded-xl md:block">
                  <img
                    src={
                      programImageMap[corePrograms[index % corePrograms.length]] ??
                      'https://wajweb.b-cdn.net/igurukul-foundation/igfupdatedlogo.jpg'
                    }
                    alt=""
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProgramsSection() {
  return (
    <section id="programs" className="lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Programs & Activities"
          title={sectionTitles.programs}
          lead="Programs that connect language, heritage, wellness, service, and human growth."
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {corePrograms.map((item, index) => (
            <GsapRevealBlock key={item} delay={index * 0.06}>
              <article className="lux-card group flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={
                      programImageMap[item] ??
                      'https://wajweb.b-cdn.net/igurukul-foundation/igfupdatedlogo.jpg'
                    }
                    alt={item}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(18,18,18,0.55)_100%)]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="lux-card-title">{item}</h3>
                  <div className="mt-auto pt-5">
                    <Link
                      to="/programs"
                      className="inline-flex items-center gap-2 text-sm font-semibold lux-text-gold transition hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyLearnOdiaSection() {
  return (
    <section id="why-odia" className="relative overflow-hidden lux-section-alt lux-section">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <SectionHeader eyebrow={whyLearnOdia.title} title={sectionTitles.whyOdia} />
          <div className="mt-8 space-y-4">
            {whyLearnOdia.reasons.map((reason, index) => (
              <GsapRevealBlock key={reason} delay={index * 0.08}>
                <div className="lux-infographic-item lux-card px-5 py-5">
                  <div className="lux-infographic-num">{index + 1}</div>
                  <p className="lux-body-lg text-base leading-8">{reason}</p>
                </div>
              </GsapRevealBlock>
            ))}
          </div>
        </div>
        <GsapRevealBlock delay={0.12}>
          <div className="lux-quote-band flex h-full flex-col justify-center p-8 lg:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lux-gold-light)]">
              Featured Quote
            </div>
            <p className="mt-6 font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              {'\u201C'}
              {whyLearnOdia.quote}
              {'\u201D'}
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[color-mix(in_srgb,var(--lux-ivory)_84%,transparent)]">
              {whyLearnOdia.quoteAuthor}
            </p>
          </div>
        </GsapRevealBlock>
      </div>
    </section>
  )
}

export function StrengthSection() {
  return (
    <section id="strength" className="lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Strength"
          title={sectionTitles.strength}
          lead="A living ecosystem of people, disciplines, and service-oriented leadership."
          center
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = strengthIcons[index] ?? Users
            return (
              <GsapRevealBlock key={item} delay={index * 0.05}>
                <div className="lux-card group relative overflow-hidden px-5 py-5 transition duration-500 hover:-translate-y-1.5">
                  <div className="lux-glow lux-glow--gold pointer-events-none absolute -right-4 -top-4 h-16 w-16 opacity-0 transition group-hover:opacity-100" />
                  <div className="flex items-center gap-4">
                    <div className="lux-icon-wrap h-11 w-11 shrink-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="lux-card-title text-xl">{item}</h3>
                  </div>
                </div>
              </GsapRevealBlock>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative overflow-hidden lux-section-alt lux-section">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden>
        <div className="h-full w-full lux-hero-v2__pattern" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Organizational Philosophy"
          title={sectionTitles.philosophy}
          lead={philosophy.body}
          center
        />
        <div className="lux-philosophy-track mt-12">
          {philosophy.pillars.map((item, index) => {
            const Icon = philosophyIcons[index] ?? Sparkles
            return (
              <GsapRevealBlock key={item} delay={index * 0.08}>
                <div className="lux-philosophy-card">
                  <div className="lux-icon-wrap mx-auto h-12 w-12">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="mt-4 font-heading text-2xl font-bold lux-text-gold">{item}</div>
                </div>
              </GsapRevealBlock>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function JoinUsSection() {
  return (
    <section id="join-us" className="lux-section px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <GsapRevealBlock>
          <div className="lux-cta-band px-6 py-10 sm:px-10 sm:py-14">
            <div className="lux-glow lux-glow--gold pointer-events-none absolute right-[-2rem] bottom-[-2rem] h-40 w-40" />
            <div className="relative text-center">
              <div className="igf-page-eyebrow justify-center !text-white before:via-white/40 after:via-white/40">
                {joinUs.title}
              </div>
              <GsapSplitHeadline
                as="h2"
                text={sectionTitles.joinUs}
                className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl"
              />
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/84">{joinUs.body}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link to="/contact">
                  <Button attention className="lux-shimmer px-6 py-3">
                    Volunteer
                  </Button>
                </Link>
                <Link to="/partner-with-us">
                  <Button variant="outlineLight" className="px-6 py-3">
                    Partner With Us
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="outlineLight" className="px-6 py-3">
                    Support Programs
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="outlineLight" className="px-6 py-3">
                    Donate
                  </Button>
                </Link>
              </div>
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-sm text-white/75 sm:flex-row sm:justify-center sm:gap-6">
                <a href={joinUs.website} className="hover:text-white">
                  {joinUs.website}
                </a>
                <a href={`mailto:${joinUs.email}`} className="hover:text-white">
                  <Mail className="mr-1 inline h-4 w-4" aria-hidden />
                  {joinUs.email}
                </a>
              </div>
            </div>
          </div>
        </GsapRevealBlock>
      </div>
    </section>
  )
}

export function ClosingQuoteSection() {
  return (
    <section className="lux-testimonial-band">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <GsapRevealBlock>
          <Sparkles className="mx-auto h-6 w-6 text-[var(--lux-gold)]" aria-hidden />
          <p className="mx-auto mt-8 max-w-4xl font-display text-2xl italic leading-relaxed text-[var(--lux-ivory)] sm:text-3xl lg:text-4xl">
            {'\u201C'}
            {closingQuote.text}
            {'\u201D'}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--lux-gold-light)]">
            {closingQuote.author}
          </p>
        </GsapRevealBlock>
      </div>
    </section>
  )
}
