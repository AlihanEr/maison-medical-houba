import Logo from "./Logo";

/**
 * Hero animation v2 — concentric rotating arcs, pulse waves emanating from
 * a central HOUBA logo, plus three live medical chips orbiting at the edges.
 * Pure SVG + CSS keyframes, no client JS.
 */
export default function HeroAnimation() {
  return (
    <div className="hero-anim" aria-hidden="true">
      <svg viewBox="0 0 540 540" xmlns="http://www.w3.org/2000/svg" className="hero-anim-svg">
        <defs>
          <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4d8df6" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#4d8df6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4d8df6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#84b6ff" />
            <stop offset="100%" stopColor="#1554c4" />
          </linearGradient>
          <linearGradient id="arcGrad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2266e0" />
            <stop offset="100%" stopColor="#0a2660" />
          </linearGradient>
          <linearGradient id="dotGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84b6ff" />
            <stop offset="100%" stopColor="#1554c4" />
          </linearGradient>
        </defs>

        {/* Ambient halo */}
        <circle cx="270" cy="270" r="270" fill="url(#haloGrad)" />

        {/* Expanding pulse rings */}
        <g className="pulse-rings">
          <circle cx="270" cy="270" r="100" fill="none" stroke="#2266e0" strokeWidth="2" opacity="0.6" />
          <circle cx="270" cy="270" r="100" fill="none" stroke="#2266e0" strokeWidth="2" opacity="0.4" />
          <circle cx="270" cy="270" r="100" fill="none" stroke="#2266e0" strokeWidth="2" opacity="0.3" />
        </g>

        {/* Outer rotating arc — clockwise */}
        <g className="arc-spin-cw">
          <circle cx="270" cy="270" r="230" fill="none" stroke="#d9eaff" strokeWidth="1" />
          <path
            d="M 270 40 A 230 230 0 0 1 462 174"
            fill="none"
            stroke="url(#arcGrad1)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="462" cy="174" r="7" fill="url(#dotGrad)" />
          <circle cx="270" cy="40" r="5" fill="#84b6ff" />
        </g>

        {/* Mid rotating arc — counter-clockwise */}
        <g className="arc-spin-ccw">
          <circle cx="270" cy="270" r="185" fill="none" stroke="#d9eaff" strokeWidth="1" />
          <path
            d="M 270 85 A 185 185 0 0 0 85 270"
            fill="none"
            stroke="url(#arcGrad2)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="85" cy="270" r="6" fill="#2266e0" />
        </g>

        {/* Inner dashed orbit */}
        <g className="arc-spin-slow">
          <circle cx="270" cy="270" r="145" fill="none" stroke="#b6d4ff" strokeWidth="1.5" strokeDasharray="3 8" />
        </g>

        {/* Tick marks on outer ring */}
        <g className="ticks">
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const isMajor = i % 6 === 0;
            const r1 = 245;
            const r2 = isMajor ? 258 : 252;
            const x1 = 270 + Math.cos(rad) * r1;
            const y1 = 270 + Math.sin(rad) * r1;
            const x2 = 270 + Math.cos(rad) * r2;
            const y2 = 270 + Math.sin(rad) * r2;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#b6d4ff"
                strokeWidth={isMajor ? 2 : 1}
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* Center glass disc */}
        <circle cx="270" cy="270" r="108" fill="#ffffff" />
        <circle cx="270" cy="270" r="108" fill="none" stroke="#d9eaff" strokeWidth="2" />

        {/* Subtle scanning beam across disc */}
        <g style={{ clipPath: "circle(108px at 270px 270px)" }} className="scan-beam">
          <rect x="120" y="265" width="300" height="2" fill="#84b6ff" opacity="0.5" />
        </g>
      </svg>

      {/* Centered logo (rendered as HTML so SVG remains generic & accessible) */}
      <div className="hero-logo-wrap">
        <Logo size={150} rounded={28} />
      </div>

      {/* Floating live-data chips */}
      <div className="metric-chip m1">
        <span className="chip-dot dot-green" />
        <div>
          <div className="chip-label">FRÉQUENCE</div>
          <div className="chip-value">
            72 <small>bpm</small>
          </div>
        </div>
      </div>
      <div className="metric-chip m2">
        <span className="chip-dot dot-blue" />
        <div>
          <div className="chip-label">SUIVI ACTIF</div>
          <div className="chip-value">
            312 <small>pat.</small>
          </div>
        </div>
      </div>
      <div className="metric-chip m3">
        <span className="chip-dot dot-amber" />
        <div>
          <div className="chip-label">ÉQUIPE</div>
          <div className="chip-value">
            5 <small>métiers</small>
          </div>
        </div>
      </div>
    </div>
  );
}
