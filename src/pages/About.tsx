import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Phone, Star } from 'lucide-react'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Next Generation Downtown Barbershop, Waco TX</title>
        <meta
          name="description"
          content="Meet the team at Next Generation Downtown. Owner-operated barbershop on Washington Ave in downtown Waco, TX. Precision cuts, trained barbers, and a higher standard."
        />
      </Helmet>

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
                  About Us
                </p>
                <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
                  THE NAME IS{' '}
                  <span className="text-earth-accent italic">THE STANDARD</span>
                </h1>
                <p className="text-earth-fg/70 text-lg leading-relaxed mb-6">
                  I opened Next Generation Downtown because Waco deserved a barbershop
                  where precision is the baseline, not the upgrade. Every barber in this
                  shop trained on fades and straight razor work before they ever sat a
                  client down. That is not negotiable.
                </p>
                <p className="text-earth-fg/70 leading-relaxed mb-6">
                  The shop is on Washington Ave in downtown Waco. We picked this spot
                  because this neighborhood is the center of what Waco is becoming.
                  New restaurants, new energy, same roots. Next Generation fits that.
                  Classic craft, forward thinking.
                </p>
                <p className="text-earth-fg/70 leading-relaxed">
                  We keep the shop clean, the music right, and the chairs moving. No
                  rushing. No shortcuts. You sit down, we consult, and you walk out
                  looking right. That is the promise.
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1759142449398-89357aa1bb36?w=700&h=875&fit=crop"
                  alt="Barbershop interior with vintage posters and styling stations"
                  width={700}
                  height={875}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-earth-surface border-y border-earth-border">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
              What We Stand On
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-14">
              THREE THINGS.{' '}
              <span className="text-earth-accent italic">EVERY DAY.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-2 border-earth-accent pl-6">
                <h3 className="font-display text-xl mb-3">Precision</h3>
                <p className="text-sm text-earth-fg/60 leading-relaxed">
                  Every fade is blended by hand and checked from every angle before you
                  leave the chair. We do not hand you a mirror and hope. We check it
                  ourselves first.
                </p>
              </div>
              <div className="border-l-2 border-earth-accent pl-6">
                <h3 className="font-display text-xl mb-3">Patience</h3>
                <p className="text-sm text-earth-fg/60 leading-relaxed">
                  A good cut takes time. We do not double-book chairs or rush through
                  consultations. Your slot is your slot. The barber is focused on your
                  head and nothing else.
                </p>
              </div>
              <div className="border-l-2 border-earth-accent pl-6">
                <h3 className="font-display text-xl mb-3">Pride</h3>
                <p className="text-sm text-earth-fg/60 leading-relaxed">
                  We take pride in the shop, the tools, the technique, and the result.
                  Every client walks out representing Next Generation. That means the
                  work has to speak for itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team approach */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
                  The Team
                </p>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  TRAINED HANDS.{' '}
                  <span className="text-earth-accent italic">SHARP EYES.</span>
                </h2>
                <p className="text-earth-fg/70 leading-relaxed mb-4">
                  Every barber at Next Generation went through the same process. Learn
                  the fundamentals. Master the fade. Earn the straight razor. Only then
                  do they take a chair.
                </p>
                <p className="text-earth-fg/70 leading-relaxed mb-4">
                  We keep the team small on purpose. Fewer chairs means more attention
                  per client. You will see the same faces when you come back, and they
                  will remember your cut.
                </p>
                <p className="text-earth-fg/70 leading-relaxed mb-8">
                  Continuing education is part of the job. New techniques, new tools,
                  new products. The name is Next Generation for a reason.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-earth-accent text-earth-accent"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-earth-fg/60">
                    4.9 from 80 Google Reviews
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2 aspect-square overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?w=700&h=700&fit=crop"
                  alt="Barber shop interior with clients receiving haircuts"
                  width={700}
                  height={700}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-earth-accent text-earth-bg">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              COME SEE THE SHOP
            </h2>
            <p className="text-earth-bg/70 text-lg mb-8 max-w-xl mx-auto">
              1601 Washington Ave, downtown Waco. Walk in any time we are open.
              Call ahead for weekends.
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
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-earth-bg text-earth-bg px-8 py-3.5 rounded-sm text-sm tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-bg/10"
              >
                See Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
