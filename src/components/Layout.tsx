import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import EventBackdrop from './EventBackdrop'
import Footer from './Footer'
import MouseGlow from './MouseGlow'
import Navbar from './Navbar'
import PageTransition from './PageTransition'
import ScrollReveal from './ScrollReveal'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const base = 'iGurukul Foundation | Learning & Human Development'
    const map: Record<string, string> = {
      '/': base,
      '/about': `About | ${base}`,
      '/team': `Team | ${base}`,
      '/programs': `Programs | ${base}`,
      '/gallery': `Gallery | ${base}`,
      '/registration': `Join Us | ${base}`,
      '/partner-with-us': `Join Us | ${base}`,
      '/events': `Events | ${base}`,
      '/partners': `Partners | ${base}`,
      '/sponsors': `Partners | ${base}`,
      '/news-events': `Events | ${base}`,
      '/event-2026': `Event 2026 | ${base}`,
      '/contact': `Contact | ${base}`,
      '/donate': `Join Us | ${base}`,
      '/subscribe': `Join Us | ${base}`,
    }
    document.title = map[pathname] ?? base
  }, [pathname])

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-[var(--igf-bg)] text-[var(--igf-ink)]">
      <EventBackdrop />
      <MouseGlow />
      <ScrollReveal />
      <Navbar />
      <main className="relative z-10 min-h-[calc(100dvh-4rem)]">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
