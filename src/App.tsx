import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SkipLink from './components/SkipLink'
import StickyMobileCTA from './components/StickyMobileCTA'
import { CookieBanner } from './components/CookieBanner'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

const NAV_HIDDEN_ROUTES = ['/legal']

export default function App() {
  const location = useLocation()
  const showNav = !NAV_HIDDEN_ROUTES.includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      <SkipLink />
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNav && <Footer />}
      {showNav && <StickyMobileCTA />}
      <CookieBanner gaMeasurementId="G-XXXXXXXXXX" policyHref="/legal" />
    </>
  )
}
