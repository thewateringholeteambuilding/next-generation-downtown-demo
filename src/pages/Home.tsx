import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Star, Phone, ArrowRight, Scissors, Clock, Users } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Classic Cuts',
    desc: 'Scissor and clipper cuts tailored to your face shape and hair type.',
    ideal: 'Walk-ins, regulars, first-timers',
  },
  {
    num: '02',
    title: 'Precision Fades',
    desc: 'Skin fades, mid fades, taper fades. Blended by hand, checked from every angle.',
    ideal: 'Fades that hold sharp for 3 weeks',
  },
  {
    num: '03',
    title: 'Beard Work',
    desc: 'Full beard sculpting, line-ups, and conditioning. Hot towel finish included.',
    ideal: 'Beard maintenance, shape-ups',
  },
  {
    num: '04',
    title: 'Hot Towel Shaves',
    desc: 'Straight razor shave with hot lather, two towel wraps, and balm.',
    ideal: 'The full ritual',
  },
]

const testimonials = [
  {
    quote: 'Been going here for two years. My fade lasts three weeks easy, and they remember how I like it without asking.',
    name: 'Marcus T.',
    detail: 'Regular since 2024',
    headline: 'Three weeks sharp.',
    date: 'March 2026',
  },
  {
    quote: 'Walked in on a Saturday no appointment. They fit me in within 20 minutes and the lineup was perfect.',
    name: 'David R.',
    detail: 'Walk-in client',
    headline: 'No appointment needed.',
    date: 'January 2026',
  },
  {
    quote: 'The hot towel shave is the real deal. Takes about 30 minutes and you walk out feeling like a different person. Worth every dollar.',
    name: 'James W.',
    detail: 'Monthly hot towel shave',
    headline: 'The ritual.',
    date: 'November 2025',
  },
]

