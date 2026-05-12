import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

const serviceLinks = [
  { label: 'Classic Cuts', hash: '#classic-cuts' },
  { label: 'Precision Fades', hash: '#precision-fades' },
  { label: 'Beard Work', hash: '#beard-work' },
  { label: 'Hot Towel Shaves', hash: '#hot-towel-shaves' },
  { label: 'Lineups & Edge-Ups', hash: '#lineups' },
  { label: 'Kids Cuts', hash: '#kids-cuts' },
]

const pageLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

const legalLinks = [
  { label: 'Privacy & Terms', path: '/legal' },
]

export default function Footer() {
  return (
    <footer className="bg-earth-bg border-t border-earth-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <p className="font-display text-xl tracking-wide mb-4">
              <span className="text-earth-accent">Next</span> Generation
            </p>
            <p className="text-earth-fg/60 text-sm leading-relaxed mb-6">
              Sharp lines. Clean fades. Every chair, every time.
            </p>
            <div className="flex items-start gap-3 text-sm text-earth-fg/60 mb-3">
              <MapPin className="w-4 h-4 mt-0.5 text-earth-accent flex-shrink-0" />
              <span>1601 Washington Ave, Waco, TX 76701</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-earth-fg/60 mb-3">
              <Phone className="w-4 h-4 text-earth-accent flex-shrink-0" />
              <a href="tel:+12543017028" className="hover:text-earth-accent transition-colors duration-[400ms]">
                (254) 301-7028
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm text-earth-fg/60">
              <Clock className="w-4 h-4 mt-0.5 text-earth-accent flex-shrink-0" />
              <div>
                <p>Mon-Fri: 9am - 7pm</p>
                <p>Sat: 8am - 5pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-accent text-earth-accent text-sm tracking-[0.2em] uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.hash}>
                  <Link
                    to={`/services${link.hash}`}
                    className="text-sm text-earth-fg/60 hover:text-earth-accent transition-colors duration-[400ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages column */}
          <div>
            <h3 className="font-accent text-earth-accent text-sm tracking-[0.2em] uppercase mb-5">
              Pages
            </h3>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-earth-fg/60 hover:text-earth-accent transition-colors duration-[400ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-earth-fg/60 hover:text-earth-accent transition-colors duration-[400ms]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="font-accent text-earth-accent text-sm tracking-[0.2em] uppercase mb-5">
              Your Chair Is Waiting
            </h3>
            <p className="text-sm text-earth-fg/60 leading-relaxed mb-6">
              Walk-ins welcome. Appointments preferred for weekends and fades.
            </p>
            <a
              href="tel:+12543017028"
              className="inline-flex items-center gap-2 bg-earth-accent text-earth-bg px-6 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent/90"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-earth-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-earth-muted">
            &copy; {new Date().getFullYear()} Next Generation Downtown. All rights reserved.
          </p>
          <p className="text-xs text-earth-muted font-accent italic">
            Precision. Patience. Pride.
          </p>
        </div>
      </div>
    </footer>
  )
}
