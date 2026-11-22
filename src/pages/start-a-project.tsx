import Head from 'next/head'
import { useRouter } from 'next/router'
import MultiStepBrief from '@/components/MultiStepBrief'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { SITE_URL } from '@/lib/site'

export default function StartAProjectPage() {
  const router = useRouter()
  const service = typeof router.query.service === 'string' ? router.query.service : ''

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/brand/oubyt-logo-transparent.webp" type="image/webp" />
        <title>Start a project — Oubyt</title>
        <meta name="description" content="Tell Oubyt about your animation project, from the first idea through delivery." />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Start a project — Oubyt" />
        <meta property="og:description" content="Share your idea, format and production needs with Oubyt." />
        {SITE_URL && <link rel="canonical" href={`${SITE_URL}/start-a-project`} />}
        {SITE_URL && <meta property="og:url" content={`${SITE_URL}/start-a-project`} />}
        {SITE_URL && <meta property="og:image" content={`${SITE_URL}/assets/brand/oubyt-logo.webp`} />}
      </Head>
      <SiteHeader />
      <main id="main-content" className="project-page">
        <div className="site-container">
          <div className="project-page-heading">
            <p className="eyebrow">A GOOD PROJECT STARTS WITH A CONVERSATION</p>
            <h1>Tell us the<br /><span>whole story.</span></h1>
            <p>Share what you’re making, where you are in the process, and what you need from an animation partner. If a detail is still open, “not sure yet” is a useful answer.</p>
          </div>
          <MultiStepBrief initialService={service} />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
