import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import Button from '../components/Button'
import GsapRevealBlock from '../components/GsapRevealBlock'
import LuxPageHeader from '../components/LuxPageHeader'
import LuxPageShell from '../components/LuxPageShell'

export default function NotFound() {
  return (
    <LuxPageShell>
      <LuxPageHeader eyebrow="404" title="Page Not Found" lead="The page you're looking for doesn't exist." />
      <section className="lux-section px-4 sm:px-6 lg:px-8">
        <GsapRevealBlock className="mx-auto max-w-xl">
          <div className="lux-panel lux-panel--padded text-center">
            <div className="lux-icon-wrap mx-auto h-14 w-14">
              <Sparkles className="h-7 w-7" aria-hidden />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/">
                <Button attention>Go Home</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </GsapRevealBlock>
      </section>
    </LuxPageShell>
  )
}
