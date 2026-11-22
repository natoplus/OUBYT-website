import Head from 'next/head'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { services, SITE_URL } from '@/lib/site'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/brand/oubyt-logo-transparent.webp" type="image/webp" />
        <title>Animation services — Oubyt</title>
        <meta name="description" content="Explore Oubyt's 2D and 3D animation, character, storyboarding, motion and full-production services." />
        <meta property="og:title" content="Animation services — Oubyt" />
        <meta property="og:description" content="From the first sketch to the final frame, find the right animation support for your story." />
        {SITE_URL && <link rel="canonical" href={`${SITE_URL}/services`} />}
      </Head>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero section">
          <div className="site-container page-hero-grid">
            <div className="page-hero-copy">
              <p className="eyebrow">OUBYT / SERVICES</p>
              <h1>Animation,<br /><span>built around the story.</span></h1>
              <p>Start with a clear need or bring us an early idea. We can support a focused part of the production or help shape a connected path from direction to delivery.</p>
              <div className="hero-actions">
                <Link className="button button-accent" href="/start-a-project">Tell us what you need <span aria-hidden="true">↗</span></Link>
                <a className="button button-outline" href="#capabilities">Explore capabilities <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="page-hero-art">
              <img src="/assets/worlds/holo-host.webp" alt="Holo Host original science-fiction story-world artwork." width="1280" height="1920" fetchPriority="high" />
              <span className="page-hero-art-label">STORY FIRST · FRAME BY FRAME</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="capabilities">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT WE CAN MAKE</p>
                <h2>One craft, many<br />ways to begin.</h2>
              </div>
              <p className="section-intro">The right scope depends on the story, format and stage you’re at. We’ll define the deliverables and review points together before work begins.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><span>{service.mark}</span></div>
                  <div className="service-glyph" aria-hidden="true"><span>{service.mark === '2D' || service.mark === '3D' ? service.mark : '✳'}</span></div>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                  <Link href={`/start-a-project?service=${encodeURIComponent(service.name)}`}>Discuss this service <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-approach-section">
          <div className="site-container service-approach-layout">
            <div>
              <p className="eyebrow">A FLEXIBLE STARTING POINT</p>
              <h2>Bring the brief<br />you have today.</h2>
            </div>
            <div className="service-approach-copy">
              <p>Some projects arrive with boards, references and a locked format. Others begin with a question or a world that needs a visual direction. We’ll make the next step clear, agree the scope and keep the work aligned as it develops.</p>
              <Link className="text-link" href="/process">See the process <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="section page-cta-section">
          <div className="site-container page-cta-panel">
            <div>
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let’s find the<br />right first frame.</h2>
            </div>
            <Link className="button button-accent" href="/start-a-project">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
