import { useMemo, useState } from 'react'
import ActaPageShell from '../components/ActaPageShell'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const donateUrl = 'https://igurukulfoundation.onwajooba.com/checkout/EjAP9eod9q'
const presetAmounts = [16, 21, 50, 100, 300]

export default function Donate() {
  const [amount, setAmount] = useState<number>(presetAmounts[2] ?? 50)
  const donateHref = useMemo(() => `${donateUrl}?amount=${amount}`, [amount])

  return (
    <ActaPageShell
      eyebrow="Give"
      title="Donate"
      lead="Your contribution supports cultural learning, community programs, and preserving Odia language and heritage."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal delayMs={120}>
            <div className="acta-panel acta-panel--padded">
              <p className="acta-eyebrow">Donate</p>
              <p className="acta-body mt-3">
                Help our organization by donating today. All donations go directly to making a
                difference for our cause.
              </p>
              <div className="mt-7">
                <div className="text-sm font-semibold text-[var(--acta-brown)]">Choose an amount</div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {presetAmounts.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAmount(v)}
                      className={['igf-amount-chip', amount === v ? 'igf-amount-chip-active' : ''].join(' ')}
                    >
                      ${v}
                    </button>
                  ))}
                </div>
              </div>
              <label className="mt-6 grid gap-2">
                <span className="text-sm font-semibold text-[var(--acta-brown)]">Custom amount</span>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={amount}
                  onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
                  className="acta-input"
                />
              </label>
              <div className="mt-7">
                <Button href={donateHref} attention>
                  Donate Now
                </Button>
              </div>
              <p className="mt-4 text-sm text-[color-mix(in_srgb,var(--acta-ink)_60%,transparent)]">
                iGurukul Foundation — 501(c)(3) Non-profit · Tax ID #45-2943477
              </p>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delayMs={160}>
            <div className="acta-aside h-full">
              <p className="acta-eyebrow !text-[var(--acta-mustard)]">Transparency</p>
              <h2 className="mt-3 font-heading text-2xl font-bold">Where your donation goes</h2>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-white/90">
                <li>Language and cultural education programs</li>
                <li>Workshops, events, and community gatherings</li>
                <li>Learning materials and classroom resources</li>
              </ul>
              <p className="mt-6 text-sm text-white/85">
                For donation receipts and questions, email{' '}
                <a
                  className="font-semibold text-white underline decoration-white/25 underline-offset-4 hover:decoration-white"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </ActaPageShell>
  )
}
