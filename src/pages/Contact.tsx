import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, MapPin, Clock, Send } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [honeypot, setHoneypot] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (honeypot) return

    setFormStatus('submitting')

    // Simulate form submission (replace with Cloudflare Worker endpoint)
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }

  return (
    <>
      <Helmet>
        <title>Contact & Book | Next Generation Downtown, Waco TX</title>
        <meta
          name="description"
          content="Book an appointment or walk in at Next Generation Downtown. 1601 Washington Ave, Waco TX. Call (254) 301-7028. Mon-Fri 9-7, Sat 8-5."
        />
      </Helmet>

      <main id="main" tabIndex={-1}>
        {/* Header */}
        <section className="pt-28 md:pt-36 pb-12">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <p className="font-accent text-earth-accent text-sm tracking-[0.25em] uppercase mb-4 italic">
              Contact & Booking
            </p>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
              YOUR CHAIR IS{' '}
              <span className="text-earth-accent italic">WAITING</span>
            </h1>
            <p className="text-earth-fg/70 text-lg max-w-2xl">
              Walk in, call, or send us a message. Walk-ins are welcome
              every day we are open.
            </p>
          </div>
        </section>

        {/* Contact grid */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
              {/* Info column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Phone */}
                <div>
                  <h2 className="font-display text-lg mb-3">Call Ahead</h2>
                  <a
                    href="tel:+12543017028"
                    className="inline-flex items-center gap-3 text-earth-accent text-lg hover:underline underline-offset-4 transition-colors duration-[400ms]"
                  >
                    <Phone className="w-5 h-5" />
                    (254) 301-7028
                  </a>
                  <p className="text-sm text-earth-fg/60 mt-2">
                    Best for fades and hot towel shaves on weekends.
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h2 className="font-display text-lg mb-3">Find Us</h2>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-earth-accent mt-0.5" />
                    <div>
                      <p className="text-earth-fg">1601 Washington Ave</p>
                      <p className="text-sm text-earth-fg/60">Waco, TX 76701</p>
                      <a
                        href="https://maps.google.com/?cid=3182214700889834907"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-earth-accent hover:underline underline-offset-2 mt-1 inline-block"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h2 className="font-display text-lg mb-3">Hours</h2>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-earth-accent mt-0.5" />
                    <div className="text-sm text-earth-fg/60 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Booking widget placeholder */}
                <div className="bg-earth-surface border border-earth-border rounded-sm p-6">
                  <h2 className="font-display text-lg mb-3">Online Booking</h2>
                  <p className="text-sm text-earth-fg/60 mb-4">
                    Prefer to book online? Use the link below to see available
                    slots and reserve your chair.
                  </p>
                  {/* DEPLOY STEP: replace with actual booking widget or Calendly embed */}
                  <a
                    href="tel:+12543017028"
                    className="inline-flex items-center gap-2 bg-earth-accent text-earth-bg px-6 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent/90"
                  >
                    <Phone className="w-4 h-4" />
                    Book by Phone
                  </a>
                </div>
              </div>

              {/* Form column */}
              <div className="lg:col-span-3">
                <div className="bg-earth-surface border border-earth-border rounded-sm p-6 md:p-8">
                  <h2 className="font-display text-2xl mb-2">Send a Message</h2>
                  <p className="text-sm text-earth-fg/60 mb-8">
                    Questions about services, pricing, or availability? Drop us
                    a line and we will get back to you within one business day.
                  </p>

                  {formStatus === 'success' ? (
                    <div role="status" aria-live="polite" className="text-center py-12">
                      <p className="font-display text-xl text-earth-accent mb-2">
                        Message Sent
                      </p>
                      <p className="text-sm text-earth-fg/60">
                        We will get back to you within one business day. For
                        immediate booking, call (254) 301-7028.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="company_website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        autoComplete="off"
                        tabIndex={-1}
                        className="absolute -left-[9999px] opacity-0 w-0 h-0"
                        aria-hidden="true"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs tracking-[0.15em] uppercase text-earth-muted mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-earth-bg border border-earth-border rounded-sm px-4 py-3 text-sm text-earth-fg placeholder:text-earth-muted transition-colors duration-[400ms] focus:border-earth-accent focus:outline-none"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs tracking-[0.15em] uppercase text-earth-muted mb-2"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full bg-earth-bg border border-earth-border rounded-sm px-4 py-3 text-sm text-earth-fg placeholder:text-earth-muted transition-colors duration-[400ms] focus:border-earth-accent focus:outline-none"
                            placeholder="(254) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs tracking-[0.15em] uppercase text-earth-muted mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-earth-bg border border-earth-border rounded-sm px-4 py-3 text-sm text-earth-fg placeholder:text-earth-muted transition-colors duration-[400ms] focus:border-earth-accent focus:outline-none"
                          placeholder="you@email.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs tracking-[0.15em] uppercase text-earth-muted mb-2"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full bg-earth-bg border border-earth-border rounded-sm px-4 py-3 text-sm text-earth-fg transition-colors duration-[400ms] focus:border-earth-accent focus:outline-none appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="classic-cut">Classic Cut</option>
                          <option value="precision-fade">Precision Fade</option>
                          <option value="beard-work">Beard Work</option>
                          <option value="hot-towel-shave">Hot Towel Shave</option>
                          <option value="lineup">Lineup / Edge-Up</option>
                          <option value="kids-cut">Kids Cut</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs tracking-[0.15em] uppercase text-earth-muted mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full bg-earth-bg border border-earth-border rounded-sm px-4 py-3 text-sm text-earth-fg placeholder:text-earth-muted transition-colors duration-[400ms] focus:border-earth-accent focus:outline-none resize-y"
                          placeholder="Anything we should know before your visit?"
                        />
                      </div>

                      <div role="status" aria-live="polite">
                        {formStatus === 'error' && (
                          <p className="text-sm text-red-400 mb-4">
                            Something went wrong. Please call (254) 301-7028 instead.
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="inline-flex items-center gap-2 bg-earth-accent text-earth-bg px-8 py-3.5 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="aspect-video md:aspect-[21/9] overflow-hidden rounded-sm border border-earth-border">
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
        </section>
      </main>
    </>
  )
}
