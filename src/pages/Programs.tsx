import Container from '../components/Container'
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
    <div className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-igf-magenta/10 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <div className="text-center">
            <p className="igf-page-eyebrow justify-center">
              <span className="tracking-[0.22em]">The Journey</span>
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
              Program Lineup
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-igf-gray sm:text-lg">
              An immersive cultural journey from invocation to grand finale.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8">
          {programCategories.map((cat, idx) => (
            <Reveal key={cat.title} delayMs={90 * idx} from="scale">
              <div className="igf-glass-card p-8 sm:p-9">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-igf-orange/25 to-igf-magenta/20 text-xl ring-1 ring-igf-orange/20">
                    <span>{cat.icon}</span>
                  </div>
                  <div className="font-heading text-xl font-extrabold text-igf-ink sm:text-2xl">{cat.title}</div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((it) => (
                    <div
                      key={`${cat.title}-${it.num}`}
                      className="rounded-2xl border border-black/5 bg-white/60 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-igf-orange/20 hover:bg-white/90 hover:shadow-[0_16px_40px_rgba(61,43,107,0.1)]"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                        {it.num}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-igf-ink">{it.title}</div>
                      {it.artist ? <div className="mt-1 text-sm text-igf-gray">{it.artist}</div> : null}
                      {it.featured ? (
                        <div className="mt-3 inline-flex rounded-full bg-gradient-to-r from-igf-orange/15 to-igf-magenta/10 px-3 py-1 text-xs font-semibold text-igf-orange ring-1 ring-igf-orange/25">
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
      </Container>
    </div>
  )
}
