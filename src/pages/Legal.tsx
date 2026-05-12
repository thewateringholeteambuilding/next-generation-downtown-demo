import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Privacy & Terms | Next Generation Downtown</title>
        <meta
          name="description"
          content="Privacy policy and terms of service for Next Generation Downtown barbershop in Waco, TX."
        />
      </Helmet>

      <main id="main" tabIndex={-1} className="pt-12 pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-earth-accent mb-12 hover:gap-3 transition-all duration-[400ms]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-3xl md:text-4xl mb-12">
            Privacy & Terms
          </h1>

          {/* Privacy Policy */}
          <section className="mb-16">
            <h2 className="font-display text-xl mb-6 text-earth-accent">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-sm text-earth-fg/70 leading-relaxed">
              <p>
                Next Generation Downtown (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates the website nextgenerationdowntown.com.
                This page informs you of our policies regarding the collection,
                use, and disclosure of personal information.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Information We Collect
              </h3>
              <p>
                When you submit our contact form, we collect your name, email
                address, phone number (optional), and message content. We use
                this information solely to respond to your inquiry.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Analytics
              </h3>
              <p>
                With your consent, we use Google Analytics (GA4) to understand
                how visitors use our site. Analytics data is anonymized and does
                not identify you personally. You can decline analytics cookies
                via our consent banner.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Data Retention
              </h3>
              <p>
                Contact form submissions are retained for up to 12 months to
                ensure we can follow up on your inquiry. After this period, data
                is deleted unless you have become an active client.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Your Rights
              </h3>
              <p>
                You may request access to, correction of, or deletion of your
                personal information at any time by contacting us at
                (254) 301-7028 or visiting our shop at 1601 Washington Ave,
                Waco, TX 76701.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Cookies
              </h3>
              <p>
                This site uses necessary cookies for basic functionality and
                optional analytics cookies (Google Analytics) with your consent.
                Your cookie preference is stored in your browser and can be
                changed at any time by clearing your browser data.
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section className="mb-16">
            <h2 className="font-display text-xl mb-6 text-earth-accent">
              Terms of Service
            </h2>
            <div className="space-y-4 text-sm text-earth-fg/70 leading-relaxed">
              <p>
                By accessing and using nextgenerationdowntown.com, you agree to
                these terms. This website is for informational purposes only.
                Services, pricing, and availability shown are subject to change
                without notice.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Appointments & Walk-Ins
              </h3>
              <p>
                Appointments made through our contact form or phone are
                confirmed upon callback. Walk-ins are served on a
                first-come basis. We reserve the right to adjust wait times
                based on shop capacity.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Pricing
              </h3>
              <p>
                Prices listed on this website are starting prices and may vary
                based on hair length, service complexity, and add-on treatments.
                Final pricing is confirmed at the time of service.
              </p>

              <h3 className="font-medium text-earth-fg text-base mt-8 mb-3">
                Limitation of Liability
              </h3>
              <p>
                This website is provided &quot;as is&quot; without warranties
                of any kind. Next Generation Downtown is not liable for any
                damages arising from the use of this website.
              </p>
            </div>
          </section>

          <div className="border-t border-earth-border pt-8">
            <p className="text-xs text-earth-muted">
              Last updated: May 2026. Contact (254) 301-7028 with questions.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
