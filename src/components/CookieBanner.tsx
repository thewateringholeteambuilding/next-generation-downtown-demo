import { useEffect, useRef, useState } from 'react'

export interface CookieBannerProps {
  gaMeasurementId?: string
  policyHref?: string
  onAccept?: () => void
  onNecessaryOnly?: () => void
}

const STORAGE_KEY = 'twh-consent'
const PLACEHOLDER_GA_ID = 'G-XXXXXXXXXX'

type ConsentValue = 'accepted' | 'necessary' | null

function readConsent(): ConsentValue {
  if (typeof window === 'undefined') return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value === 'accepted' || value === 'necessary') return value
    return null
  } catch {
    return null
  }
}

function writeConsent(value: 'accepted' | 'necessary'): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // localStorage unavailable
  }
}

function fireGoogleAnalytics(measurementId: string): void {
  if (typeof window === 'undefined') return
  if (!measurementId || measurementId === PLACEHOLDER_GA_ID) return
  const w = window as unknown as {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer!.push(args)
  }
  w.gtag('js', new Date())
  w.gtag('config', measurementId, { anonymize_ip: true })
}

export function CookieBanner({
  gaMeasurementId,
  policyHref = '/legal',
  onAccept,
  onNecessaryOnly,
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false)
  const acceptRef = useRef<HTMLButtonElement | null>(null)
  const necessaryRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (readConsent() === null) setVisible(true)
  }, [])

  useEffect(() => {
    if (!visible) return
    const previous = document.activeElement as HTMLElement | null
    acceptRef.current?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleNecessary()
        return
      }
      if (e.key !== 'Tab') return
      const buttons = [necessaryRef.current, acceptRef.current].filter(
        (b): b is HTMLButtonElement => b !== null,
      )
      if (buttons.length === 0) return
      const first = buttons[0]!
      const last = buttons[buttons.length - 1]!
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      previous?.focus?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  function handleAccept() {
    writeConsent('accepted')
    if (gaMeasurementId) fireGoogleAnalytics(gaMeasurementId)
    onAccept?.()
    setVisible(false)
  }

  function handleNecessary() {
    writeConsent('necessary')
    onNecessaryOnly?.()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="twh-cookie-title"
      aria-describedby="twh-cookie-desc"
      aria-live="polite"
      className="twh-cookie-banner"
    >
      <div className="twh-cookie-banner__inner">
        <div className="twh-cookie-banner__copy">
          <p id="twh-cookie-title" className="twh-cookie-banner__title">
            Cookies on this site
          </p>
          <p id="twh-cookie-desc" className="twh-cookie-banner__desc">
            We use necessary cookies to make this site work. With your consent, we also use analytics
            cookies to understand how visitors use the site. See our{' '}
            <a href={policyHref} className="twh-cookie-banner__link">
              privacy policy
            </a>
            .
          </p>
        </div>
        <div className="twh-cookie-banner__actions">
          <button
            ref={necessaryRef}
            type="button"
            className="twh-cookie-banner__btn twh-cookie-banner__btn--secondary"
            onClick={handleNecessary}
          >
            Necessary only
          </button>
          <button
            ref={acceptRef}
            type="button"
            className="twh-cookie-banner__btn twh-cookie-banner__btn--primary"
            onClick={handleAccept}
          >
            Accept all
          </button>
        </div>
      </div>
      <style>{`
        .twh-cookie-banner {
          position: fixed;
          left: 12px;
          right: 12px;
          bottom: 12px;
          z-index: 70;
          background: var(--color-bg, #1f1a15);
          color: var(--color-text, #e6dfcf);
          border: 1px solid var(--color-border, #3a3226);
          border-radius: var(--radius-md, 4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          padding: var(--space-element, 16px);
          max-width: 880px;
          margin: 0 auto;
          animation: twh-cookie-rise var(--duration-normal, 400ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) both;
        }
        .twh-cookie-banner__inner {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 720px) {
          .twh-cookie-banner__inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }
        }
        .twh-cookie-banner__copy { flex: 1 1 auto; min-width: 0; }
        .twh-cookie-banner__title {
          margin: 0 0 4px 0;
          font-size: 0.9375rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .twh-cookie-banner__desc {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.5;
          opacity: 0.7;
        }
        .twh-cookie-banner__link {
          color: var(--color-accent, #c4a44e);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .twh-cookie-banner__link:focus-visible {
          outline: 2px solid var(--color-focus-ring, var(--color-accent, #c4a44e));
          outline-offset: 2px;
          border-radius: 2px;
        }
        .twh-cookie-banner__actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .twh-cookie-banner__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          padding: 0 14px;
          font-size: 0.875rem;
          font-weight: 600;
          line-height: 1.2;
          border-radius: var(--radius-md, 4px);
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform var(--duration-fast, 150ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
                      background-color var(--duration-normal, 400ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
        }
        .twh-cookie-banner__btn--secondary {
          background: transparent;
          color: var(--color-text, #e6dfcf);
          border-color: var(--color-border, #3a3226);
        }
        .twh-cookie-banner__btn--primary {
          background: var(--color-accent, #c4a44e);
          color: var(--color-accent-foreground, #1f1a15);
        }
        .twh-cookie-banner__btn:focus-visible {
          outline: 2px solid var(--color-focus-ring, var(--color-accent, #c4a44e));
          outline-offset: 2px;
        }
        .twh-cookie-banner__btn:active { transform: scale(0.98); }
        @keyframes twh-cookie-rise {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .twh-cookie-banner { animation: none; }
          .twh-cookie-banner__btn:active { transform: none; }
        }
      `}</style>
    </div>
  )
}
