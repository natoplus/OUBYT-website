import Head from 'next/head'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { NARTSTUDIO_URL, PYLOTHOUSE_URL, SITE_URL } from '@/lib/site'

export default function StudioPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/brand/oubyt-logo-transparent.webp" type="image/webp" />
        <title>The studio — Oubyt</title>
        <meta name="description" content="Meet Oubyt, the animation studio in the Nartstudio family, connecting original story development with visual direction and animation." />
        <meta property="og:title" content="The studio — Oubyt" />
        <meta property="og:description" content="A creative home for original worlds in motion." />
        {SITE_URL && <link rel="canonical" href={`${SITE_URL}/studio`} />}
      </Head>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero section studio-page-hero">
          <div className="site-container page-hero-grid">
            <div className="page-hero-copy">
              <p className="eyebrow">OUBYT / THE STUDIO</p>
              <h1>A creative home<br /><span>for worlds in motion.</span></h1>
              <p>Oubyt is the animation studio within the Nartstudio family. We bring story, visual direction and animation together while keeping the original point of view intact.</p>
              <div className="hero-actions">
                <Link className="button button-accent" href="/start-a-project">Work with Oubyt <span aria-hidden="true">↗</span></Link>
                <a className="button button-outline" href="#creative-family">Meet the family <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="studio-page-mark">
              <div className="studio-orbit studio-orbit-one" aria-hidden="true" />
              <div className="studio-orbit studio-orbit-two" aria-hidden="true" />
              <img src="/assets/brand/oubyt-logo-transparent.webp" alt="Oubyt logo" width="1280" height="884" fetchPriority="high" />
              <span>ANIMATION STUDIO · NARTSTUDIO FAMILY</span>
            </div>
          </div>
        </section>

        <section className="section studio-story-section">
          <div className="site-container studio-story-layout">
            <p className="eyebrow">OUR POINT OF VIEW</p>
            <h2>Story before spectacle.<br /><span>Purpose in every frame.</span></h2>
            <p>We believe the strongest animation grows from a world worth entering. That means starting with the people, places and ideas at the heart of a story, then making visual and motion choices that serve them.</p>
          </div>
        </section>

        <section className="section studio-family-section" id="creative-family">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE CREATIVE FAMILY</p>
                <h2>Connected by<br />original worlds.</h2>
              </div>
              <p className="section-intro">Oubyt is part of a broader creative ecosystem. Explore the teams and original universes that make up the Nartstudio family.</p>
            </div>
            <div className="family-link-grid">
              <a href={NARTSTUDIO_URL} target="_blank" rel="noreferrer"><span>01 / CREATIVE STUDIO</span><strong>Nartstudio</strong><i aria-hidden="true">↗</i></a>
              <a href={`${NARTSTUDIO_URL}/brands/ncu`} target="_blank" rel="noreferrer"><span>02 / ORIGINAL WORLDS</span><strong>NCU</strong><i aria-hidden="true">↗</i></a>
              <a href={PYLOTHOUSE_URL} target="_blank" rel="noreferrer"><span>03 / CREATIVE HOUSE</span><strong>Pylothouse</strong><i aria-hidden="true">↗</i></a>
            </div>
          </div>
        </section>

        <section className="section page-cta-section">
          <div className="site-container page-cta-panel">
            <div>
              <p className="eyebrow">LET’S MAKE SOMETHING MOVE</p>
              <h2>Start with<br />the story.</h2>
            </div>
            <Link className="button button-accent" href="/start-a-project">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
