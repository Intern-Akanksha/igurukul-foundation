import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import ActaPageShell from '../components/ActaPageShell'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <ActaPageShell eyebrow="404" title="Page not found" lead="The page you're looking for doesn't exist.">
      <Reveal from="scale">
        <div className="acta-panel acta-panel--padded mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--acta-mustard)_40%,white)] ring-1 ring-[color-mix(in_srgb,var(--acta-terracotta)_20%,transparent)]">
            <Sparkles className="h-7 w-7 text-[var(--acta-terracotta)]" aria-hidden />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/">
              <Button attention>Go home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">Contact us</Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </ActaPageShell>
  )
}
