import Head from 'next/head'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { processSteps, SITE_URL } from '@/lib/site'

export default function ProcessPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/brand/oubyt-logo-transparent.webp" type="image/webp" />
        <title>Our process — Oubyt</title>
        <meta name="description" content="A clear, collaborative animation process from project brief and look development through production and delivery." />
        <meta property="og:title" content="Our process — Oubyt" />
        <meta property="og:description" content="Clear steps. Considered craft." />
        {SITE_URL && <link rel="canonical" href={`${SITE_URL}/process`} />}
      </Head>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero section">
          <div className="site-container page-hero-grid">
            <div className="page-hero-copy">
              <p className="eyebrow">OUBYT / OUR PROCESS</p>
              <h1>Clear steps.<br /><span>Considered craft.</span></h1>
              <p>Good production starts with shared expectations. We align on the goal, shape the visual direction and agree the review points before the work gathers momentum.</p>
              <Link className="button button-accent" href="/start-a-project">Begin with a brief <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="page-hero-art page-hero-art-tall">
              <img src="/assets/worlds/lords-lounge.webp" alt="Lord’s Lounge original celestial-comedy story-world artwork." width="1280" height="1920" fetchPriority="high" />
              <span className="page-hero-art-label">BRIEF · DIRECTION · PRODUCTION · DELIVERY</span>
            </div>
          </div>
        </section>

        <section className="section process-section process-page-section">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">FROM FIRST CONVERSATION TO HANDOFF</p>
                <h2>Four steps to<br />a finished frame.</h2>
              </div>
              <p className="section-intro">The scale of each phase depends on your project. Scope, review rounds and delivery requirements are agreed in the project brief before production begins.</p>
            </div>
            <div className="process-detail-grid">
              {processSteps.map((step, index) => (
                <article className="process-detail-card" key={step.number}>
                  <span className="process-detail-number">{step.number}</span>
                  <p className="eyebrow">{['ALIGN', 'EXPLORE', 'PRODUCE', 'DELIVER'][index]}</p>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                  <div className="process-detail-line" aria-hidden="true"><span style={{ width: `${(index + 1) * 25}%` }} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-standards-section">
          <div className="site-container process-standards-layout">
            <div>
              <p className="eyebrow">MADE TO STAY CLEAR</p>
              <h2>Good collaboration<br />is part of the craft.</h2>
            </div>
            <div className="process-standards-list">
              <p><span>01</span> Agree the goal, format, scope and schedule before production.</p>
              <p><span>02</span> Give visual direction a chance to settle before animation begins.</p>
              <p><span>03</span> Keep feedback rounds and final file requirements explicit.</p>
            </div>
          </div>
        </section>

        <section className="section page-cta-section">
          <div className="site-container page-cta-panel">
            <div>
              <p className="eyebrow">READY WHEN YOU ARE</p>
              <h2>Bring us the<br />first version.</h2>
            </div>
            <Link className="button button-accent" href="/start-a-project">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
