import ActaPageShell from '../components/ActaPageShell'
import Reveal from '../components/Reveal'

type ProgramItem = { num: string; title: string; artist?: string; featured?: boolean }
type ProgramCategory = { icon: string; title: string; items: ProgramItem[] }

const programCategories: ProgramCategory[] = [
  {
    icon: '🪔',
    title: 'Opening & Invocation',
    items: [
      { num: '01', title: 'Emcee', artist: 'Archana Panda' },
      { num: '02', title: 'Lighting of the Lamp' },
      { num: '03', title: 'American National Anthem' },
      { num: '04', title: 'Indian National Anthem' },
      { num: '05', title: 'Chanting, Guvani & OM Shanti Om / I Am Peaceful Soul', artist: 'Kuku Das' },
    ],
  },
  {
    icon: '🎼',
    title: 'Classical & Cultural Excellence',
    items: [
      { num: '06', title: 'KRIPA — Kala Roopa Institute of Performing Arts', artist: 'Guru Kalamandalam Supriya Sudhakar', featured: true },
      { num: '10', title: 'Laya Dhwani Academy of Performing Arts', artist: 'Guru Snigdha Venkatramani', featured: true },
      { num: '12', title: 'Nritya Sangeetham Academy — Group Song', artist: 'Aryashree Mohapatra', featured: true },
      { num: '16', title: 'In Sync Kathak', artist: 'Guru Anupama Srivastava', featured: true },
      { num: '17', title: 'Manipuri — Lasya (Movement in Motion)', artist: 'Guru Sanjib Bhattacharya', featured: true },
      { num: '18', title: 'Odissi — Megh Pallavi (Lasy Kreation)', artist: 'Guru Kaveri Mishra', featured: true },
      { num: '20', title: 'Anand Bhairav Pallavi — Jyoti Kala Mandir', artist: 'Guru Jyoti Routi', featured: true },
      { num: '26', title: 'California Nupur Dance Academy', artist: 'Guru Dipanwita Sengupta', featured: true },
    ],
  },
  {
    icon: '🌍',
    title: 'Fusion & Global Expressions',
    items: [
      { num: '07', title: 'Koko de la Isla Flamenco', featured: true },
      { num: '08', title: 'Yoga & Breathing Session', artist: 'Manoj Joshi' },
      { num: '11', title: 'Sun Flower Magic', artist: 'Archana Panda' },
    ],
  },
  {
    icon: '🎭',
    title: 'Theatre & Storytelling',
    items: [
      { num: '13', title: 'Kanchi Abhijan — Odia Drama', artist: 'Directed by Kuku Das', featured: true },
      { num: '25', title: 'Ashakti (Addiction) — Odia Drama', artist: 'BANG — Bay Area Natua Gosthi', featured: true },
    ],
  },
  {
    icon: '🎤',
    title: 'Melody & Rhythm',
    items: [
      { num: '09', title: 'Nritya Sangeetham Academy — Group Song', artist: 'Aryashree Mohapatra', featured: true },
      { num: '14', title: 'InSync Kathak Bandish', artist: 'Guru Anupama Srivastava' },
      { num: '19', title: 'Odia Geeta — Young Voices', artist: 'Various' },
    ],
  },
  {
    icon: '🌀',
    title: 'Grand Finale',
    items: [{ num: '27', title: 'The Chakras — Odissi Dance Production', artist: 'iGurukul Odissi', featured: true }],
  },
  {
    icon: '🔥',
    title: 'Tandav & Power Performance',
    items: [{ num: '22', title: 'Anga Shudhi Tandav — Movement in Motion', artist: 'Guru Sanjib Bhattacharya', featured: true }],
  },
]

export default function Programs() {
  return (
    <ActaPageShell
      eyebrow="The Journey"
      title="Program Lineup"
      lead="An immersive cultural journey from invocation to grand finale."
    >
      <div className="grid gap-8">
        {programCategories.map((cat, idx) => (
          <Reveal key={cat.title} delayMs={90 * idx} from="scale">
            <div className="acta-panel acta-panel--padded">
              <div className="flex flex-wrap items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--acta-terracotta)_18%,white)] text-xl ring-1 ring-[color-mix(in_srgb,var(--acta-terracotta)_25%,transparent)]">
                  <span>{cat.icon}</span>
                </div>
                <h2 className="acta-subsection-title">{cat.title}</h2>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((it) => (
                  <div
                    key={`${cat.title}-${it.num}`}
                    className="rounded-xl border border-black/5 bg-white/80 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--acta-terracotta)]">
                      {it.num}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-[var(--acta-ink)]">{it.title}</div>
                    {it.artist ? <div className="mt-1 text-sm text-[color-mix(in_srgb,var(--acta-ink)_65%,transparent)]">{it.artist}</div> : null}
                    {it.featured ? (
                      <div className="mt-3 inline-flex rounded-full bg-[color-mix(in_srgb,var(--acta-mustard)_35%,white)] px-3 py-1 text-xs font-semibold text-[var(--acta-brown)]">
                        Featured
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </ActaPageShell>
  )
}
