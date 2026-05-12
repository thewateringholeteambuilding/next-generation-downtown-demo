import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, Calendar } from 'lucide-react'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  const isContact = location.pathname === '/contact'

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible || isContact) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-earth-bg/95 backdrop-blur-md border-t border-earth-border px-4 py-3 flex items-center gap-3">
      <a
        href="tel:+12543017028"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-earth-accent text-earth-bg py-3 rounded-sm text-sm font-medium tracking-wider uppercase"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="/contact"
        className="flex-1 inline-flex items-center justify-center gap-2 border border-earth-accent text-earth-accent py-3 rounded-sm text-sm font-medium tracking-wider uppercase"
      >
        <Calendar className="w-4 h-4" />
        Book
      </a>
    </div>
  )
}
