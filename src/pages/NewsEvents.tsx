import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { featuredEvent } from '../data/site'
import { Calendar, Clock, MapPin, Car } from 'lucide-react'

export default function NewsEvents() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <section className="mt-6 rounded-3xl bg-igf-bg px-6 py-12">
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
                  <h1 className="font-heading text-3xl font-extrabold tracking-tight text-igf-ink">
                    iGurukul <span className="text-igf-orange">Cultural Extravaganza</span>{' '}
                    <span className="text-igf-orange">2026</span>
                  </h1>
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

                    <div className="pt-2">
                      <Button href={featuredEvent.registerUrl} attention>
                        Buy ticket
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
        </section>

      </div>
    </div>
  )
}
