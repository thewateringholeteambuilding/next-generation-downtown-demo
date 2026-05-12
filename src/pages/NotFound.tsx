import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Scissors } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Next Generation Downtown</title>
        <meta name="description" content="This page does not exist. Head back to Next Generation Downtown's homepage." />
      </Helmet>

      <main id="main" tabIndex={-1} className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <Scissors className="w-12 h-12 text-earth-accent mx-auto mb-6" />
          <h1 className="font-display text-5xl md:text-6xl text-earth-accent mb-4">
            404
          </h1>
          <p className="font-display text-xl mb-3">
            Wrong turn.
          </p>
          <p className="text-sm text-earth-fg/60 mb-8">
            This page does not exist. Maybe the URL changed, maybe it never
            was. Either way, the chair is still waiting.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-earth-accent text-earth-bg px-6 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-[400ms] hover:bg-earth-accent/90"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>
    </>
  )
}
