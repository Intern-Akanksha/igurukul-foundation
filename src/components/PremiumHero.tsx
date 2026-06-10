import { useLayoutEffect, useRef, type CSSProperties } from 'react'
import { Award, BookOpen, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { foundationHero } from '../data/foundationContent'
import { ensureGsap } from '../lib/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import Button from './Button'
import GsapCounterValue from './GsapCounterValue'

const heroStats = [
  { value: 2000, suffix: '+', label: 'Learning Journey Founded' },
  { value: 2011, suffix: '', label: 'Official Nonprofit Status' },
  { value: 4, suffix: '', label: 'Core Learning Pillars' },
  { value: 9, suffix: '+', label: 'Programs & Activities' },
] as const

const trustBadges = [
  { icon: ShieldCheck, label: '501(c)(3) Nonprofit' },
  { icon: Award, label: '26+ Years of Service' },
  { icon: Users, label: 'Bay Area Community' },
  { icon: HeartHandshake, label: 'Volunteer-Led Mission' },
] as const

const HERO_IMAGE = {
  src: 'https://wajweb.b-cdn.net/igurukul-foundation/WhatsApp%20Image%202026-06-09%20at%201.31.11%20PM.jpeg',
  alt: 'Cultural performance at iGurukul Foundation',
} as const

const floatingCards = [
  {
    icon: GraduationCap,
    title: 'Student Success',
    body: 'Language, arts, and leadership programs shaping confident learners.',
    className: 'lux-hero-v2__float-card--1',
  },
  {
    icon: BookOpen,
    title: 'Odia Literacy',
    body: 'Heritage-rooted education connecting youth to cultural identity.',
    className: 'lux-hero-v2__float-card--2',
  },
  {
    icon: Award,
    title: 'Community Impact',
    body: 'Service initiatives that strengthen families and neighborhoods.',
    className: 'lux-hero-v2__float-card--3',
  },
] as const

export default function PremiumHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const leftRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)
  const spotlightRef = useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return
    const gsap = ensureGsap()
    const section = sectionRef.current
    const ctx = gsap.context(() => {
      const leftItems = leftRef.current?.querySelectorAll('[data-hero-reveal]')
      if (leftItems?.length) {
        gsap.fromTo(
          leftItems,
          { opacity: 0, y: 48, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.15,
          },
        )
      }

      const heroVisual = rightRef.current?.querySelector('[data-hero-visual]')
      if (heroVisual) {
        gsap.fromTo(
          heroVisual,
          { opacity: 0, scale: 0.92, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.3 },
        )
      }

      const floatCards = rightRef.current?.querySelectorAll('[data-hero-float]')
      floatCards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, delay: 0.55 + index * 0.15, ease: 'power3.out' },
        )
        gsap.to(card, {
          y: index % 2 === 0 ? -14 : -10,
          duration: 2.8 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1 + index * 0.2,
        })
      })

      const stats = section.querySelectorAll('[data-hero-stat]')
      gsap.fromTo(
        stats,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8,
        },
      )
    }, section)

    let onMove: ((event: MouseEvent) => void) | undefined
    if (spotlightRef.current && !window.matchMedia('(pointer: coarse)').matches) {
      const spotlight = spotlightRef.current
      const xTo = gsap.quickTo(spotlight, 'left', { duration: 0.6, ease: 'power3.out' })
      const yTo = gsap.quickTo(spotlight, 'top', { duration: 0.6, ease: 'power3.out' })
      onMove = (event: MouseEvent) => {
        const rect = section.getBoundingClientRect()
        if (event.clientY > rect.bottom || event.clientY < rect.top) return
        xTo(event.clientX - rect.left)
        yTo(event.clientY - rect.top)
      }
      section.addEventListener('mousemove', onMove, { passive: true })
    }

    const parallax = rightRef.current
      ? gsap.to(rightRef.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      : null

    return () => {
      if (onMove) section.removeEventListener('mousemove', onMove)
      parallax?.scrollTrigger?.kill()
      parallax?.kill()
      ctx.revert()
    }
  }, [reduced])

  return (
    <>
      <section ref={sectionRef} className="lux-hero-v2">
        <div className="lux-hero-v2__bg" aria-hidden />
        <div className="lux-hero-v2__pattern" aria-hidden />
        <div className="lux-hero-v2__glow lux-hero-v2__glow--gold" aria-hidden />
        <div className="lux-hero-v2__glow lux-hero-v2__glow--burgundy" aria-hidden />
        <div className="lux-hero-v2__particles" aria-hidden>
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="lux-hero-v2__particle" style={{ '--i': String(i) } as CSSProperties} />
          ))}
        </div>
        <div ref={spotlightRef} className="lux-hero-v2__spotlight" aria-hidden />

        <div className="lux-hero-v2__inner">
          <div className="lux-hero-v2__grid">
            <div ref={leftRef} className="lux-hero-v2__left">
              <div data-hero-reveal className="lux-hero-v2__accent" />
              <p data-hero-reveal className="lux-hero-v2__eyebrow">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                iGurukul Foundation · Roots &amp; Wings
              </p>
              <h1 data-hero-reveal className="lux-hero-v2__title">
                {foundationHero.title}
              </h1>
              <p data-hero-reveal className="lux-hero-v2__subtitle">
                {foundationHero.subtitle}
              </p>
              <p data-hero-reveal className="lux-hero-v2__lead">
                {foundationHero.mission}
              </p>
              <div data-hero-reveal className="lux-hero-v2__cta">
                <Link to="/programs">
                  <Button attention className="lux-shimmer px-8 py-3.5">
                    Explore Programs
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outlineLight" className="px-8 py-3.5">
                    Join Our Community
                  </Button>
                </Link>
              </div>
              <div data-hero-reveal className="lux-hero-v2__trust">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <span key={label} className="lux-hero-v2__trust-badge">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div ref={rightRef} className="lux-hero-v2__right">
              <div className="lux-hero-v2__visual">
                <div className="lux-hero-v2__visual-ring lux-hero-v2__visual-ring--1" aria-hidden />
                <div className="lux-hero-v2__visual-ring lux-hero-v2__visual-ring--2" aria-hidden />
                <div data-hero-visual className="lux-hero-v2__visual-frame">
                  <img
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    className="lux-hero-v2__visual-img"
                    loading="eager"
                  />
                  <div className="lux-hero-v2__visual-shade" aria-hidden />
                </div>
                <div data-hero-float className="lux-hero-v2__mini-stat">
                  <span className="lux-hero-v2__mini-stat-value">
                    <GsapCounterValue end={2000} suffix="+" immediate />
                  </span>
                  <span className="lux-hero-v2__mini-stat-label">Learning Journey Founded</span>
                </div>
                {floatingCards.map(({ icon: Icon, title, body, className }) => (
                  <div key={title} data-hero-float className={`lux-hero-v2__float-card ${className}`}>
                    <div className="lux-hero-v2__float-icon">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="lux-hero-v2__float-title">{title}</div>
                    <p className="lux-hero-v2__float-body">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div data-hero-stats className="lux-hero-v2__stats">
        <div className="lux-hero-v2__stats-inner">
          {heroStats.map((stat) => (
            <div key={stat.label} data-hero-stat className="lux-hero-v2__stat-card">
              <div className="lux-hero-v2__stat-value">
                <GsapCounterValue end={stat.value} suffix={stat.suffix} immediate />
              </div>
              <p className="lux-hero-v2__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
