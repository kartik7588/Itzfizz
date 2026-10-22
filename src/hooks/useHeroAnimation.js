import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroAnimation(root) {
  useLayoutEffect(() => {
    const node = root.current
    if (!node) return undefined

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const captureMode = new URLSearchParams(window.location.search).has('qa')
      const letters = gsap.utils.toArray('.headline-letter')
      const cards = gsap.utils.toArray('.metric-card')

      if (reduceMotion) {
        gsap.set(['.headline-letter', '.metric-card', '.topbar', '.scroll-prompt'], { autoAlpha: 1, y: 0 })
        gsap.set('.trail', { scaleX: 1 })
        gsap.set('.progress-fill', { scaleX: 1 })
        return
      }

      if (!captureMode) {
        gsap.set(letters, {
          autoAlpha: 0,
          color: 'rgba(241, 240, 233, 0.52)',
          textShadow: '0 0 0 rgba(200,255,41,0)',
        })
        gsap.set(cards, {
          autoAlpha: 0,
          y: 18,
          scale: 0.94,
          filter: 'grayscale(0.85)',
        })

        gsap.timeline({ defaults: { ease: 'expo.out' } })
          .from('.topbar', { opacity: 0, y: -18, duration: 0.8 })
          .from('.scroll-prompt', { opacity: 0, y: 12, duration: 0.6 }, '-=0.35')
      }

      const mm = gsap.matchMedia()
      mm.add(
        {
          desktop: '(min-width: 768px)',
          mobile: '(max-width: 767px)',
        },
        (matchContext) => {
          const isMobile = matchContext.conditions.mobile
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: node,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          })

          timeline
            .fromTo('.car-wrap',
              { x: () => isMobile ? -window.innerWidth * 0.52 : -window.innerWidth * 0.49, rotate: -2 },
              { x: () => isMobile ? window.innerWidth * 0.66 : window.innerWidth * 0.58, rotate: 2, ease: 'none', duration: 1 },
              0,
            )
            .fromTo('.trail', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 1 }, 0)
            .fromTo('.progress-fill', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 1 }, 0)
            .to('.ambient-label', { xPercent: -16, opacity: 0.12, ease: 'none', duration: 1 }, 0)

          letters.forEach((letter, index) => {
            timeline.to(letter,
              {
                autoAlpha: 1,
                color: '#f1f0e9',
                textShadow: '0 0 22px rgba(200,255,41,0.24)',
                duration: 0.055,
              },
              0.06 + index * 0.042,
            )
          })

          const cardRevealPoints = [0.16, 0.34, 0.56, 0.74]
          cards.forEach((card, index) => {
            timeline.to(card,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                filter: 'grayscale(0)',
                duration: 0.11,
              },
              cardRevealPoints[index],
            )
          })

          return () => timeline.kill()
        },
      )

      return () => mm.revert()
    }, node)

    return () => context.revert()
  }, [root])
}
