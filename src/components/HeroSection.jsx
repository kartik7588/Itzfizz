import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { metrics } from '../data/metrics'
import { useHeroAnimation } from '../hooks/useHeroAnimation'
import MetricCard from './MetricCard'
import TrackMarkings from './TrackMarkings'

const headline = 'WELCOME ITZFIZZ'.split('')

export default function HeroSection() {
  const root = useRef(null)
  useHeroAnimation(root)

  return (
    <main ref={root} className="hero-scroll" id="experience">
      <section className="hero-stage" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Project information">
          <a className="brand" href="#experience" aria-label="Itzfizz animation home">
            <span className="brand-mark" aria-hidden="true">iF</span>
            <span className="brand-copy">ITZFIZZ<br />MOTION LAB</span>
          </a>
          <div className="run-status" aria-label="Animation status">
            <span className="status-light" />
            SCROLL ENGINE READY
          </div>
          <span className="prototype-label">INTERACTION PROTOTYPE / 2026</span>
        </nav>

        <div className="ambient-label" aria-hidden="true">SPEED BECOMES SIGNAL</div>

        <div className="metric-field">
          {metrics.map((metric) => <MetricCard key={`${metric.value}-${metric.position}`} {...metric} />)}
        </div>

        <div className="track-shell">
          <TrackMarkings />
          <div className="trail" aria-hidden="true" />
          <h1 id="hero-title" className="headline" aria-label="Welcome Itzfizz">
            {headline.map((letter, index) => (
              <span className="headline-letter" key={`${letter}-${index}`} aria-hidden="true">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <div className="car-wrap">
            <div className="car-shadow" aria-hidden="true" />
            <img
              className="car"
              src={`${import.meta.env.BASE_URL}assets/itzfizz-prototype-car.png`}
              alt="Top view of a graphite concept car with lime accents"
            />
          </div>
        </div>

        <div className="scroll-prompt">
          <span>Scroll to drive</span>
          <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
        </div>

        <p className="disclaimer">Illustrative metrics for animation demonstration.</p>

        <div className="progress-rail" aria-hidden="true">
          <span className="progress-fill" />
        </div>
      </section>
    </main>
  )
}
