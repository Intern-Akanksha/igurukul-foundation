import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100dvh-12rem)] items-center py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-64 bg-gradient-to-b from-igf-orange/15 to-transparent"
        aria-hidden
      />
      <Container className="relative w-full">
        <Reveal from="scale">
          <div className="igf-gradient-border-wrap mx-auto max-w-xl shadow-[0_28px_70px_rgba(61,43,107,0.15)]">
            <div className="igf-gradient-border-inner px-8 py-12 text-center sm:px-12 sm:py-14">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-igf-orange/20 to-igf-magenta/20 ring-1 ring-igf-orange/25">
                <Sparkles className="h-7 w-7 text-igf-orange" aria-hidden />
              </div>
              <div className="mt-6 font-heading text-3xl font-extrabold text-igf-ink">Page not found</div>
              <div className="mt-3 text-base text-igf-gray">The page you’re looking for doesn’t exist.</div>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link to="/">
                  <Button attention>Go home</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary">Contact us</Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
