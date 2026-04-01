import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
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
