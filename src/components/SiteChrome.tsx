import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { familyLinks, NARTSTUDIO_URL, PYLOTHOUSE_URL, socialLinks } from '@/lib/site'

const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Worlds', href: '/worlds' },
  { label: 'Process', href: '/process' },
  { label: 'Studio', href: '/studio' },
]

export function BrandSwitcher() {
  return (
    <nav className="brand-switcher" aria-label="Nartstudio family">
      {familyLinks.slice(0, 2).map((brand) => (
        <a href={brand.href} key={brand.name} target="_blank" rel="noopener noreferrer">
          {brand.name}
        </a>
      ))}
      <span aria-current="page">Oubyt</span>
      <a href={PYLOTHOUSE_URL} target="_blank" rel="noopener noreferrer">Pylothouse</a>
    </nav>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const updateCompact = () => setCompact(window.scrollY > 24)
    updateCompact()
    window.addEventListener('scroll', updateCompact, { passive: true })
    return () => window.removeEventListener('scroll', updateCompact)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header${compact ? ' site-header-compact' : ''}`}>
        <BrandSwitcher />
        <div className="site-container header-inner">
          <Link className="site-logo" href="/" aria-label="Oubyt home">
            <img src="/assets/brand/oubyt-logo-transparent.webp" alt="" width="96" height="66" />
            <span>ANIMATION STUDIO</span>
          </Link>
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                aria-current={router.pathname === item.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link className="button button-small button-accent nav-cta" href="/start-a-project" onClick={() => setMenuOpen(false)}>
              Start a project <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-brand">
          <Link className="site-logo footer-logo" href="/" aria-label="Oubyt home">
            <img src="/assets/brand/oubyt-logo-transparent.webp" alt="" width="96" height="66" />
            <span>ANIMATION STUDIO</span>
          </Link>
          <p>Original worlds, shaped for motion. Oubyt is the animation studio in the Nartstudio family.</p>
          <div className="footer-socials" aria-label="Nartstudio social media">
            {socialLinks.map((social) => (
              <a href={social.href} key={social.name} target="_blank" rel="noreferrer">{social.name}</a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/worlds">Story worlds</Link>
          <Link href="/services">Services</Link>
          <Link href="/process">Our process</Link>
          <Link href="/studio">The studio</Link>
          <Link href="/start-a-project">Start a project</Link>
        </div>
        <div className="footer-column">
          <h2>The family</h2>
          {familyLinks.map((brand) => (
            <a href={brand.href} key={brand.name} target="_blank" rel="noreferrer">{brand.name}</a>
          ))}
        </div>
        <div className="footer-column">
          <h2>Studio</h2>
          <a href={`${NARTSTUDIO_URL}/press`} target="_blank" rel="noreferrer">Press</a>
          <a href={`${NARTSTUDIO_URL}/careers`} target="_blank" rel="noreferrer">Careers</a>
          <a href={`${NARTSTUDIO_URL}/contact`} target="_blank" rel="noreferrer">Contact</a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Oubyt · A Nartstudio company</span>
        <nav aria-label="Legal">
          <a href={`${NARTSTUDIO_URL}/legal/privacy`} target="_blank" rel="noreferrer">Privacy</a>
          <a href={`${NARTSTUDIO_URL}/legal/terms`} target="_blank" rel="noreferrer">Terms</a>
          <a href={`${NARTSTUDIO_URL}/legal/cookies`} target="_blank" rel="noreferrer">Cookies</a>
          <a href={`${NARTSTUDIO_URL}/legal/copyright`} target="_blank" rel="noreferrer">Copyright</a>
        </nav>
      </div>
    </footer>
  )
}
