import Head from 'next/head'
import Link from 'next/link'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { SITE_URL, worlds } from '@/lib/site'

export default function WorldsPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/brand/oubyt-logo-transparent.webp" type="image/webp" />
        <title>Story worlds — Oubyt</title>
        <meta name="description" content="Explore original story worlds from the Nartstudio creative family, each with its own characters, atmosphere and visual language." />
        <meta property="og:title" content="Story worlds — Oubyt" />
        <meta property="og:description" content="Distinct worlds. Room to move." />
        {SITE_URL && <link rel="canonical" href={`${SITE_URL}/worlds`} />}
      </Head>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero section">
          <div className="site-container page-hero-grid">
            <div className="page-hero-copy">
              <p className="eyebrow">OUBYT / STORY WORLDS</p>
              <h1>Distinct worlds.<br /><span>Room to move.</span></h1>
              <p>Oubyt is part of the Nartstudio creative family. These original universes bring different genres, characters and visual rules into one growing story library.</p>
              <a className="button button-outline" href="#world-library">Enter the worlds <span aria-hidden="true">↓</span></a>
            </div>
            <div className="page-hero-art page-hero-art-tall">
              <img src="/assets/worlds/mod.webp" alt="M.O.D original cyberpunk story-world artwork." width="907" height="1280" fetchPriority="high" />
              <span className="page-hero-art-label">ORIGINAL STORY WORLD · 01 / 04</span>
            </div>
          </div>
        </section>

        <section className="section worlds-section" id="world-library">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE NCU LIBRARY</p>
                <h2>Four different<br />ways into a story.</h2>
              </div>
              <p className="section-intro">Explore each universe on Nartstudio for more about its characters and setting. The artwork shown here is original story-world art, not finished animation.</p>
            </div>
            <div className="world-grid world-grid-page">
              {worlds.map((world) => (
                <a className="world-card" href={world.href} target="_blank" rel="noreferrer" key={world.name}>
                  <div className="world-card-art">
                    <img src={world.image} alt={`${world.name} original story-world artwork.`} width={world.width || 907} height={world.height || 1280} loading="lazy" decoding="async" />
                    <span className="world-card-index">{world.index}</span>
                    <span className="world-card-action" aria-hidden="true">↗</span>
                  </div>
                  <div className="world-card-copy">
                    <p className="eyebrow">{world.genre}</p>
                    <h3>{world.name}</h3>
                    <p>{world.summary}</p>
                    <span className="text-link">Explore on Nartstudio <i aria-hidden="true">↗</i></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section worlds-note-section">
          <div className="site-container worlds-note-panel">
            <span className="note-mark">O.</span>
            <div>
              <p className="eyebrow">A NOTE ON THE ARTWORK</p>
              <h2>Worldbuilding comes first.</h2>
              <p>These images introduce original NCU settings and characters. They are not animation samples, client projects or a studio showreel.</p>
            </div>
            <Link className="text-link" href="/services">Explore animation services <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
