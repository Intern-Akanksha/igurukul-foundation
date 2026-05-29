import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Sparkles, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { currentEvent } from '../data/site'
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
  label = 'Current Event',
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
        className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,rgba(255,252,248,0.98),rgba(246,237,226,0.98))] shadow-[0_28px_90px_rgba(75,45,25,0.12)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        whileHover={prefersReducedMotion ? undefined : { y: -4, boxShadow: '0 34px 110px rgba(75,45,25,0.16)' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div
          className="pointer-events-none absolute -left-20 top-8 h-48 w-48 rounded-full bg-igf-orange/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-igf-magenta/10 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:p-10">
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="absolute inset-3 rounded-[1.75rem] bg-gradient-to-br from-igf-orange/25 via-igf-magenta/10 to-igf-indigo/20 blur-2xl"
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
              className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-[0_18px_55px_rgba(40,20,10,0.16)] backdrop-blur"
              whileHover={prefersReducedMotion ? undefined : { rotate: -0.4, scale: 1.015 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <img
                src={currentEvent.imageUrl}
                alt={currentEvent.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-[1.15rem] object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/92 px-4 py-3 shadow-xl backdrop-blur sm:left-auto sm:right-5 sm:w-[220px]"
              variants={popupVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <Ticket className="mt-0.5 h-5 w-5 shrink-0 text-igf-orange" aria-hidden />
                <div>
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-igf-orange/80">
                    Registration Fee
                  </div>
                  <div className="mt-1 text-xl font-bold text-igf-ink">{currentEvent.fee}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative lg:py-2">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-igf-orange ring-1 ring-igf-orange/15 backdrop-blur"
              variants={itemVariants}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -2, 0], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 10px 24px rgba(232,130,26,0.12)', '0 0 0 rgba(0,0,0,0)'] }
              }
              transition={prefersReducedMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {label}
            </motion.div>

            <motion.h2
              className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-igf-ink sm:text-4xl"
              variants={itemVariants}
            >
              {currentEvent.title}
            </motion.h2>

            <motion.p
              className="mt-4 max-w-2xl text-base leading-relaxed text-igf-gray sm:text-lg"
              variants={itemVariants}
            >
              {currentEvent.description}
            </motion.p>

            <motion.div className="mt-6 grid gap-3 sm:grid-cols-2" variants={itemVariants}>
              <motion.div
                className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur"
                variants={popupVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.02 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-igf-orange" aria-hidden />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-igf-orange/80">
                      Date & Time
                    </div>
                    <div className="mt-1 text-sm font-semibold text-igf-ink">{currentEvent.date}</div>
                    <div className="text-sm font-semibold text-igf-ink">{currentEvent.time}</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur"
                variants={popupVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.02 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-igf-orange" aria-hidden />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-igf-orange/80">
                      Location
                    </div>
                    <div className="mt-1 text-sm font-semibold text-igf-ink">{currentEvent.locationName}</div>
                    {currentEvent.locationAddress.map((line) => (
                      <div key={line} className="text-sm text-igf-gray">
                        {line}
                      </div>
                    ))}
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
                <Button href={currentEvent.registerUrl} attention>
                  {primaryLabel ?? `Register Now - ${currentEvent.fee}`}
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
