import {
  ArrowRight,
  BookOpenText,
  Compass,
  Gem,
  HandHeart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Mail,
  Orbit,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  closingQuote,
  corePrograms,
  foundationHero,
  joinUs,
  journeyMilestones,
  missionCards,
  philosophy,
  strengths,
  visionPillars,
  whoWeAre,
  whyLearnOdia,
} from '../data/foundationContent'
import Button from './Button'
import GsapCounterValue from './GsapCounterValue'
import GsapRevealBlock from './GsapRevealBlock'
import GsapSplitHeadline from './GsapSplitHeadline'

const journeyStats = [
  { value: 2000, suffix: '', label: 'Learning journey founded' },
  { value: 2011, suffix: '', label: 'Official nonprofit status' },
  { value: 4, suffix: '', label: 'Core learning pillars' },
  { value: 9, suffix: '', label: 'Programs and activities' },
]

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
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.36.19%20PM.jpeg',
  'Yoga, Wellness & Reiki':
    'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%2012.41.08%20PM.jpeg',
}

export function HeroSection() {
  return (
    <section className="lux-hero">
      <div className="lux-hero__bg" aria-hidden />
      <div className="lux-hero__pattern" aria-hidden />
      <div className="lux-hero__glow lux-hero__glow--gold" aria-hidden />
      <div className="lux-hero__glow lux-hero__glow--burgundy" aria-hidden />
      <div className="lux-hero__float lux-hero__float--1" aria-hidden />
      <div className="lux-hero__float lux-hero__float--2" aria-hidden />

      <div className="lux-hero__inner">
        <GsapRevealBlock immediate className="text-center">
          <div className="lux-hero__badge">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Heritage-inspired education
          </div>
        </GsapRevealBlock>

        <div className="mx-auto mt-8 max-w-5xl text-center">
          <GsapSplitHeadline
            immediate
            as="h1"
            text={foundationHero.title}
            className="lux-hero__title"
          />
          <GsapRevealBlock immediate delay={0.18} className="mx-auto mt-6 max-w-3xl">
            <p className="lux-hero__subtitle">{foundationHero.subtitle}</p>
          </GsapRevealBlock>
          <GsapRevealBlock immediate delay={0.28} className="mx-auto mt-8 max-w-4xl">
            <div className="lux-hero__quote">
              <p className="font-display text-2xl leading-relaxed text-[var(--lux-ivory)] sm:text-3xl">
                {'\u201C'}
                {foundationHero.quote}
                {'\u201D'}
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--lux-gold-light)]">
                {foundationHero.quoteAuthor}
              </p>
            </div>
          </GsapRevealBlock>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStats.map((item, index) => (
            <GsapRevealBlock key={item.label} delay={0.1 + index * 0.08} className="h-full">
              <div className="lux-hero__stat text-center">
                <div className="lux-hero__stat-value">
                  <GsapCounterValue end={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-[color-mix(in_srgb,var(--lux-ivory)_75%,transparent)]">
                  {item.label}
                </p>
              </div>
            </GsapRevealBlock>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {foundationHero.highlights.map((item, index) => (
            <GsapRevealBlock key={item} delay={0.2 + index * 0.08} className="h-full">
              <div className="lux-hero__stat h-full text-left">
                <div className="mb-3 lux-icon-wrap h-10 w-10">
                  <Lightbulb className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-base font-semibold leading-7 text-[var(--lux-ivory)]">{item}</p>
              </div>
            </GsapRevealBlock>
          ))}
        </div>

        <GsapRevealBlock delay={0.42} className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/programs">
            <Button attention className="lux-shimmer px-8 py-3.5">
              Explore Programs
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" className="px-8 py-3.5">
              Join Us
            </Button>
          </Link>
        </GsapRevealBlock>
      </div>
    </section>
  )
}

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="max-w-3xl">
          <div className="igf-page-eyebrow">Who We Are</div>
          <GsapSplitHeadline
            as="h2"
            text={whoWeAre.title}
            className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl lg:text-6xl"
          />
        </GsapRevealBlock>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {whoWeAre.blocks.map((block, index) => (
            <GsapRevealBlock key={block.title} delay={index * 0.08}>
              <div className="lux-card p-7">
                <div className="lux-icon-wrap mb-4 h-12 w-12">
                  {index === 0 ? <BookOpenText className="h-5 w-5" aria-hidden /> : index === 1 ? <Users className="h-5 w-5" aria-hidden /> : <HeartHandshake className="h-5 w-5" aria-hidden />}
                </div>
                <h3 className="font-display text-3xl font-semibold leading-tight lux-text-ink">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-8 lux-text-ink/78">{block.body}</p>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden lux-section-alt px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <GsapRevealBlock className="max-w-2xl">
            <div className="igf-page-eyebrow">Our Journey</div>
            <GsapSplitHeadline
              as="h2"
              text="A timeline of growth shaped by purpose, participation, and community trust."
              className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl"
            />
            <p className="mt-6 text-lg leading-8 lux-text-ink/78">
              From grassroots Odia learning to an established nonprofit centre of excellence, the journey reflects continuity, service, and cultural leadership.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {journeyStats.map((item, idx) => (
                <GsapRevealBlock key={item.label} delay={0.08 + idx * 0.06}>
                  <div className="lux-card p-5">
                    <div className="font-heading text-4xl font-bold lux-text-gold">
                      <GsapCounterValue end={item.value} suffix={item.suffix} />
                    </div>
                    <div className="mt-2 text-sm font-medium leading-6 lux-text-ink/72">{item.label}</div>
                  </div>
                </GsapRevealBlock>
              ))}
            </div>
          </GsapRevealBlock>

          <div className="relative">
            <div className="absolute left-[1.15rem] top-4 bottom-4 w-px lux-timeline-line" />
            <div className="space-y-6">
              {journeyMilestones.map((item, index) => (
                <GsapRevealBlock key={item.year} delay={index * 0.1}>
                  <div className="lux-card relative ml-0 p-6 pl-14">
                    <div className="absolute left-0 top-6 flex h-9 w-9 translate-x-[0.05rem] items-center justify-center rounded-full lux-timeline-dot text-[var(--lux-ivory)] shadow-md">
                      <span className="block h-2.5 w-2.5 rounded-full bg-[var(--lux-gold)]" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] lux-text-gold">
                      {item.year}
                    </div>
                    <h3 className="mt-2 font-display text-3xl font-semibold lux-text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 lux-text-ink/76">{item.body}</p>
                  </div>
                </GsapRevealBlock>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionSection() {
  return (
    <section id="vision" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="max-w-3xl">
          <div className="igf-page-eyebrow">Vision</div>
          <GsapSplitHeadline
            as="h2"
            text="Four pillars that define how learning becomes human development."
            className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl"
          />
        </GsapRevealBlock>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visionPillars.map((pillar, index) => (
            <GsapRevealBlock key={pillar.title} delay={index * 0.08}>
              <div className="lux-card group relative h-full overflow-hidden p-7">
                <div className="absolute right-4 top-4 lux-text-gold/30">
                  <Orbit className="h-9 w-9" aria-hidden />
                </div>
                <div className="inline-flex rounded-2xl lux-icon-wrap bg-transparent p-3 lux-text-gold">
                  {index === 0 ? <Compass className="h-5 w-5" aria-hidden /> : index === 1 ? <Leaf className="h-5 w-5" aria-hidden /> : index === 2 ? <Gem className="h-5 w-5" aria-hidden /> : <Users className="h-5 w-5" aria-hidden />}
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold lux-text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 lux-text-ink/76">{pillar.body}</p>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MissionSection() {
  return (
    <section id="mission" className="lux-section-alt px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="max-w-3xl">
          <div className="igf-page-eyebrow">Mission</div>
          <GsapSplitHeadline
            as="h2"
            text="A mission expressed through purposeful, human-centered action."
            className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl"
          />
        </GsapRevealBlock>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {missionCards.map((card, index) => (
            <GsapRevealBlock key={card.title} delay={index * 0.08}>
              <div className="lux-card p-7">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl lux-icon-wrap bg-transparent lux-text-gold">
                    <HandHeart className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold lux-text-ink">{card.title}</h3>
                    <p className="mt-4 text-base leading-8 lux-text-ink/76">{card.body}</p>
                  </div>
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
    <section id="programs" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="max-w-3xl">
          <div className="igf-page-eyebrow">Core Programs & Activities</div>
          <GsapSplitHeadline
            as="h2"
            text="Programs that connect language, heritage, wellness, service, and human growth."
            className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl"
          />
        </GsapRevealBlock>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {corePrograms.map((item, index) => (
            <GsapRevealBlock key={item} delay={index * 0.06}>
              <div className="lux-card group h-full overflow-hidden transition duration-300 hover:-translate-y-1.5">
                {programImageMap[item] ? (
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={programImageMap[item]}
                        alt={item}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(212,175,55,0)_35%,rgba(18,18,18,0.52)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-end justify-between gap-3">
                      <div className="rounded-full border border-white/22 bg-[color-mix(in_srgb,var(--lux-gold)_72%,transparent)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--lux-black)] backdrop-blur">
                        Featured Program
                      </div>
                      <div className="rounded-full bg-white/88 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] lux-text-gold shadow-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] lux-text-gold">
                    Program {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 font-display text-[1.95rem] font-semibold leading-tight lux-text-ink">
                    {item}
                  </h3>
                </div>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyLearnOdiaSection() {
  return (
    <section id="why-odia" className="relative overflow-hidden lux-section-alt px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <GsapRevealBlock>
            <div className="igf-page-eyebrow">{whyLearnOdia.title}</div>
            <GsapSplitHeadline
              as="h2"
              text="Language becomes a bridge between memory, belonging, and cultural continuity."
              className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl"
            />
          </GsapRevealBlock>
          <div className="mt-8 space-y-4">
            {whyLearnOdia.reasons.map((reason, index) => (
              <GsapRevealBlock key={reason} delay={index * 0.08}>
                <div className="lux-card flex items-start gap-4 px-5 py-5">
                  <div className="lux-icon-wrap mt-0.5 h-10 w-10 shrink-0">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </div>
                  <p className="text-base leading-8 lux-text-ink/78">{reason}</p>
                </div>
              </GsapRevealBlock>
            ))}
          </div>
        </div>

        <GsapRevealBlock delay={0.12}>
          <div className="lux-quote-band p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lux-gold-light)]">
              Featured Quote
            </div>
            <p className="mt-6 font-display text-3xl italic leading-relaxed text-white sm:text-[2.2rem]">
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
    <section id="strength" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="max-w-3xl">
          <div className="igf-page-eyebrow">Our Strength</div>
          <GsapSplitHeadline
            as="h2"
            text="A living ecosystem of people, disciplines, and service-oriented leadership."
            className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl"
          />
        </GsapRevealBlock>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {strengths.map((item, index) => (
            <GsapRevealBlock key={item} delay={index * 0.06}>
              <div className="lux-card relative overflow-hidden px-6 py-6">
                <div className="lux-glow lux-glow--gold pointer-events-none absolute right-[-1.5rem] top-[-1.5rem] h-20 w-20" />
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl lux-icon-wrap bg-transparent lux-text-gold">
                    <Orbit className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-[1.8rem] font-semibold leading-tight lux-text-ink">
                    {item}
                  </h3>
                </div>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative overflow-hidden lux-section-alt px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <GsapRevealBlock className="mx-auto max-w-4xl text-center">
          <div className="igf-page-eyebrow justify-center">Organizational Philosophy</div>
          <GsapSplitHeadline
            as="h2"
            text={philosophy.title}
            className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] lux-text-ink sm:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 lux-text-ink/76">
            {philosophy.body}
          </p>
        </GsapRevealBlock>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {philosophy.pillars.map((item, index) => (
            <GsapRevealBlock key={item} delay={index * 0.08}>
              <div className="lux-card lux-card--glass p-6 text-center">
                <div className="font-heading text-4xl font-bold tracking-[-0.03em] lux-text-gold">
                  {item}
                </div>
              </div>
            </GsapRevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

export function JoinUsSection() {
  return (
    <section id="join-us" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <GsapRevealBlock>
          <div className="lux-cta-band px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute left-[-2rem] top-[-2rem] h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <div className="lux-glow lux-glow--gold pointer-events-none absolute right-[-2rem] bottom-[-2rem] h-40 w-40" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="igf-page-eyebrow !text-white before:via-white/40 after:via-white/40">
                  {joinUs.title}
                </div>
                <GsapSplitHeadline
                  as="h2"
                  text="A modern invitation to participate in learning, service, and shared cultural growth."
                  className="mt-4 font-heading text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl"
                />
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/84">{joinUs.body}</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/18 bg-white/10 p-6 backdrop-blur">
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                      Website
                    </div>
                    <a
                      href={joinUs.website}
                      className="mt-2 block break-all text-lg font-semibold text-white hover:text-[#f7eeff]"
                    >
                      {joinUs.website}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                      Email
                    </div>
                    <a
                      href={`mailto:${joinUs.email}`}
                      className="mt-2 block break-all text-lg font-semibold text-white hover:text-[#f7eeff]"
                    >
                      {joinUs.email}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={joinUs.website} attention className="px-6 py-3">
                    Visit Website
                  </Button>
                  <Button href={`mailto:${joinUs.email}`} variant="outlineLight" className="px-6 py-3">
                    <Mail className="h-4 w-4" aria-hidden />
                    Email Us
                  </Button>
                </div>
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
    <section className="lux-section-alt px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <GsapRevealBlock className="text-center">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--lux-gold)_18%,transparent)] lux-text-gold">
            <Sparkles className="h-6 w-6" aria-hidden />
          </div>
          <p className="mx-auto mt-8 max-w-4xl font-display text-3xl italic leading-relaxed lux-text-ink sm:text-4xl lg:text-5xl">
            {'\u201C'}
            {closingQuote.text}
            {'\u201D'}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] lux-text-gold">
            {closingQuote.author}
          </p>
        </GsapRevealBlock>
      </div>
    </section>
  )
}


