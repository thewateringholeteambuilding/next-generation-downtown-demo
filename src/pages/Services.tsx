import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Phone } from 'lucide-react'

interface Service {
  id: string
  num: string
  title: string
  price: string
  duration: string
  hook: string
  description: string
  includes: string[]
  ideal: string
  image: string
  imageAlt: string
}

const services: Service[] = [
  {
    id: 'classic-cuts',
    num: '01',
    title: 'Classic Cuts',
    price: 'From $30',
    duration: '30-45 min',
    hook: 'The cut that fits your life.',
    description:
      'Scissor and clipper cuts tailored to your face shape, hair type, and daily routine. We consult before every cut. Hot towel neck finish and product styling included.',
    includes: ['Consultation', 'Shampoo', 'Cut & style', 'Hot towel neck finish', 'Product application'],
    ideal: 'Walk-ins, regulars, first-timers',
    image: 'https://images.unsplash.com/photo-1640301133543-41fe25ad6450?w=600&h=400&fit=crop',
    imageAlt: 'Barber cutting a client\'s hair with precision',
  },
  {
    id: 'precision-fades',
    num: '02',
    title: 'Precision Fades',
    price: 'From $35',
    duration: '40-60 min',
    hook: 'Blended by hand. Checked from every angle.',
    description:
      'Skin fades, mid fades, drop fades, taper fades. Each blend is built gradually with multiple guard lengths and finished with a straight edge. We do not rush fades.',
    includes: ['Fade consultation', 'Guard-by-guard blend', 'Straight razor edge', 'Hot towel finish', 'Styling'],
    ideal: 'Fades that hold sharp for 3 weeks',
    image: 'https://images.unsplash.com/photo-1654097803253-d481b6751f29?w=600&h=400&fit=crop',
    imageAlt: 'Barber working on a precision fade haircut',
  },
  {
    id: 'beard-work',
    num: '03',
    title: 'Beard Work',
    price: 'From $20',
    duration: '20-30 min',
    hook: 'Shape, line, condition.',
    description:
      'Full beard sculpting and line-ups with clippers and straight razor. Includes hot towel wrap and beard oil conditioning. We shape to your jawline, not a template.',
    includes: ['Beard shaping', 'Line-up', 'Hot towel wrap', 'Beard oil conditioning', 'Mustache trim'],
    ideal: 'Beard maintenance, shape-ups, line corrections',
    image: 'https://plus.unsplash.com/premium_photo-1661382196658-9f835c21d6e9?w=600&h=400&fit=crop',
    imageAlt: 'Barber trimming and shaping a client\'s beard',
  },
  {
    id: 'hot-towel-shaves',
    num: '04',
    title: 'Hot Towel Shaves',
    price: 'From $40',
    duration: '35-45 min',
    hook: 'The full ritual. Not a shortcut.',
    description:
      'Two hot towel wraps, hot lather application, straight razor shave with the grain and across, cold towel close, and aftershave balm. This is the service that started barbering.',
    includes: ['Two hot towel wraps', 'Hot lather prep', 'Straight razor shave', 'Cold towel close', 'Aftershave balm'],
    ideal: 'The full experience, special occasions, grooming reset',
    image: 'https://plus.unsplash.com/premium_photo-1661392827793-d8543c341ea3?w=600&h=400&fit=crop',
    imageAlt: 'Hot towel shave ritual at the barbershop',
  },
  {
    id: 'lineups',
    num: '05',
    title: 'Lineups & Edge-Ups',
    price: 'From $15',
    duration: '15-20 min',
    hook: 'Clean edges between cuts.',
    description:
      'Hairline cleanup, temple taper, and neckline edge-up with a straight razor. For clients between full cuts who want to stay sharp.',
    includes: ['Hairline edge-up', 'Temple cleanup', 'Neckline razor finish'],
    ideal: 'Between cuts, event prep, quick refresh',
    image: 'https://images.unsplash.com/photo-1735150950233-d8d10d5926a8?w=600&h=400&fit=crop',
    imageAlt: 'Barber performing a precise lineup on a client',
  },
  {
    id: 'kids-cuts',
    num: '06',
    title: 'Kids Cuts',
    price: 'From $20',
    duration: '20-30 min',
    hook: 'Patient hands for young heads.',
    description:
      'Full cuts for kids 12 and under. Same precision, more patience. We work at their pace and make sure they leave the chair happy.',
    includes: ['Consultation with parent', 'Clipper or scissor cut', 'Styling'],
    ideal: 'Ages 3-12, first haircuts, back to school',
    image: 'https://images.unsplash.com/photo-1654097800183-574ba7368f74?w=600&h=400&fit=crop',
    imageAlt: 'Young client getting a haircut at the barbershop',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Pricing | Next Generation Downtown, Waco TX</title>
        <meta
          name="description"
          content="Full service menu at Next Generation Downtown. Classic cuts from $30, precision fades from $35, beard work from $20, hot towel shaves from $40. Walk-ins welcome."
        />
      </Helmet>

      <main id="main" tabIndex={-1}>
        {/* Header */}
        <section className="pt-28 md:pt-36 pb-12">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
              Services & Pricing
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
              EVERY SERVICE.{' '}
              <span className="text-earth-accent italic">ONE STANDARD.</span>
            </h1>
            <p className="text-earth-fg/70 text-lg max-w-2xl">
              Walk-ins welcome for all services. Call ahead for fades and hot towel
              shaves on Saturdays.
            </p>
          </div>
        </section>

        {/* Quick nav */}
        <section className="sticky top-16 md:top-20 z-30 bg-earth-bg/95 backdrop-blur-md border-y border-earth-border py-3 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex gap-3 min-w-max">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs tracking-[0.15em] uppercase text-earth-fg/60 border border-earth-border px-4 py-2 rounded-sm transition-all duration-[400ms] hover:border-earth-accent hover:text-earth-accent whitespace-nowrap"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? 'md:[direction:rtl] md:*:[direction:ltr]' : ''
                }`}>
                  <div className="aspect-[3/2] overflow-hidden rounded-sm border border-earth-border">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-4xl text-earth-accent/20 leading-none">
                        {service.num}
                      </span>
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl">
                          {service.title}
                        </h2>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-earth-accent font-medium">
                            {service.price}
                          </span>
                          <span className="text-xs text-earth-muted">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="font-accent text-earth-accent italic mb-3">
                      {service.hook}
                    </p>
                    <p className="text-sm text-earth-fg/60 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="mb-5">
                      <p className="text-xs tracking-[0.15em] uppercase text-earth-muted mb-2">
                        Includes
                      </p>
                      <ul className="space-y-1.5">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-earth-fg/60 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-earth-accent rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs text-earth-accent/70 italic font-accent">
                      Ideal for: {service.ideal}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-earth-accent text-earth-bg">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              WHICH SERVICE IS YOURS?
            </h2>
            <p className="text-earth-bg/70 text-lg mb-8 max-w-xl mx-auto">
              Not sure what to book? Call and we will talk through it. First-timers
              get a full consultation before any work starts.
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
                Book Online
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
