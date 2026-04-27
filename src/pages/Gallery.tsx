import { useEffect, useState } from 'react'
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
    <div className="py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-igf-orange">
              Gallery
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-igf-ink sm:text-5xl">
              Moments From Our Cultural Journey
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-igf-gray">
              A visual archive of performances, learning, and community celebrations across iGurukul
              Foundation programs and events.
            </p>
          </div>
        </Reveal>

        {loading ? (
          <div className="mt-12 rounded-2xl bg-white/70 p-10 text-center text-sm font-semibold text-igf-gray ring-1 ring-black/5">
            Loading gallery images...
          </div>
        ) : items.length > 0 ? (
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((item, idx) => (
              <Reveal key={`${item.image}-${idx}`} delayMs={(idx % 6) * 60}>
                <div className="mb-5 overflow-hidden rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-[0_14px_38px_rgba(0,0,0,0.1)]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition duration-500 hover:scale-[1.04] hover:brightness-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl bg-white/70 p-10 text-center ring-1 ring-black/5">
            <p className="text-base font-semibold text-igf-ink">No gallery images available yet.</p>
            <p className="mt-2 text-sm text-igf-gray">
              Please add images in the gallery.
            </p>
            {error ? (
              <p className="mt-3 text-sm font-semibold text-igf-gray">{error}</p>
            ) : null}
          </div>
        )}
      </Container>
    </div>
  )
}
