import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const base = 'iGurukul Foundation | Odia Language & Culture | Bay Area, CA'
    const map: Record<string, string> = {
      '/': base,
      '/about': `About | ${base}`,
      '/programs': `Programs | ${base}`,
      '/registration': `Registration | ${base}`,
      '/news-events': `Events | ${base}`,
      '/contact': `Contact | ${base}`,
      '/donate': `Donate | ${base}`,
      '/subscribe': `Subscribe | ${base}`,
    }
    document.title = map[pathname] ?? base
  }, [pathname])

  return (
    <div className="min-h-dvh bg-igf-bg text-igf-charcoal">
      <Navbar />
      <main className="min-h-[calc(100dvh-4rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