const process = [
  {
    step: '01',
    title: 'Walk In or Call',
    desc: 'Drop by 1601 Washington Ave or call ahead. Weekday mornings are quietest.',
  },
  {
    step: '02',
    title: 'Consult',
    desc: 'Your barber checks your hair type, face shape, and what you have in mind.',
  },
  {
    step: '03',
    title: 'The Cut',
    desc: 'Precise work. Hot towel finish. Every detail checked before you leave the chair.',
  },
  {
    step: '04',
    title: 'Walk Out Right',
    desc: 'Product recommendations for your hair. Rebook if you want your regular slot held.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Next Generation Downtown | Premium Barbershop, Waco TX</title>
        <meta
          name="description"
          content="Downtown Waco's premium barbershop. Classic cuts, precision fades, beard work, and hot towel shaves. 4.9 stars from 80 reviews. 1601 Washington Ave."
        />
      </Helmet>

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Copy */}
              <div className="order-2 md:order-1">
                <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-6 italic">
                  1601 Washington Ave, Downtown Waco
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
                  YOUR CUT.{' '}
                  <span className="text-earth-accent italic">YOUR STYLE.</span>{' '}
                  YOUR BARBER.
                </h1>
                <p className="text-earth-fg/70 text-lg leading-relaxed mb-8 max-w-lg">
                  Classic barbering with modern precision. Every fade blended by hand,
                  every shave finished with a hot towel. Walk-ins welcome,
                  appointments preferred.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href="tel:+12543017028"
                    className="inline-flex items-center justify-center gap-2 bg-earth-accent text-earth-bg px-7 py-3.5 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent/90"
                  >
                    <Phone className="w-4 h-4" />
                    (254) 301-7028
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 border border-earth-border text-earth-fg px-7 py-3.5 rounded-sm text-sm tracking-wider uppercase transition-all duration-[400ms] hover:border-earth-accent hover:text-earth-accent"
                  >
                    View Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Trust badge */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-earth-accent text-earth-accent"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-earth-fg/70">
                    4.9 from 80 Reviews on Google
                  </span>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1541533848490-bc8115cd6522?w=800&h=1000&fit=crop&crop=center"
                    alt="Barber cutting a client's hair with precision clippers"
                    width={800}
                    height={1000}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover animate-ken-burns"
                  />
                </div>
                {/* Floating trust badge */}
                <div className="absolute bottom-4 right-4 bg-earth-surface/90 backdrop-blur-sm border border-earth-border px-4 py-3 rounded-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-earth-accent text-earth-accent" />
                    <div>
                      <p className="text-sm font-medium text-earth-fg">4.9 Stars</p>
                      <p className="text-xs text-earth-muted">80 Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-earth-surface border-y border-earth-border py-12">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-display text-3xl md:text-4xl text-earth-accent mb-1">4.9</p>
                <p className="text-xs tracking-[0.2em] uppercase text-earth-muted">Google Rating</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-earth-accent mb-1">80</p>
                <p className="text-xs tracking-[0.2em] uppercase text-earth-muted">Reviews</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="font-display text-3xl md:text-4xl text-earth-accent mb-1">Downtown</p>
                <p className="text-xs tracking-[0.2em] uppercase text-earth-muted">Washington Ave, Waco</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section id="services" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <h2 className="font-display text-3xl md:text-4xl">
                CRAFT. PRECISION.{' '}
                <span className="text-earth-accent italic">EVERY CHAIR.</span>
              </h2>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm text-earth-accent tracking-wider uppercase hover:gap-3 transition-all duration-[400ms]"
              >
                Full Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.num}
                  to="/services"
                  className="group bg-earth-surface border border-earth-border rounded-sm p-6 md:p-8 transition-all duration-[400ms] hover:border-earth-accent/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-4xl text-earth-accent/20 leading-none">
                      {service.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl mb-2 group-hover:text-earth-accent transition-colors duration-[400ms]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-earth-fg/60 leading-relaxed mb-3">
                        {service.desc}
                      </p>
                      <p className="text-xs text-earth-accent/70 italic font-accent">
                        Ideal for: {service.ideal}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-earth-muted group-hover:text-earth-accent group-hover:translate-x-1 transition-all duration-[400ms] mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-earth-surface border-y border-earth-border">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
              Client Reviews
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-14">
              WHAT THE CHAIR HEARS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-earth-bg border border-earth-border rounded-sm p-6 md:p-8"
                >
                  <p className="font-display text-lg text-earth-accent mb-4">
                    {t.headline}
                  </p>
                  <blockquote className="text-sm text-earth-fg/70 leading-relaxed mb-6 italic font-accent">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-earth-border pt-4">
                    <p className="text-sm font-medium text-earth-fg">{t.name}</p>
                    <p className="text-xs text-earth-muted">{t.detail}</p>
                    <p className="text-xs text-earth-accent/60 mt-1">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h2 className="font-display text-3xl md:text-4xl mb-14">
              THE NEXT GENERATION METHOD
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.step} className="relative">
                  <span className="font-display text-6xl text-earth-accent/10 leading-none">
                    {p.step}
                  </span>
                  <h3 className="font-display text-lg mt-2 mb-2">{p.title}</h3>
                  <p className="text-sm text-earth-fg/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About preview with photo */}
        <section className="py-20 md:py-28 bg-earth-surface border-y border-earth-border">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1629470937872-7419a74f628c?w=700&h=933&fit=crop"
                  alt="Barber tools arranged on a wooden surface"
                  width={700}
                  height={933}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
                  Our Story
                </p>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  DOWNTOWN WACO&apos;S{' '}
                  <span className="text-earth-accent italic">CHAIR</span>
                </h2>
                <p className="text-earth-fg/70 leading-relaxed mb-4">
                  Next Generation Downtown sits on Washington Ave in the heart of Waco.
                  This is a neighborhood barbershop with a higher standard. Every barber
                  here trained on precision fading and straight razor technique before
                  they touched a client.
                </p>
                <p className="text-earth-fg/70 leading-relaxed mb-8">
                  The name says it: next generation. Classic barbering skills passed forward,
                  refined with modern tools and higher expectations. No rushed cuts.
                  No upselling. Just the work.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm text-earth-accent tracking-wider uppercase hover:gap-3 transition-all duration-[400ms]"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Owner strip */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-16 h-16 bg-earth-accent/10 border border-earth-accent/30 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="font-display text-xl text-earth-accent">NG</span>
              </div>
              <div className="text-center md:text-left">
                <p className="font-display text-lg mb-1">
                  Owner-operated. Downtown Waco.
                </p>
                <p className="text-sm text-earth-fg/60">
                  Every chair at Next Generation is held to the same standard. Walk in, meet the team, see the work.
                </p>
              </div>
              <a
                href="tel:+12543017028"
                className="md:ml-auto inline-flex items-center gap-2 border border-earth-accent text-earth-accent px-6 py-3 rounded-sm text-sm tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent hover:text-earth-bg flex-shrink-0"
              >
                <Phone className="w-4 h-4" />
                Call Direct
              </a>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-20 md:py-28 bg-earth-accent text-earth-bg">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              READY FOR A CLEAN CUT?
            </h2>
            <p className="text-earth-bg/70 text-lg mb-8 max-w-xl mx-auto">
              Walk-ins welcome every day. For fades and hot towel shaves, call ahead to skip the wait.
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

        {/* Map */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  WASHINGTON AVE.{' '}
                  <span className="text-earth-accent italic">DOWNTOWN.</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Scissors className="w-5 h-5 text-earth-accent mt-0.5" />
                    <div>
                      <p className="font-medium">1601 Washington Ave</p>
                      <p className="text-sm text-earth-fg/60">Waco, TX 76701</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-earth-accent mt-0.5" />
                    <div>
                      <p className="text-sm text-earth-fg/60">Mon-Fri: 9am - 7pm</p>
                      <p className="text-sm text-earth-fg/60">Sat: 8am - 5pm</p>
                      <p className="text-sm text-earth-fg/60">Sun: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-earth-accent mt-0.5" />
                    <p className="text-sm text-earth-fg/60">Walk-ins welcome. Parking available on Washington Ave.</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?cid=3182214700889834907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-earth-accent tracking-wider uppercase hover:gap-3 transition-all duration-[400ms]"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="aspect-video overflow-hidden rounded-sm border border-earth-border">
                <iframe
                  src="https://maps.google.com/maps?q=1601+Washington+Ave+Waco+TX+76701&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  loading="lazy"
                  title="Next Generation Downtown location map"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
