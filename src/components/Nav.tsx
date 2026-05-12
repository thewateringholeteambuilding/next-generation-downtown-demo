import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ${
        scrolled
          ? 'bg-earth-bg/95 backdrop-blur-md border-b border-earth-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20"
      >
        <Link
          to="/"
          className="font-display text-lg md:text-xl tracking-wide text-earth-fg"
        >
          <span className="text-earth-accent">Next</span> Generation
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-wider uppercase transition-colors duration-[400ms] hover:text-earth-accent ${
                location.pathname === link.path
                  ? 'text-earth-accent'
                  : 'text-earth-fg/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12543017028"
            className="inline-flex items-center gap-2 bg-earth-accent text-earth-bg px-5 py-2.5 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent/90"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-earth-fg p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-earth-bg z-40">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-display tracking-wide transition-colors duration-[400ms] ${
                  location.pathname === link.path
                    ? 'text-earth-accent'
                    : 'text-earth-fg/70 hover:text-earth-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12543017028"
              className="inline-flex items-center gap-3 bg-earth-accent text-earth-bg px-8 py-3 rounded-sm text-lg font-medium tracking-wider uppercase mt-4"
            >
              <Phone className="w-5 h-5" />
              (254) 301-7028
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
