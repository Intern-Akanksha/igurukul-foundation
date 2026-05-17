import { useEffect, useState } from 'react'
import { ImageIcon } from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'

const galleryApiUrl = 'https://api.onwajooba.com/plugin/gallery?page=1&limit=8'
const galleryAuthKey = '0a17cb5ca0799c4714c14c8360daf40b904a0603a98f39bfa74f623bfa1c9009'

type GalleryItem = {
  image: string
  alt: string
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const pickImage = (entry: unknown): string | null => {
      if (!entry || typeof entry !== 'object') return null
      const record = entry as Record<string, unknown>
      const candidates = ['image', 'imageUrl', 'url', 'src', 'thumbnail', 'thumbnailUrl']
      for (const key of candidates) {
        const value = record[key]
        if (typeof value === 'string' && value.trim()) return value
      }
      return null
    }

    const toDisplayItems = (payload: unknown): GalleryItem[] => {
      const root = payload as Record<string, unknown> | null
      if (!root || typeof root !== 'object') return []
      const list =
        (Array.isArray(root.data) ? root.data : null) ??
        (Array.isArray(root.items) ? root.items : null) ??
        (Array.isArray(root.results) ? root.results : null) ??
        (Array.isArray(root.gallery) ? root.gallery : null) ??
        []

      return list
        .map((entry, idx) => {
          const image = pickImage(entry)
          if (!image) return null
          const rec = entry as Record<string, unknown>
          const title = typeof rec.title === 'string' ? rec.title : ''
          const alt = title.trim() || `iGurukul gallery ${idx + 1}`
          return { image, alt }
        })
        .filter((v): v is GalleryItem => !!v)
    }

    const loadGallery = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(galleryApiUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${galleryAuthKey}`,
            'x-api-key': galleryAuthKey,
            'auth-key': galleryAuthKey,
          },
        })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        setItems(toDisplayItems(payload))
      } catch {
        setError('')
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    void loadGallery()
  }, [])

  return (
    <div className="igf-page-wrap relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-amber-400/15 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <Reveal from="scale">
          <div className="text-center">
            <p className="igf-page-eyebrow justify-center">
              <span className="tracking-[0.22em]">Gallery</span>
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl md:text-6xl">
              Moments From Our{' '}
              <span className="bg-gradient-to-r from-igf-indigo to-cyan-600 bg-clip-text text-transparent">
                Cultural Journey
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-igf-gray sm:text-lg">
              A visual archive of performances, learning, and community celebrations across iGurukul
              Foundation programs and events.
            </p>
          </div>
        </Reveal>

        {loading ? (
          <div className="mt-14 rounded-3xl border border-igf-indigo/15 bg-white/80 p-14 text-center shadow-[0_20px_50px_rgba(61,43,107,0.08)] backdrop-blur-md">
            <div className="mx-auto mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-igf-indigo/15 to-violet-500/15">
              <ImageIcon className="h-6 w-6 text-igf-indigo" aria-hidden />
            </div>
            <p className="text-sm font-semibold text-igf-gray">Loading gallery images…</p>
          </div>
        ) : items.length > 0 ? (
          <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {items.map((item, idx) => (
              <Reveal key={`${item.image}-${idx}`} delayMs={(idx % 6) * 60} from="scale">
                <div className="group igf-glass-card mb-6 overflow-hidden break-inside-avoid">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-igf-indigo/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-3xl border border-black/5 bg-white/85 p-12 text-center shadow-lg backdrop-blur-md">
            <p className="text-base font-semibold text-igf-ink">No gallery images available yet.</p>
            <p className="mt-2 text-sm text-igf-gray">Please add images in the gallery.</p>
            {error ? <p className="mt-3 text-sm font-semibold text-igf-gray">{error}</p> : null}
          </div>
        )}
      </Container>
    </div>
  )
}
