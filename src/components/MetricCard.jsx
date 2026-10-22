export default function MetricCard({ value, label, tone, position }) {
  return (
    <article className={`metric-card ${tone} ${position}`} aria-label={`${value} ${label}`}>
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </article>
  )
}
