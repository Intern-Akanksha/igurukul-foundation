import { useMemo, useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const donateUrl = 'https://igurukulfoundation.onwajooba.com/checkout/EjAP9eod9q'
const presetAmounts = [16, 21, 50, 100, 300]

export default function Donate() {
  const [amount, setAmount] = useState<number>(presetAmounts[2] ?? 50)

  const donateHref = useMemo(() => `${donateUrl}?amount=${amount}`, [amount])

  return (
    <div className="igf-page-wrap relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-igf-indigo/10 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-igf-indigo">Give</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
            Donate
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-igf-gray sm:text-lg">
            Your contribution supports cultural learning, community programs,
            and preserving Odia language and heritage.
          </p>
          <div className="mt-8 max-w-3xl rounded-2xl border border-igf-indigo/15 bg-gradient-to-r from-igf-indigo/8 to-igf-magenta/8 p-6 backdrop-blur-sm">
            <div className="font-heading text-xl font-extrabold text-igf-ink sm:text-2xl">
              Support Language and Culture Advocacy
            </div>
            <div className="mt-2 text-base leading-relaxed text-igf-gray">
              Help our organization by donating today! All donations go directly to making a
              difference for our cause.
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delayMs={120}>
              <div className="igf-gradient-border-wrap shadow-[0_24px_60px_rgba(61,43,107,0.1)]">
                <div className="igf-gradient-border-inner p-9">
                <div className="text-xs font-semibold uppercase tracking-wide text-igf-indigo">
                  Donate
                </div>
                <div className="mt-4 text-base text-igf-gray">
                  Your contribution supports cultural learning, community programs, and preserving
                  Odia language and heritage.
                </div>
                <div className="mt-7">
                  <div className="text-sm font-semibold text-igf-ink">Choose an amount</div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                    {presetAmounts.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setAmount(v)}
                        className={[
                          'igf-amount-chip',
                          amount === v ? 'igf-amount-chip-active' : '',
                        ].join(' ')}
                      >
                        ${v}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="mt-6 grid gap-2">
                  <span className="text-sm font-semibold text-igf-ink">Custom amount</span>
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={amount}
                    onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                    className="h-11 rounded-2xl border border-black/10 bg-white/70 px-4 text-sm text-igf-ink outline-none ring-igf-indigo/30 focus:ring-2"
                  />
                </label>
                <div className="mt-7">
                  <Button href={donateHref} attention>
                    Donate Now
                  </Button>
                </div>
                <div className="mt-4 text-sm text-igf-gray">
                  iGurukul Foundation - 501 (c)(3) Non-profit Tx ID #45-2943477
                </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delayMs={160}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-igf-indigo via-igf-charcoal to-black p-9 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/15">
                <div
                  className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-cyan-500/20 blur-[72px]"
                  aria-hidden
                />
                <div className="relative text-xs font-semibold uppercase tracking-wider text-amber-200/90">
                  Transparency
                </div>
                <div className="relative mt-3 font-heading text-2xl font-extrabold">
                  Where your donation goes
                </div>
                <ul className="relative mt-5 list-disc space-y-2 pl-5 text-sm text-white/90">
                  <li>Language and cultural education programs</li>
                  <li>Workshops, events, and community gatherings</li>
                  <li>Learning materials and classroom resources</li>
                </ul>
                <div className="relative mt-6 text-sm text-white/85">
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
