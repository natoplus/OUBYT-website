import { useEffect } from 'react'
import { useRouter } from 'next/router'

const revealSelector = [
  'main > section:not(.hero-section)',
  'main > .page-hero',
  '.point-of-view-art',
  '.service-card',
  '.world-card',
  '.process-step',
  '.studio-visual',
  '.studio-copy',
  '.project-form-panel',
  '.story-pillar',
  '.craft-card',
  '.value-card',
  '.brief-form',
  '.page-feature-art',
  '.process-detail-card',
  '.family-link-grid a',
  '.studio-page-mark',
].join(', ')

export default function PageScrollReveal() {
  const { asPath } = useRouter()

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    if (items.length === 0) return

    const root = document.documentElement
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('scroll-reveal-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    items.forEach((element, index) => {
      element.classList.add('scroll-reveal-item')
      element.style.setProperty('--scroll-reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
      observer.observe(element)
    })
    root.dataset.scrollReveal = 'active'

    return () => {
      observer.disconnect()
      delete root.dataset.scrollReveal
      items.forEach((element) => {
        element.classList.remove('scroll-reveal-item', 'scroll-reveal-visible')
        element.style.removeProperty('--scroll-reveal-delay')
      })
    }
  }, [asPath])

  return null
}
