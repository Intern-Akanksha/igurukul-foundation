import { useMemo, useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const presetAmounts = [25, 50, 100, 250]

export default function Donate() {
  const [amount, setAmount] = useState<number>(presetAmounts[1] ?? 50)

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${site.shortName} Donation`)
    const body = encodeURIComponent(
      `Hello ${site.shortName} Team,%0D%0A%0D%0AI would like to donate $${amount}. Please share the next steps / donation link.%0D%0A%0D%0AThank you.`,
    )
    return `mailto:${site.email}?subject=${subject}&body=${body}`
  }, [amount])

  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
            Donate
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
            Your contribution supports cultural learning, community programs,
            and preserving Oriya language and heritage.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delayMs={120}>
              <div className="igf-surface rounded-3xl border border-black/5 p-9 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-igf-orange">
                  Choose an amount
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {presetAmounts.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAmount(v)}
                      className={[
                        'h-11 rounded-2xl text-sm font-semibold transition ring-1',
                        amount === v
                          ? 'bg-igf-charcoal text-white ring-black/10'
                          : 'bg-white/70 text-igf-ink ring-black/10 hover:bg-white',
                      ].join(' ')}
                    >
                      ${v}
                    </button>
                  ))}
                </div>

                <label className="mt-6 grid gap-2">
                  <span className="text-sm font-semibold text-igf-ink">
                    Custom amount
                  </span>
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={amount}
                    onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                    className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-orange/30 focus:ring-2"
                  />
                </label>

                <div className="mt-7">
                  <a href={mailtoHref}>
                    <Button attention>Donate Now</Button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={160}>
              <div className="rounded-3xl bg-igf-charcoal p-9 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/90">
                  Transparency
                </div>
                <div className="mt-3 font-heading text-2xl font-extrabold">
                  Where your donation goes
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-white/90">
                  <li>Language and cultural education programs</li>
                  <li>Workshops, events, and community gatherings</li>
                  <li>Learning materials and classroom resources</li>
                </ul>
                <div className="mt-6 text-sm text-white/85">
                  For donation receipts and questions, email{' '}
                  <a
                    className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:decoration-white"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                  .
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  )
}
