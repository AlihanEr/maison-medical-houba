export default function HeroAnimation() {
  return (
    <div className="hero-anim" aria-hidden="true">
      <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4d8df6" />
            <stop offset="100%" stopColor="#0e419b" />
          </linearGradient>
          <linearGradient id="crossGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2266e0" />
            <stop offset="100%" stopColor="#0c3479" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer pulse rings */}
        <circle cx="260" cy="260" r="240" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" opacity="0.2">
          <animate attributeName="r" values="220;240;220" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="260" cy="260" r="200" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" opacity="0.3">
          <animate attributeName="r" values="180;200;180" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="260" cy="260" r="160" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" values="140;160;140" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Inner glass disc */}
        <circle cx="260" cy="260" r="130" fill="#fff" opacity="0.9" />
        <circle cx="260" cy="260" r="130" fill="none" stroke="#d9eaff" strokeWidth="2" />

        {/* Heartbeat (ECG) line */}
        <g transform="translate(140, 260)">
          <path
            d="M0 0 L40 0 L55 -25 L70 35 L85 -45 L100 25 L115 0 L155 0 L170 -15 L185 15 L240 0"
            fill="none"
            stroke="url(#crossGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="500"
            strokeDashoffset="500"
            filter="url(#glow)"
          >
            <animate attributeName="stroke-dashoffset" from="500" to="-500" dur="3.5s" repeatCount="indefinite" />
          </path>
          {/* Trailing dot */}
          <circle r="6" fill="#2266e0">
            <animateMotion
              dur="3.5s"
              repeatCount="indefinite"
              path="M0 0 L40 0 L55 -25 L70 35 L85 -45 L100 25 L115 0 L155 0 L170 -15 L185 15 L240 0"
            />
          </circle>
        </g>

        {/* Medical Cross with heart pulse */}
        <g transform="translate(260,260)">
          <g>
            <rect x="-18" y="-58" width="36" height="116" rx="8" fill="url(#crossGrad)" opacity="0.92" />
            <rect x="-58" y="-18" width="116" height="36" rx="8" fill="url(#crossGrad)" opacity="0.92" />
            <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="1.4s" repeatCount="indefinite" />
          </g>
        </g>

        {/* Orbiting micro-icons */}
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 260 260" to="360 260 260" dur="40s" repeatCount="indefinite" />
          {/* Pill */}
          <g transform="translate(260, 60)">
            <rect x="-18" y="-9" width="36" height="18" rx="9" fill="#fff" stroke="#2266e0" strokeWidth="2" />
            <line x1="0" y1="-9" x2="0" y2="9" stroke="#2266e0" strokeWidth="2" />
          </g>
          {/* Stethoscope dot */}
          <circle cx="460" cy="260" r="10" fill="#fff" stroke="#2266e0" strokeWidth="2" />
          {/* Plus */}
          <g transform="translate(260, 460)">
            <rect x="-3" y="-10" width="6" height="20" fill="#2266e0" />
            <rect x="-10" y="-3" width="20" height="6" fill="#2266e0" />
          </g>
          {/* Heart */}
          <g transform="translate(60, 260)">
            <path d="M0 -6 C -8 -16, -20 -8, 0 8 C 20 -8, 8 -16, 0 -6 Z" fill="#2266e0" />
          </g>
        </g>

        {/* Decorative arcs */}
        <path d="M 60 260 A 200 200 0 0 1 460 260" fill="none" stroke="#b6d4ff" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />
        <path d="M 460 260 A 200 200 0 0 1 60 260" fill="none" stroke="#b6d4ff" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />
      </svg>

      {/* Floating status cards */}
      <div className="hero-card-float c1">
        <span className="dot" />
        <div>
          <div style={{ fontSize: 11, color: "#0a2660", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.1em" }}>Patient·e</div>
          <div>Suivi actif</div>
        </div>
      </div>
      <div className="hero-card-float c2">
        <span style={{ fontSize: 18 }}>💙</span>
        <div>
          <div style={{ fontSize: 11, color: "#0a2660", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.1em" }}>Rythme</div>
          <div>72 bpm</div>
        </div>
      </div>
      <div className="hero-card-float c3">
        <span style={{ fontSize: 18 }}>🩺</span>
        <div>
          <div style={{ fontSize: 11, color: "#0a2660", opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.1em" }}>Équipe</div>
          <div>5 métiers</div>
        </div>
      </div>
    </div>
  );
}
