# ITZFIZZ — Scroll in Motion

A responsive, scroll-driven hero animation created for the Itzfizz Digital web development internship assignment. The experience uses a pinned test-track composition where scrolling drives a concept car, illuminates the welcome headline, fills a motion trail, and stages four demonstration metrics.

## Stack

- React 18 + Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Implementation notes

- A single GSAP timeline maps scroll progress to the car, trail, headline, metrics, and progress rail.
- Animation values use transforms and opacity, avoiding React state changes during scroll.
- `gsap.matchMedia()` provides desktop and mobile travel distances.
- `prefers-reduced-motion` retains the full content without the prolonged scroll sequence.
- The car image is an original AI-generated, unbranded assignment asset.
- All percentage metrics are illustrative content for the animation demonstration, not verified company claims.

## Deployment

The Vite base path is relative, so the production `dist` directory can be deployed directly to GitHub Pages, Netlify, or Vercel.

## Reference

Interaction inspired by [Paras Chaturvedi's car scroll animation](https://paraschaturvedi.github.io/car-scroll-animation/). The visual system and implementation in this repository are original.
