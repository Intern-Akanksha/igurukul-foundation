import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTORS = [
  'main h1',
  'main h2',
  'main .igf-cta-editorial-panel',
  'main .igf-eyebrow',
  'main .igf-page-eyebrow',
  'main .igf-editorial-card',
  'main .igf-glass-card',
  'main .igf-stat-editorial',
  'main .igf-editorial-media',
  'main .igf-overlap-stack',
  'main .igf-cta-editorial-panel',
  'main .igf-gradient-border-wrap',
  'main article',
  'main form',
  'main .igf-cta-editorial-band > div > div',
].join(',')

const SCALE_SELECTORS = 'main .igf-stat-editorial, main .igf-editorial-card, main .igf-glass-card, main article'

/**
 * Observes common content blocks and applies CSS reveal classes on scroll.
 * Visual only — does not change content or structure.
 */
export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const seen = new WeakSet<Element>()
    let stagger = 0

    const mark = (el: Element, variant: 'default' | 'scale' | 'fade' = 'default') => {
      if (seen.has(el)) return
      if (el.closest('[data-no-reveal]')) return
      seen.add(el)
      el.classList.add('igf-auto-reveal')
      if (variant === 'scale') el.classList.add('igf-auto-reveal-scale')
      if (variant === 'fade') el.classList.add('igf-auto-reveal-fade')
      const delay = Math.min(stagger * 55, 400)
      ;(el as HTMLElement).style.transitionDelay = `${delay}ms`
      stagger += 1
    }

    const setup = () => {
      stagger = 0
      document.querySelectorAll(SELECTORS).forEach((el) => {
        const useScale = el.matches(SCALE_SELECTORS)
        mark(el, useScale ? 'scale' : 'default')
      })

      document.querySelectorAll('main .igf-editorial-media, main .igf-overlap-main').forEach((el) => {
        el.classList.add('igf-motion-img-wrap')
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('igf-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '-5% 0px -5% 0px', threshold: 0.08 },
    )

    const observeAll = () => {
      document.querySelectorAll('.igf-auto-reveal').forEach((el) => {
        if (!el.classList.contains('igf-revealed')) observer.observe(el)
      })
    }

    setup()
    observeAll()

    const mo = new MutationObserver(() => {
      setup()
      observeAll()
    })
    mo.observe(document.querySelector('main') ?? document.body, {
      childList: true,
      subtree: true,
    })

    const t = window.setTimeout(observeAll, 120)

    return () => {
      window.clearTimeout(t)
      observer.disconnect()
      mo.disconnect()
      document.querySelectorAll('.igf-auto-reveal').forEach((el) => {
        el.classList.remove('igf-auto-reveal', 'igf-revealed', 'igf-auto-reveal-scale', 'igf-auto-reveal-fade')
        ;(el as HTMLElement).style.transitionDelay = ''
      })
    }
  }, [pathname])

  return null
}
