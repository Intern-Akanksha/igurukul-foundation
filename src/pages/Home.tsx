import Button from '../components/Button'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import { featuredEvent, site } from '../data/site'
import { Calendar, Car, Clock, MapPin, Ticket } from 'lucide-react'

const heroImage = 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg'
const heroBgVideoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/iGF2026Promo.mp4'
const chakrasBgImage = 'https://wajweb.b-cdn.net/igurukul-foundation/annual26%20flyer.png'
const odissiHighlightPoster = 'https://wajweb.b-cdn.net/igurukul-foundation/Chakras%20background.jpeg'
const odissiHighlightVideoUrl = 'https://wajweb.b-cdn.net/igurukul-foundation/Odissi%20Highlights%202025.mp4'
const sponsorshipBgImage = 'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0045.jpeg'

const partnerOrganizations = [
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/KRIPA%20Logo.jpeg',
    alt: 'KRIPA — Kala Roopa Institute of Performing Arts',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/LogoInSyncKathak.jpg',
    alt: 'In Sync Kathak',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/Movements%20in%20Motion_logo%20final-01.png',
    alt: 'Movement in Motion',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/JKM-color-logo.jpg',
    alt: 'Jyoti Kala Mandir',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/Image%20(4).jpg',
    alt: 'Urban Momo',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/CNDA_LOGO.jpg',
    alt: 'California Nupur Dance Academy',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/igachieverlogo.jpeg',
    alt: 'iG Achiever',
  },
  {
    src: 'https://wajweb.b-cdn.net/igurukul-foundation/iGO-Logo-Black.png',
    alt: 'iGurukul Odissi',
  },
]

const galleryImages: string[] = [
  
]

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
      {
        num: '06',
        title: 'KRIPA — Kala Roopa Institute of Performing Arts',
        artist: 'Guru Kalamandalam Supriya Sudhakar',
        featured: true,
      },
      {
        num: '10',
        title: 'Laya Dhwani Academy of Performing Arts',
        artist: 'Guru Snigdha Venkatramani',
        featured: true,
      },
      {
        num: '12',
        title: 'Nritya Sangeetham Academy — Group Song',
        artist: 'Aryashree Mohapatra',
        featured: true,
      },
      { num: '16', title: 'In Sync Kathak', artist: 'Guru Anupama Srivastava', featured: true },
      {
        num: '17',
        title: 'Manipuri — Lasya (Movement in Motion)',
        artist: 'Guru Sanjib Bhattacharya',
        featured: true,
      },
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
    icon: '🎬',
    title: 'Theatrical & Drama Presentations',
    items: [
      { num: '09', title: 'Musical Drama — Hanuman', artist: 'Kuku Das', featured: true },
      { num: '15', title: 'Hindi Drama — AI', artist: 'Pranab Panda', featured: true },
      { num: '19', title: 'Odia Drama — Kanchi Abhijan', artist: 'Kuku Das', featured: true },
      { num: '23', title: 'Odia Drama — Ashakti (Addiction)', artist: 'BANG / Dilip Praharaj', featured: true },
    ],
  },
  {
    icon: '💃',
    title: 'Youth & Bollywood Energy',
    items: [
      { num: '13', title: 'Bollywood — Junior', artist: 'Kuku Das' },
      { num: '14', title: 'Bollywood — Senior', artist: 'Kuku Das' },
    ],
  },
  {
    icon: '🌟',
    title: 'Special Segments',
    items: [
      { num: '21', title: 'iGurukul Foundation / Dignitaries' },
      { num: '24', title: 'Awake and Arise' },
      { num: '25', title: 'Fashion Show', artist: 'Arundhati Dash Mishra', featured: true },
    ],
  },
  {
    icon: '🔥',
    title: 'Tandav & Power Performance',
    items: [
      { num: '22', title: 'Anga Shudhi Tandav — Movement in Motion', artist: 'Guru Sanjib Bhattacharya', featured: true },
    ],
  },
]

