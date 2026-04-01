import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'

export default function NotFound() {
  return (
    <div className="py-20">
      <Container className="text-center">
        <div className="igf-surface mx-auto max-w-xl rounded-3xl border border-black/5 p-10 shadow-[0_18px_46px_rgba(0,0,0,0.09)]">
          <div className="font-heading text-3xl font-extrabold text-igf-ink">
            Page not found
          </div>
          <div className="mt-3 text-base text-igf-gray">
            The page you’re looking for doesn’t exist.
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/">
              <Button>Go home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">Contact us</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
