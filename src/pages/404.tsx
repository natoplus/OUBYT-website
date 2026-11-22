import Head from 'next/head'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page not found — Oubyt</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <SiteHeader />
      <main id="main-content" className="project-page">
        <div className="site-container not-found-content">
          <p className="eyebrow">SIGNAL LOST · 404</p>
          <h1>This frame<br /><span>isn’t here.</span></h1>
          <p>The page may have moved. Return to the studio landing page to find your way.</p>
          <Link className="button button-accent" href="/">Back to Oubyt <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
