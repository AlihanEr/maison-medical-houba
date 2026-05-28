/**
 * Animated heartbeat ribbon — sits at the bottom of the hero as a divider
 * with a slow continuous left→right trace and a tracker dot at the tip.
 * Pure SVG + CSS keyframes (stroke-dashoffset).
 */
export default function HeroECG() {
  // Repeated heartbeat path; viewBox is wide so it spans the hero
  const beat = "l 60 0 l 18 -28 l 16 44 l 18 -52 l 18 30 l 60 0";
  const path = `M 0 90 ${beat} ${beat} ${beat} ${beat} ${beat} ${beat} ${beat} ${beat}`;

  return (
    <div className="hero-ecg" aria-hidden="true">
      <svg viewBox="0 0 1600 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ecg-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#84b6ff" stopOpacity="0" />
            <stop offset="20%"  stopColor="#2266e0" stopOpacity="0.85" />
            <stop offset="80%"  stopColor="#0e419b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0a2660" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ecg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6f9ff" stopOpacity="0" />
            <stop offset="100%" stopColor="#f6f9ff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Baseline grid (very subtle) */}
        <g opacity="0.18">
          {Array.from({ length: 32 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="180" stroke="#84b6ff" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 45 + 22.5} x2="1600" y2={i * 45 + 22.5} stroke="#84b6ff" strokeWidth="0.5" />
          ))}
        </g>

        {/* Ghost / trailing version */}
        <path d={path} fill="none" stroke="#b6d4ff" strokeWidth="1" opacity="0.4" />

        {/* Main animated trace */}
        <path
          className="hero-ecg-trace"
          d={path}
          fill="none"
          stroke="url(#ecg-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Soft fade-to-bg at the bottom so it merges with the section below */}
        <rect x="0" y="80" width="1600" height="100" fill="url(#ecg-fade)" />
      </svg>
    </div>
  );
}
