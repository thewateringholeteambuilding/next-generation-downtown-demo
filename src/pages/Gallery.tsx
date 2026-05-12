import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Phone } from 'lucide-react'

type FilterCategory = 'all' | 'cuts' | 'fades' | 'beard' | 'shop'

interface GalleryItem {
  src: string
  alt: string
  category: FilterCategory
  label: string
  detail: string
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?w=600&h=600&fit=crop',
    alt: 'Barber cutting hair with precision clippers, close-up',
    category: 'cuts',
    label: 'Classic Cut',
    detail: 'Scissor and clipper blend',
  },
  {
    src: 'https://images.unsplash.com/photo-1735150950233-d8d10d5926a8?w=600&h=600&fit=crop',
    alt: 'Client receiving a haircut at the barber chair',
    category: 'fades',
    label: 'Mid Fade',
    detail: 'Guard-by-guard blend',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1661382196658-9f835c21d6e9?w=600&h=600&fit=crop',
    alt: 'Barber trimming a client\'s beard with precision',
    category: 'beard',
    label: 'Beard Sculpt',
    detail: 'Full shape and line',
  },
  {
    src: 'https://images.unsplash.com/photo-1759142449398-89357aa1bb36?w=600&h=600&fit=crop',
    alt: 'Barbershop interior with vintage decor and styling stations',
    category: 'shop',
    label: 'The Shop',
    detail: 'Washington Ave, Waco',
  },
  {
    src: 'https://images.unsplash.com/photo-1761148438883-e34e0289a214?w=600&h=600&fit=crop',
    alt: 'Barber performing a straight razor shave',
    category: 'beard',
    label: 'Straight Razor',
    detail: 'Hot lather, two passes',
  },
  {
    src: 'https://images.unsplash.com/photo-1648221122279-5246dd0cf86c?w=600&h=600&fit=crop',
    alt: 'Client getting a precise haircut at the barbershop',
    category: 'fades',
    label: 'Taper Fade',
    detail: 'Clean temple blend',
  },
  {
    src: 'https://images.unsplash.com/photo-1654097800183-574ba7368f74?w=600&h=600&fit=crop',
    alt: 'Young man getting a professional haircut',
    category: 'cuts',
    label: 'Textured Cut',
    detail: 'Scissor work on top',
  },
  {
    src: 'https://images.unsplash.com/photo-1640301133543-41fe25ad6450?w=600&h=600&fit=crop',
    alt: 'Barber working on a client\'s hair with focused attention',
    category: 'cuts',
    label: 'The Consult',
    detail: 'Every cut starts here',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1683133542326-58d592472060?w=600&h=600&fit=crop',
    alt: 'Barber tools laid out on a clean surface',
    category: 'shop',
    label: 'The Tools',
    detail: 'Clean, sharp, ready',
  },
]

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Cuts', value: 'cuts' },
  { label: 'Fades', value: 'fades' },
  { label: 'Beard', value: 'beard' },
  { label: 'Shop', value: 'shop' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <>
      <Helmet>
        <title>Gallery | Next Generation Downtown Barbershop, Waco TX</title>
        <meta
          name="description"
          content="See the work at Next Generation Downtown. Cuts, fades, beard work, and the shop itself. Downtown Waco barbershop, 1601 Washington Ave."
        />
      </Helmet>

      <main id="main" tabIndex={-1}>
        {/* Header */}
        <section className="pt-28 md:pt-36 pb-12">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
              Gallery
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
              SEE THE WORK.{' '}
              <span className="text-earth-accent italic">JUDGE THE CRAFT.</span>
            </h1>
            <p className="text-earth-fg/70 text-lg max-w-2xl">
              Cuts, fades, beard sculpts, and the shop where it happens. Filter by
              category or browse everything.
            </p>
          </div>
        </section>

        {/* Filter pills */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setActiveFilter(f.value)}
                  className={`text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm border transition-all duration-[400ms] whitespace-nowrap ${
                    activeFilter === f.value
                      ? 'bg-earth-accent text-earth-bg border-earth-accent'
                      : 'text-earth-fg/60 border-earth-border hover:border-earth-accent hover:text-earth-accent'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item, i) => (
                <figure
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-sm border border-earth-border"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[500ms] group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-earth-bg/90 via-earth-bg/40 to-transparent p-4 pt-12 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms]">
                    <p className="font-display text-sm text-earth-fg">
                      {item.label}
                    </p>
                    <p className="text-xs text-earth-fg/60">{item.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-earth-muted py-16">
                No items in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-earth-accent text-earth-bg">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              YOUR NEXT CUT IS HERE
            </h2>
            <p className="text-earth-bg/70 text-lg mb-8 max-w-xl mx-auto">
              Every photo on this page is real work from real chairs. Come sit
              in one.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+12543017028"
                className="inline-flex items-center justify-center gap-2 bg-earth-bg text-earth-accent px-8 py-3.5 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-bg/90"
              >
                <Phone className="w-4 h-4" />
                (254) 301-7028
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-earth-bg text-earth-bg px-8 py-3.5 rounded-sm text-sm tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-bg/10"
              >
                Book a Chair
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
