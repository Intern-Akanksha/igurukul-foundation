import type { ReactNode } from 'react'

function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={className ?? ''}>
      <div className="mx-auto max-w-7xl px-16">{children}</div>
    </section>
  )
}

function HeroSection() {
  return (
    <div className="relative bg-[#f5f5f5]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-16 py-20 sm:grid-cols-2">
        <div className="relative min-h-[320px] bg-white">
          <div className="absolute left-8 top-8 text-sm font-semibold text-black">iGurukul Foundation</div>
          <div className="absolute left-8 top-20 space-y-3">
            <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-black sm:text-4xl">
              Cultural Program & Community Learning Day
            </h1>
            <p className="max-w-md text-base text-gray-700">
              Preserving Oriya language and heritage through programs, performances, and community learning.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] bg-yellow-500">
          <div className="absolute right-10 top-1/2 w-56 -translate-y-1/2 text-right text-black">
            <div className="text-sm font-semibold">Date</div>
            <div className="text-lg font-extrabold">Sun, Apr 12, 2026</div>
            <div className="mt-4 text-sm font-semibold">Time</div>
            <div className="text-lg font-extrabold">10:00 AM – 7:00 PM</div>
            <div className="mt-4 text-sm font-semibold">Location</div>
            <div className="text-lg font-extrabold">College of San Mateo Theater</div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-14 z-20 w-[680px] -translate-x-1/3 shadow-xl">
        <img
          src="https://wajweb.b-cdn.net/igurukul-foundation/Image%20(3).jpg"
          alt="IGF"
          className="h-[300px] w-full rounded-md object-cover grayscale"
        />
      </div>
    </div>
  )
}

function InfoStrip() {
  return (
    <Section className="bg-[#f5f5f5] py-12">
      <div className="grid grid-cols-3 items-center gap-6">
        <img
          src="https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0070.jpeg"
          alt=""
          className="h-16 w-16 rounded object-cover grayscale"
        />
        <div className="text-center text-sm text-gray-700">
          International Gurukul: A Centre of Excellence in Learning & Human Development
        </div>
        <div className="flex justify-end">
          <div className="h-12 w-12 rounded-full bg-black" />
        </div>
      </div>
    </Section>
  )
}

function MainContent() {
  return (
    <Section className="bg-[#f5f5f5] py-20">
      <h2 className="text-2xl font-extrabold text-black">Ein Zentrum für Kultur & Erholung</h2>
      <div className="mt-8 grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
        <p className="max-w-prose text-base leading-relaxed text-gray-700">
          Language, arts, wellness, and community connection. iGurukul Foundation builds bridges across
          generations through cultural education and social learning.
        </p>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-28 w-24 bg-yellow-500" />
          <img
            src="https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0001.jpeg"
            alt=""
            className="relative z-10 h-64 w-full rounded object-cover"
          />
        </div>
      </div>
    </Section>
  )
}

function GalleryRow() {
  return (
    <Section className="bg-[#f5f5f5] py-10">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0089.jpeg',
          'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0080.jpeg',
          'https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0275.jpeg',
        ].map((src) => (
          <img key={src} src={src} alt="" className="aspect-[4/3] w-full rounded object-cover" />
        ))}
      </div>
    </Section>
  )
}

function SplitSection() {
  return (
    <Section className="bg-[#f5f5f5] py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-white px-16 py-20">
          <div className="text-2xl font-extrabold text-black">Räumlichkeiten</div>
          <p className="mt-4 max-w-prose text-base text-gray-700">
            Spaces designed for workshops, language sessions, and cultural rehearsals.
          </p>
          <button className="mt-6 rounded-full bg-black px-6 py-2 text-sm font-semibold text-white">Mehr</button>
        </div>
        <div className="relative bg-yellow-500 px-16 py-20">
          <div className="text-2xl font-extrabold text-black">Unterkunft</div>
          <p className="mt-4 max-w-prose text-base text-black/80">
            Venue details and logistics for participants and families.
          </p>
          <button className="mt-6 rounded-full bg-black px-6 py-2 text-sm font-semibold text-white">Details</button>
        </div>
      </div>
    </Section>
  )
}

function FullWidthBanner() {
  return (
    <div className="relative h-[300px] w-full">
      <img
        src="https://wajweb.b-cdn.net/igurukul-foundation/iGurukul_2025_0180.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-16">
        <div className="text-center">
          <div className="text-lg font-extrabold text-white">Tradition & Umgebung</div>
          <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-semibold text-black">Explore</button>
        </div>
      </div>
    </div>
  )
}

export default function LandingStrict() {
  return (
    <div className="bg-[#f5f5f5] text-black">
      <HeroSection />
      <InfoStrip />
      <MainContent />
      <GalleryRow />
      <SplitSection />
      <FullWidthBanner />
      <div className="px-16 py-6 text-center text-xs text-gray-700">
        Match element positions, overlaps, and spacing exactly like the reference image. Do not simplify layout or remove overlapping elements.
      </div>
    </div>
  )
}
