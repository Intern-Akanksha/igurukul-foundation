import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import EventBackdrop from './EventBackdrop'
import Footer from './Footer'
import Navbar from './Navbar'
import PageTransition from './PageTransition'
import ScrollReveal from './ScrollReveal'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const base = 'iGurukul Foundation | Odia Language & Culture | Bay Area, CA'
    const map: Record<string, string> = {
      '/': base,
      '/about': `About | ${base}`,
      '/team': `Team | ${base}`,
      '/programs': `Programs | ${base}`,
      '/gallery': `Gallery | ${base}`,
      '/registration': `Registration | ${base}`,
      '/partner-with-us': `Partner With Us | ${base}`,
      '/events': `Past Events | ${base}`,
      '/partners': `Partners | ${base}`,
      '/sponsors': `Partners | ${base}`,
      '/news-events': `Past Events | ${base}`,
      '/event-2026': `Upcoming Event 2026 | ${base}`,
      '/contact': `Contact | ${base}`,
      '/donate': `Donate | ${base}`,
      '/subscribe': `Subscribe | ${base}`,
    }
    document.title = map[pathname] ?? base
  }, [pathname])

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-[var(--acta-cream)] text-[var(--acta-ink)]">
      <EventBackdrop />
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
