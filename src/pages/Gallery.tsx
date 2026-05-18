import { useEffect, useState } from 'react'
import { ImageIcon } from 'lucide-react'
import ActaPageShell from '../components/ActaPageShell'
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
    <ActaPageShell
      eyebrow="Gallery"
      title={
        <>
          Moments From Our{' '}
          <span className="text-[var(--acta-terracotta)]">Cultural Journey</span>
        </>
      }
      lead="A visual archive of performances, learning, and community celebrations across iGurukul Foundation programs and events."
    >
      {loading ? (
        <div className="acta-panel acta-panel--padded py-14 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--acta-terracotta)_20%,white)]">
            <ImageIcon className="h-6 w-6 text-[var(--acta-terracotta)]" aria-hidden />
          </div>
          <p className="text-sm font-semibold text-[color-mix(in_srgb,var(--acta-ink)_65%,transparent)]">
            Loading gallery images…
          </p>
        </div>
      ) : items.length > 0 ? (
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {items.map((item, idx) => (
            <Reveal key={`${item.image}-${idx}`} delayMs={(idx % 6) * 60} from="scale">
              <div className="acta-panel acta-zoom-wrap mb-6 overflow-hidden break-inside-avoid">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="acta-panel acta-panel--padded py-12 text-center">
          <p className="text-base font-semibold text-[var(--acta-brown)]">No gallery images available yet.</p>
          <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--acta-ink)_65%,transparent)]">
            Please add images in the gallery.
          </p>
          {error ? <p className="mt-3 text-sm font-semibold">{error}</p> : null}
        </div>
      )}
    </ActaPageShell>
  )
}