export default function Home() {
  return (
    <div>
      <section id="events" className="relative overflow-hidden bg-igf-charcoal py-24 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroBgVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImage}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-igf-charcoal/65 via-igf-charcoal/75 to-igf-charcoal/90" />
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="igf-hero-rays absolute -inset-24 opacity-100" />
        </div>

        <Container className="relative pb-20 pt-12 sm:pb-24 sm:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-igf-orange" />
                26 Glorious Years
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.02]">
                <span className="block">iGurukul</span>
                <span className="block text-igf-orange">Cultural Extravaganza</span>
                <span className="block">2026</span>
              </h1>
            </Reveal>
            <Reveal delayMs={220}>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                A vibrant celebration bringing together 250+ artists from 15+ Bay Area dance and music institutions.
              </p>
            </Reveal>
            <Reveal delayMs={300}>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <span className="text-base">📅</span> {featuredEvent.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <span className="text-base">⏰</span> {featuredEvent.time}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                  <span className="text-base">📍</span> {featuredEvent.venueName}
                </span>
              </div>
            </Reveal>
            <Reveal delayMs={380}>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={featuredEvent.registerUrl} attention className="px-9 py-4 text-base sm:text-lg">
                  Get tickets - $15
                </Button>
                <Button
                  className="bg-white/10 px-9 py-4 text-base text-white ring-1 ring-white/15 hover:bg-white/15 sm:text-lg"
                  variant="secondary"
                  href="#program"
                >
                  View program
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-igf-bg">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal from="left">
              <div className="group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={featuredEvent.flyerImageUrl}
                  alt={featuredEvent.flyerImageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-igf-ink">
                  iGurukul <span className="text-igf-orange">Cultural Extravaganza</span>{' '}
                  <span className="text-igf-orange">2026</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-igf-gray">
                  For over a quarter century, iGurukul Foundation has been a beacon for Indian classical arts, cultural preservation, and community connection in the Bay Area.
                </p>

                <div className="mt-8 grid gap-6">
                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
                    <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" />
                    <div>
                      <div className="text-sm font-semibold text-igf-ink">Venue</div>
                      <div className="mt-1 text-sm text-igf-gray">College of San Mateo Theater</div>
                      <div className="text-sm text-igf-gray">1700 W Hillsdale Blvd, San Mateo, CA 94402</div>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
                    <Calendar className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" />
                    <div>
                      <div className="text-sm font-semibold text-igf-ink">Date &amp; Time</div>
                      <div className="mt-1 text-sm text-igf-gray">Sunday, April 12, 2026</div>
                      <div className="mt-1 flex items-center gap-2 text-sm text-igf-gray">
                        <Clock className="h-4 w-4 text-igf-orange" />
                        <span>10:00 AM – 7:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-md transition-shadow hover:shadow-lg">
                    <Car className="mt-0.5 h-6 w-6 shrink-0 text-igf-orange" />
                    <div>
                      <div className="text-sm font-semibold text-igf-ink">Parking Info</div>
                      <div className="mt-1 text-sm text-igf-gray">General Parking: Lot A (FREE)</div>
                      <div className="text-sm text-igf-gray">Loading/Unloading (Performers): Lot U (Temporary)</div>
                      <div className="text-sm text-igf-gray">
                        Please allow extra minutes to park and walk to the theater. Enter from W Hillsdale Blvd and follow signs toward the Theater.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button href={featuredEvent.registerUrl} attention className="w-full justify-center py-3 text-base sm:w-auto">
                    Get tickets - $15
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                Our Legacy
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                Celebrating 26 Years of Heritage &amp; Culture
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
                For over a quarter century, iGurukul Foundation has been a beacon for Indian classical arts, cultural preservation, and community connection in the Bay Area. This year's Cultural Extravaganza promises to be our most spectacular yet — welcoming 500+ attendees for a joyful day of music, movement, food, and cultural connection.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '26', label: 'Years of Heritage' },
              { value: '250+', label: 'Performing Artists' },
              { value: '15+', label: 'Dance & Music Academies' },
              { value: '27', label: 'Live Performances' },
            ].map((s, idx) => (
              <Reveal key={s.label} delayMs={80 * idx}>
                <div className="igf-surface rounded-3xl border border-black/5 p-7 text-center shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="font-heading text-4xl font-extrabold text-igf-orange">{s.value}</div>
                  <div className="mt-2 text-sm font-semibold text-igf-gray">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="program" className="py-20">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                The Journey
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                Program Lineup
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-igf-gray">
                An immersive cultural journey from invocation to grand finale.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6">
            {programCategories.map((cat, idx) => (
              <Reveal key={cat.title} delayMs={90 * idx}>
                <div className="igf-surface rounded-3xl border border-black/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/60 ring-1 ring-black/5">
                      <span className="text-lg">{cat.icon}</span>
                    </div>
                    <div className="font-heading text-xl font-extrabold text-igf-ink">{cat.title}</div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((it) => (
                      <div key={`${cat.title}-${it.num}`} className="rounded-2xl bg-white/55 p-5 ring-1 ring-black/5">
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                          {it.num}
                        </div>
                        <div className="mt-2 text-sm font-semibold text-igf-ink">{it.title}</div>
                        {it.artist ? <div className="mt-1 text-sm text-igf-gray">{it.artist}</div> : null}
                        {it.featured ? (
                          <div className="mt-3 inline-flex rounded-full bg-igf-orange/10 px-3 py-1 text-xs font-semibold text-igf-orange ring-1 ring-igf-orange/20">
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

          <Reveal delayMs={200}>
            <div className="mt-12 text-center">
              <Button href={featuredEvent.registerUrl} attention>
                Buy ticket
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="featured" className="py-20">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                Spotlight
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                Featured Performances
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-igf-gray">
                Highlights from our most anticipated acts
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'In Sync Kathak',
                desc:
                  "Students of Smt. Anupama Srivastava present a beautiful journey through rhythm, expression, and India's timeless heritage.",
              },
              {
                title: 'Movement in Motion',
                desc:
                  'President’s Award‑winning Guru Sanjib Bhattacharya and his students present captivating Manipuri and contemporary performances.',
              },
              {
                title: 'Kanchi Abhijan — Odia Drama',
                desc:
                  'A powerful Odia drama bringing alive a story of valor, devotion, and divine grace. Directed by Kuku Das.',
              },
              {
                title: 'Nritya Sangeetham Academy',
                desc:
                  'Young stars take the stage with soulful Odia melodies, guided by Aryashree Mohapatra and composed by Guru Pradipta Kishore Swain.',
              },
              {
                title: 'Ashakti (Addiction) — Odia Drama',
                desc:
                  'Bay Area Natua Gosthi (BANG) presents a thought‑provoking production that resonates deeply with today’s world.',
              },
              {
                title: 'Event Overview',
                desc:
                  '250+ artists, 15+ academies, 500+ attendees. A joyful day of music, movement, food, and cultural connection.',
              },
            ].map((card, idx) => (
              <Reveal key={card.title} delayMs={70 * idx}>
                <div className="overflow-hidden rounded-3xl border border-black/5 bg-white/50 shadow-[0_16px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <img
                    src={galleryImages.length ? galleryImages[idx % galleryImages.length] : ''}
                    alt={card.title}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-5">
                    <div className="text-base font-semibold text-igf-ink">{card.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-igf-gray">{card.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="finale" className="bg-igf-bg py-24">
        <Container>
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-br from-igf-orange/20 via-transparent to-transparent blur-2xl" />
                <div className="igf-surface relative rounded-3xl border border-black/5 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(0,0,0,0.12)] md:p-10">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                    Grand Finale
                  </div>

                  <div className="group mt-5 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
                    <img
                      src={chakrasBgImage}
                      alt="The Chakras poster"
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <h3 className="mt-7 font-heading text-3xl font-extrabold text-igf-ink">
                    The Chakras
                  </h3>
                  <div className="mt-2 text-base text-igf-gray">
                    A Journey Through Human Consciousness
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-igf-gray">
                    The Odissi dance production — the crowning jewel of the evening. Experience the ancient wisdom of the seven chakras brought to life through the grace and devotion of classical Odissi.
                  </p>

                  <div className="my-6 border-t border-black/10" />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 ring-1 ring-black/5">
                      <Clock className="h-5 w-5 text-igf-orange" />
                      <div className="text-sm font-semibold text-igf-ink">5:00 PM – 7:00 PM</div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 ring-1 ring-black/5">
                      <Ticket className="h-5 w-5 text-igf-orange" />
                      <div className="text-sm font-semibold text-igf-ink">$15 General / $20 Day-of</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button href={featuredEvent.registerUrl} attention className="w-full justify-center py-3 text-base">
                      Buy Ticket
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-igf-charcoal py-24 text-white">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                From Last Year
              </div>
              <h2 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">Odissi Highlights 2025</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/75">
                A glimpse into the beauty, grace, and devotion of classical Odissi — as performed at our 25th anniversary celebration.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10">
              <video
                controls
                preload="metadata"
                poster={odissiHighlightPoster}
                className="block w-full"
              >
                <source src={odissiHighlightVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="tickets" className="py-20">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
                Join Us
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                Secure Your Tickets
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { label: 'Advance', price: '$15', note: 'Online only' },
              { label: 'Day Of Event', price: '$20', note: 'No tickets at door' },
            ].map((t, idx) => (
              <Reveal key={t.label} delayMs={90 * idx}>
                <div className="igf-surface rounded-3xl border border-black/5 p-10 text-center shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-gray">
                    {t.label}
                  </div>
                  <div className="mt-4 font-heading text-5xl font-extrabold text-igf-orange">{t.price}</div>
                  <div className="mt-2 text-sm font-semibold text-igf-gray">{t.note}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={200}>
            <div className="mt-10 text-center">
              <Button href={featuredEvent.registerUrl} attention>
                Buy ticket
              </Button>
              <div className="mt-4 text-sm text-igf-gray">
                Contact: <a className="font-semibold text-igf-ink underline decoration-black/15 underline-offset-4 hover:decoration-igf-orange" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="sponsorship" className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sponsorshipBgImage})` }} />
        <div className="absolute inset-0 bg-igf-charcoal/80" />
        <Container className="relative">
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Support the Arts
              </div>
              <h2 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl">
                Sponsorship Opportunities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                Help us celebrate and preserve Indian classical arts for the next generation
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tier: 'Gold Sponsor',
                price: '$1,000',
                cls: 'bg-gradient-to-br from-igf-orange/95 to-igf-orange text-white',
                items: ['Featured video clips & stage announcement', 'Booth space at the event', 'Complimentary family tickets'],
              },
              {
                tier: 'Silver Sponsor',
                price: '$500',
                cls: 'bg-gradient-to-br from-slate-200 to-slate-300 text-igf-ink',
                items: ['Stage announcement or booth space', 'Complimentary family tickets'],
              },
              {
                tier: 'Bronze Sponsor',
                price: '$300',
                cls: 'bg-gradient-to-br from-stone-200 to-stone-300 text-igf-ink',
                items: ['Booth space at the event', 'Complimentary family tickets'],
              },
              {
                tier: 'Popular Sponsor',
                price: '$100',
                cls: 'bg-gradient-to-br from-indigo-700 to-indigo-950 text-white',
                items: ['Complimentary family tickets'],
              },
            ].map((t, idx) => (
              <Reveal key={t.tier} delayMs={80 * idx}>
                <div className={`flex h-full min-h-[340px] flex-col rounded-3xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 ${t.cls}`}>
                  <div className="text-sm font-extrabold">{t.tier}</div>
                  <div className="mt-5 font-heading text-4xl font-extrabold">{t.price}</div>
                  <ul className="mt-6 flex-1 space-y-3 text-sm font-semibold">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span aria-hidden="true" className="mt-0.5">✓</span>
                        <span className="opacity-95">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="partners" className="bg-white/60 py-20">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">
                Our Partners
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-igf-ink sm:text-4xl">
                Partnering Organizations
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-igf-gray">
                Proudly supported by these amazing organizations
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {partnerOrganizations.map((org, idx) => (
              <Reveal key={org.alt} delayMs={60 * idx}>
                <div className="mx-auto grid h-36 w-36 place-items-center rounded-full bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:h-40 sm:w-40">
                  <img
                    src={org.src}
                    alt={org.alt}
                    title={org.alt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-24 w-auto max-w-[85%] object-contain"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="venue"
        className="py-24"
      >
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-igf-orange">
                Location
              </div>
              <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                Venue &amp; Directions
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="igf-surface space-y-7 rounded-3xl border border-black/5 p-8 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div>
                    <div className="text-2xl font-extrabold text-igf-ink">
                      College of San Mateo Theater
                    </div>
                    <div className="mt-4 space-y-4 text-base text-igf-gray">
                      <div className="flex gap-3">
                        <div className="mt-0.5 text-lg text-igf-orange">📍</div>
                        <div>
                          <div>1700 W Hillsdale Blvd</div>
                          <div>San Mateo, CA 94402</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-lg text-igf-orange">📅</div>
                        <div>{featuredEvent.date}</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-lg text-igf-orange">⏰</div>
                        <div>
                          <div>{featuredEvent.time}</div>
                          <div className="mt-1 text-igf-orange">Dramas from 2 PM onwards</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-base font-extrabold text-igf-ink">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/70 ring-1 ring-black/10">
                        P
                      </span>
                      Parking Information
                    </div>
                    <div className="mt-3 space-y-2 text-base text-igf-gray">
                      <div>General Parking: Lot A (FREE)</div>
                      <div>Loading/Unloading (Performers): Lot U (Temporary)</div>
                      <div>Please allow extra minutes to park and walk to the theater.</div>
                    </div>
                  </div>

                  <div className="text-base text-igf-gray">
                    Enter from W Hillsdale Blvd and follow signs toward the Theater. Event signage
                    will guide you to the venue.
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delayMs={120} from="right">
                <div className="igf-surface relative overflow-hidden rounded-2xl border border-black/5 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=College%20of%20San%20Mateo%20Theater%2C%201700%20W%20Hillsdale%20Blvd%2C%20San%20Mateo%2C%20CA%2094402"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-igf-ink shadow-sm ring-1 ring-black/10"
                  >
                    Open in Maps <span aria-hidden="true">↗</span>
                  </a>
                  <iframe
                    title="College of San Mateo Theater map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5!2d-122.45!3d37.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e1a29249cb3%3A0x8c21f6f4c82f0f3d!2sCollege%20of%20San%20Mateo%20Theatre!5e0!3m2!1sen!2sus!4v1700000000000"
                    className="h-[360px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
