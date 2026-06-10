import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { foundationHero, joinUs } from '../data/foundationContent'
import { cn } from '../utils/cn'
import Button from './Button'

type CurrentEventSpotlightProps = {
  label?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
  className?: string
}

export default function CurrentEventSpotlight({
  label = 'iGurukul Foundation',
  primaryLabel,
  secondaryTo,
  secondaryLabel,
  className,
}: CurrentEventSpotlightProps) {
  const prefersReducedMotion = useReducedMotion()
  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 90,
      scale: prefersReducedMotion ? 1 : 0.92,
      filter: prefersReducedMotion ? 'none' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.78,
        ease: smoothEase,
        staggerChildren: prefersReducedMotion ? 0 : 0.11,
        delayChildren: prefersReducedMotion ? 0 : 0.06,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 34,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.62,
        ease: smoothEase,
      },
    },
  }

  const popupVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 52,
      scale: prefersReducedMotion ? 1 : 0.88,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: prefersReducedMotion ? 'tween' : 'spring',
        duration: prefersReducedMotion ? 0.01 : 0.7,
        delay: prefersReducedMotion ? 0 : 0.24,
        bounce: prefersReducedMotion ? 0 : 0.34,
        stiffness: 210,
        damping: 18,
      },
    },
  }

  return (
    <div className={cn('mx-auto max-w-5xl', className)}>
      <motion.div
        className="lux-panel relative overflow-hidden shadow-[var(--lux-shadow-card)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        whileHover={
          prefersReducedMotion ? undefined : { y: -4, boxShadow: '0 34px 110px rgba(212, 175, 55, 0.18)' }
        }
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="lux-glow lux-glow--gold pointer-events-none absolute -left-20 top-8 h-48 w-48" aria-hidden />
        <div className="lux-glow lux-glow--burgundy pointer-events-none absolute -right-20 bottom-0 h-56 w-56" aria-hidden />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:p-10">
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="absolute inset-3 rounded-[1.75rem] bg-gradient-to-br from-[color-mix(in_srgb,var(--lux-gold)_25%,transparent)] via-[color-mix(in_srgb,var(--lux-burgundy)_12%,transparent)] to-[color-mix(in_srgb,var(--lux-walnut)_20%,transparent)] blur-2xl"
              
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: [1, 1.03, 1], opacity: [0.72, 0.92, 0.72] }
              }
              transition={
                prefersReducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
              }
            />
            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_55px_rgba(31,41,55,0.12)] backdrop-blur"
              whileHover={prefersReducedMotion ? undefined : { rotate: -0.4, scale: 1.015 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="flex aspect-[4/5] flex-col justify-between rounded-[1.15rem] bg-[linear-gradient(160deg,var(--lux-burgundy-deep)_0%,var(--lux-burgundy)_55%,var(--lux-black)_100%)] p-6 text-[var(--lux-ivory)]">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Learning & Human Development
                </div>
                <div>
                  <div className="font-heading text-3xl leading-tight sm:text-4xl">
                    {foundationHero.title}
                  </div>
                  <div className="mt-4 font-display text-2xl italic leading-snug text-white/90">
                    {foundationHero.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/92 px-4 py-3 shadow-xl backdrop-blur sm:left-auto sm:right-5 sm:w-[220px]"
              variants={popupVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 lux-text-gold" aria-hidden />
                <div>
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] lux-text-gold/80">
                    Featured Quote
                  </div>
                  <div className="mt-1 text-sm font-semibold leading-6 lux-text-ink">
                    {foundationHero.highlights[3]}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative lg:py-2">
            <motion.div
              className="lux-badge-pill text-xs font-bold"
              variants={itemVariants}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -2, 0], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 10px 24px rgba(212, 175, 55, 0.14)', '0 0 0 rgba(0,0,0,0)'] }
              }
              transition={prefersReducedMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {label}
            </motion.div>

            <motion.h2
              className="mt-5 font-heading text-3xl font-extrabold tracking-tight lux-text-ink sm:text-4xl"
              variants={itemVariants}
            >
              {foundationHero.title}
            </motion.h2>

            <motion.p
              className="mt-4 max-w-2xl text-base leading-relaxed lux-text-walnut sm:text-lg"
              variants={itemVariants}
            >
              {foundationHero.quote}
            </motion.p>

            <motion.div className="mt-6 grid gap-3 sm:grid-cols-2" variants={itemVariants}>
              <motion.div
                className="lux-card lux-card--glass p-4"
                variants={popupVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.02 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] lux-text-gold">
                      Website
                    </div>
                    <div className="mt-1 text-sm font-semibold lux-text-ink">{joinUs.website}</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="lux-card lux-card--glass p-4"
                variants={popupVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.02 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] lux-text-gold">
                      Email
                    </div>
                    <div className="mt-1 text-sm font-semibold lux-text-ink">{joinUs.email}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap gap-3" variants={itemVariants}>
              <motion.span
                className="inline-flex"
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                <Button href={joinUs.website} attention>
                  {primaryLabel ?? 'Visit Website'}
                </Button>
              </motion.span>
              {secondaryTo && secondaryLabel ? (
                <Link to={secondaryTo}>
                  <motion.span
                    className="inline-flex"
                    whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  >
                    <Button variant="secondary" className="inline-flex items-center gap-2">
                      {secondaryLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </motion.span>
                </Link>
              ) : null}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

