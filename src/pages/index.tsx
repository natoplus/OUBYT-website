import Head from 'next/head'
import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'
import ProjectInquiryForm from '@/components/ProjectInquiryForm'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { NARTSTUDIO_URL, processSteps, services, SITE_URL, worlds } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/brand/oubyt-logo-transparent.webp" type="image/webp" />
        <title>Oubyt — Animation for original worlds</title>
        <meta name="description" content="Oubyt is the Nartstudio animation studio, shaping original worlds into visual stories in 2D and 3D." />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oubyt — Animation for original worlds" />
        <meta property="og:description" content="Original worlds, shaped for motion. Meet Oubyt, the animation studio in the Nartstudio family." />
        {SITE_URL && <link rel="canonical" href={`${SITE_URL}/`} />}
        {SITE_URL && <meta property="og:url" content={`${SITE_URL}/`} />}
        {SITE_URL && <meta property="og:image" content={`${SITE_URL}/assets/brand/oubyt-logo.webp`} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <SiteHeader />
      <main id="main-content">
        <section className="hero-section">
          <div className="hero-grain" aria-hidden="true" />
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> ANIMATION STUDIO · NARTSTUDIO FAMILY</p>
              <h1 aria-label="WORLDS IN MOTION.">
                <span className="hero-title-line hero-title-line-primary" aria-hidden="true">WORLDS</span>
                <br aria-hidden="true" />
                <span className="hero-title-line hero-title-line-accent" aria-hidden="true">IN MOTION.</span>
              </h1>
              <p className="hero-lede">We shape original worlds into visual stories—through considered 2D and 3D animation.</p>
              <div className="hero-actions">
                <a className="button button-outline" href="#worlds">Explore story worlds <span aria-hidden="true">↓</span></a>
                <Link className="button button-accent" href="/start-a-project">Start a project <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="hero-footnote">
                <span>STORY FIRST</span>
                <i aria-hidden="true" />
                <span>FRAME BY FRAME</span>
                <i aria-hidden="true" />
                <span>2D + 3D</span>
              </div>
            </div>
            <div className="hero-art-wrap">
              <div className="hero-art-outline" aria-hidden="true" />
              <figure className="hero-art">
                <img
                  src="/assets/worlds/mod.webp"
                  alt="Original M.O.D story-world artwork: a silhouette against a neon-green cyberpunk city."
                  width="907"
                  height="1280"
                  fetchPriority="high"
                />
                <figcaption><span>ORIGINAL STORY WORLD</span><strong>M.O.D</strong><i>01 / 03</i></figcaption>
              </figure>
              <span className="hero-art-side-label" aria-hidden="true">A NEW FRAME OF REFERENCE</span>
            </div>
          </div>
          <a className="scroll-cue" href="#point-of-view"><span /> SCROLL TO EXPLORE</a>
        </section>

        <div className="signal-strip" aria-label="Oubyt animation studio">
          <div className="signal-track" aria-hidden="true">
            {Array.from({ length: 2 }).map((_, index) => (
              <span key={index}>STORY <i>✳</i> CHARACTER <i>✳</i> WORLD <i>✳</i> MOTION <i>✳</i> FRAME <i>✳</i></span>
            ))}
          </div>
        </div>

        <section className="section point-of-view-section" id="point-of-view">
          <div className="site-container point-of-view-grid">
            <div className="point-of-view-art">
              <img src="/assets/worlds/holo-host.webp" alt="Holo Host original science-fiction story-world artwork." width="1280" height="1920" loading="lazy" decoding="async" />
              <span className="art-index">ARTWORK / 02</span>
              <span className="art-corner art-corner-top" aria-hidden="true" />
              <span className="art-corner art-corner-bottom" aria-hidden="true" />
            </div>
            <div className="point-of-view-copy">
              <p className="eyebrow">A POINT OF VIEW, IN EVERY FRAME</p>
              <h2>Animation begins<br />before the first frame.</h2>
              <p className="body-copy">The strongest work starts with a world worth entering. Oubyt brings story, character and atmosphere together early—so every movement has a reason to exist.</p>
              <div className="point-of-view-note">
                <span className="note-mark">O.</span>
                <p>Oubyt is building its first studio reel. The images here are original story-world artwork, not finished animation or client work.</p>
              </div>
              <a className="text-link" href="#worlds">Explore the worlds <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section story-pillars-section">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE STORY LEADS</p>
                <h2>Every frame has<br />a point of view.</h2>
              </div>
              <p className="section-intro">We look for the human detail inside the spectacle, then let that point of view guide the design, pace and performance.</p>
            </div>
            <div className="story-pillars">
              <article className="story-pillar">
                <span>01 / CHARACTER</span>
                <h3>Someone to follow.</h3>
                <p>Specific choices and readable performances make a character feel like they belong to the world.</p>
              </article>
              <article className="story-pillar">
                <span>02 / ATMOSPHERE</span>
                <h3>A place with a pulse.</h3>
                <p>Shape, colour and sound cues can make an environment feel alive before it moves.</p>
              </article>
              <article className="story-pillar">
                <span>03 / MOTION</span>
                <h3>Movement with meaning.</h3>
                <p>Timing and rhythm carry emotion, reveal personality and keep the story clear.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT WE MAKE</p>
                <h2>From the first sketch<br />to the final frame.</h2>
              </div>
              <div>
                <p className="section-intro">A thoughtful animation pipeline can begin at any stage. Tell us what you have, and we’ll help shape the next move.</p>
                <Link className="text-link section-heading-link" href="/services">Explore all services <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><span>{service.mark}</span></div>
                  <div className="service-glyph" aria-hidden="true"><span>{service.mark === '2D' || service.mark === '3D' ? service.mark : '✳'}</span></div>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                  <Link href={`/start-a-project?service=${encodeURIComponent(service.name)}`} aria-label={`Discuss ${service.name}`}>Discuss this service <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="world-feature-section section">
          <div className="site-container world-feature-layout">
            <div className="page-feature-art">
              <img src="/assets/worlds/the-unliving-sage.webp" alt="The Unliving Sage original dark-fantasy story-world artwork." width="1280" height="1920" loading="lazy" decoding="async" />
              <span className="art-index">WORLD / 04</span>
            </div>
            <div className="world-feature-copy">
              <p className="eyebrow">A WORLD WITH ITS OWN RULES</p>
              <h2>Let the world<br />shape the frame.</h2>
              <p className="body-copy">From neon-lit futures to dark fantasy, each NCU world carries a distinct atmosphere. We start by understanding those rules, then look for the visual language that lets the story move.</p>
              <Link className="button button-outline" href="/worlds">Explore the story worlds <span aria-hidden="true">↗</span></Link>
              <p className="artwork-note">Original story-world artwork shown; not finished animation or client work.</p>
            </div>
          </div>
        </section>

        <section className="section worlds-section" id="worlds">
          <div className="site-container">
            <div className="section-heading worlds-heading">
              <div>
                <p className="eyebrow">ORIGINAL STORY WORLDS</p>
                <h2>Distinct worlds.<br /><span>Room to move.</span></h2>
              </div>
              <div>
                <p className="section-intro">Oubyt belongs to a wider creative family. Explore some of the original NCU universes whose characters and settings give every story its own visual language.</p>
                <Link className="text-link section-heading-link" href="/worlds">See all worlds <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="world-grid">
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

        <section className="process-section section" id="process">
          <div className="site-container">
            <div className="section-heading process-heading">
              <div>
                <p className="eyebrow">HOW WE WORK</p>
                <h2>Clear steps.<br />Considered craft.</h2>
              </div>
              <div>
                <p className="section-intro">A collaborative process keeps the creative direction clear and the production moving—with decisions made at the right time.</p>
                <Link className="text-link section-heading-link" href="/process">See how we work <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-step" key={step.number}>
                  <div className="process-step-line"><span>{step.number}</span><i className={index === processSteps.length - 1 ? 'is-last' : ''} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
            <p className="process-footnote">Scope, review rounds and delivery requirements are agreed in the project brief before production begins.</p>
          </div>
        </section>

        <section className="section studio-principles-section">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">GOOD WORK, BUILT TOGETHER</p>
                <h2>Creative clarity<br />at every stage.</h2>
              </div>
              <p className="section-intro">The process should protect the idea and make the next decision easier—not add distance between the people making it.</p>
            </div>
            <div className="studio-principles">
              <article className="value-card"><span>01</span><h3>Keep the idea in view</h3><p>Creative choices stay connected to the story, audience and purpose set in the brief.</p></article>
              <article className="value-card"><span>02</span><h3>Make feedback useful</h3><p>Clear milestones and agreed review points help teams respond to the work with focus.</p></article>
              <article className="value-card"><span>03</span><h3>Finish with a handoff</h3><p>Delivery requirements are agreed early, so final files are prepared for their intended use.</p></article>
            </div>
          </div>
        </section>

        <section className="studio-section section" id="studio">
          <div className="site-container studio-panel">
            <div className="studio-visual">
              <div className="studio-orbit studio-orbit-one" aria-hidden="true" />
              <div className="studio-orbit studio-orbit-two" aria-hidden="true" />
              <img className="studio-logo-image" src="/assets/brand/oubyt-logo.webp" alt="Oubyt animation studio logo" width="1280" height="884" loading="lazy" decoding="async" />
              <span className="studio-coordinate">NARTSTUDIO<br />ANIMATION DIVISION</span>
            </div>
            <div className="studio-copy">
              <p className="eyebrow">THE STUDIO</p>
              <h2>Small enough to stay close to the story.</h2>
              <p className="body-copy">Oubyt is the animation studio within the Nartstudio family. We connect original story development with visual direction and animation—keeping the point of view intact as an idea moves toward the screen.</p>
              <div className="studio-links">
                <Link className="text-link" href="/studio">Discover the studio <span aria-hidden="true">↗</span></Link>
                <a className="text-link" href={NARTSTUDIO_URL} target="_blank" rel="noreferrer">Meet Nartstudio <span aria-hidden="true">↗</span></a>
                <a className="text-link" href={`${NARTSTUDIO_URL}/brands/ncu`} target="_blank" rel="noreferrer">Discover NCU <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section project-section" id="project">
          <div className="site-container project-layout">
            <div className="project-copy">
              <p className="eyebrow">HAVE A STORY TO ANIMATE?</p>
              <h2>Let’s find<br />its next frame.</h2>
              <p className="body-copy">Share the idea, the format you have in mind and what you need help solving. We’ll take it from there.</p>
              <div className="project-detail">
                <span>01</span>
                <p>Have a longer brief, references or an NDA request?</p>
                <Link href="/start-a-project">Open the full project brief <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="project-form-panel">
              <div className="form-panel-heading"><span>PROJECT ENQUIRY</span><span>01 / 02</span></div>
              <ProjectInquiryForm />
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="site-container newsletter-layout">
            <div>
              <p className="eyebrow">OUBYT TRANSMISSIONS</p>
              <h2>Only when there’s<br />something to show.</h2>
              <p>Occasional notes on original worlds, animation and studio news. No noise.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
