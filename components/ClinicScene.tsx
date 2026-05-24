/**
 * ClinicScene — flat-style SVG illustration of the Houba clinic facade.
 * Modern medical building, two figures by the entrance, trees, soft sky.
 * Uses brand blues throughout; no raster assets.
 */
export default function ClinicScene() {
  return (
    <div className="clinic-scene" aria-hidden="true">
      <svg
        viewBox="0 0 1400 520"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="clinic-scene-svg"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#eef6ff" />
            <stop offset="100%" stopColor="#d9eaff" />
          </linearGradient>
          <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#e9f0fa" />
            <stop offset="100%" stopColor="#c9d8ec" />
          </linearGradient>
          <linearGradient id="building" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3f7fd" />
          </linearGradient>
          <linearGradient id="buildingBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#2266e0" />
            <stop offset="100%" stopColor="#0e419b" />
          </linearGradient>
          <linearGradient id="window" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#b6d4ff" />
            <stop offset="100%" stopColor="#84b6ff" />
          </linearGradient>
          <linearGradient id="leaf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#7aa57a" />
            <stop offset="100%" stopColor="#4e7d50" />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0a2660" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Sky */}
        <rect x="0" y="0" width="1400" height="360" fill="url(#sky)" />
        {/* Sun */}
        <circle cx="1180" cy="100" r="46" fill="#ffe8b8" opacity="0.85" />
        <circle cx="1180" cy="100" r="32" fill="#ffd47a" />
        {/* Clouds */}
        <g fill="#ffffff" opacity="0.9">
          <ellipse cx="220" cy="90"  rx="55" ry="14" />
          <ellipse cx="260" cy="76"  rx="32" ry="11" />
          <ellipse cx="900" cy="60"  rx="48" ry="12" />
          <ellipse cx="940" cy="50"  rx="28" ry="9" />
        </g>
        {/* Distant tree-line */}
        <g opacity="0.4">
          <path d="M 0 320 Q 100 280 200 320 T 400 320 T 600 320 T 800 320 T 1000 320 T 1200 320 T 1400 320 L 1400 360 L 0 360 Z" fill="#a8c4a8" />
        </g>

        {/* Ground / sidewalk */}
        <rect x="0" y="360" width="1400" height="160" fill="url(#ground)" />
        <line x1="0" y1="380" x2="1400" y2="380" stroke="#a9bbd6" strokeWidth="2" strokeDasharray="14 12" opacity="0.5" />

        {/* Tree — left */}
        <g transform="translate(140 360)" filter="url(#softShadow)">
          <rect x="-6" y="-30" width="12" height="40" fill="#7a5a3a" rx="2" />
          <circle cx="0"  cy="-70" r="46" fill="url(#leaf)" />
          <circle cx="-30" cy="-50" r="34" fill="url(#leaf)" />
          <circle cx="28"  cy="-52" r="36" fill="url(#leaf)" />
          <circle cx="-6"  cy="-100" r="30" fill="url(#leaf)" />
        </g>

        {/* Tree — right */}
        <g transform="translate(1280 360)" filter="url(#softShadow)">
          <rect x="-5" y="-26" width="10" height="36" fill="#7a5a3a" rx="2" />
          <circle cx="0"  cy="-60" r="40" fill="url(#leaf)" />
          <circle cx="-26" cy="-44" r="30" fill="url(#leaf)" />
          <circle cx="24"  cy="-46" r="32" fill="url(#leaf)" />
        </g>

        {/* Main building */}
        <g filter="url(#softShadow)">
          {/* Body */}
          <rect x="320" y="120" width="760" height="240" fill="url(#building)" rx="4" />
          {/* Left blue accent column */}
          <rect x="320" y="120" width="60" height="240" fill="url(#buildingBlue)" />
          {/* Right blue accent column */}
          <rect x="1020" y="120" width="60" height="240" fill="url(#buildingBlue)" />
          {/* Cornice (top trim) */}
          <rect x="312" y="112" width="776" height="14" fill="#0e419b" rx="2" />
          {/* Window grid — 4 cols × 2 rows */}
          {Array.from({ length: 4 }).flatMap((_, col) =>
            Array.from({ length: 2 }).map((_, row) => {
              const x = 420 + col * 150;
              const y = 150 + row * 90;
              return (
                <g key={`w-${col}-${row}`}>
                  <rect x={x} y={y} width="100" height="60" rx="6" fill="url(#window)" />
                  <line x1={x + 50} y1={y} x2={x + 50} y2={y + 60} stroke="#ffffff" strokeWidth="3" />
                  <line x1={x} y1={y + 30} x2={x + 100} y2={y + 30} stroke="#ffffff" strokeWidth="3" />
                </g>
              );
            })
          )}

          {/* Logo plaque on facade */}
          <g transform="translate(700 138)">
            <rect x="-30" y="-12" width="60" height="22" rx="4" fill="#0a2660" />
            <text
              x="0"
              y="3"
              textAnchor="middle"
              fontFamily="Manrope, sans-serif"
              fontSize="11"
              fontWeight="700"
              fill="#ffffff"
              letterSpacing="0.16em"
            >
              HOUBA
            </text>
          </g>

          {/* Entrance archway */}
          <rect x="660" y="260" width="80" height="100" rx="4" fill="#0e419b" />
          <rect x="668" y="268" width="64" height="80" rx="2" fill="#84b6ff" />
          <circle cx="724" cy="312" r="2.5" fill="#0e419b" />

          {/* Entrance steps */}
          <rect x="640" y="354" width="120" height="6"  fill="#c9d8ec" rx="1" />
          <rect x="650" y="360" width="100" height="0" />
          <rect x="630" y="360" width="140" height="0" />

          {/* Cross plaque (medical) */}
          <g transform="translate(560 144)">
            <rect x="-14" y="-14" width="28" height="28" rx="4" fill="#ffffff" stroke="#2266e0" strokeWidth="2" />
            <rect x="-3" y="-9" width="6" height="18" fill="#2266e0" />
            <rect x="-9" y="-3" width="18" height="6" fill="#2266e0" />
          </g>
          {/* Address plaque */}
          <g transform="translate(840 144)">
            <rect x="-30" y="-12" width="60" height="22" rx="11" fill="#ffffff" stroke="#b6d4ff" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="10" fontWeight="600" fill="#0a2660">N° 48</text>
          </g>
        </g>

        {/* Walking-path lines on sidewalk */}
        <g opacity="0.4">
          <path d="M 700 510 L 700 380" stroke="#a9bbd6" strokeWidth="3" strokeDasharray="6 10" />
        </g>

        {/* Patient figure — left of entrance */}
        <g transform="translate(610 360)">
          {/* Body */}
          <rect x="-12" y="-50" width="24" height="50" rx="6" fill="#e7c9a0" />
          {/* Head */}
          <circle cx="0" cy="-62" r="10" fill="#f4d8b3" />
          {/* Hair */}
          <path d="M -10 -68 Q 0 -78 10 -68 L 10 -62 L -10 -62 Z" fill="#5a3a22" />
          {/* Bag */}
          <circle cx="-16" cy="-22" r="5" fill="#0e419b" />
        </g>

        {/* Doctor figure — right of entrance, white coat */}
        <g transform="translate(790 360)">
          {/* Legs */}
          <rect x="-10" y="-22" width="8"  height="22" fill="#1a2a4a" />
          <rect x="2"   y="-22" width="8"  height="22" fill="#1a2a4a" />
          {/* Coat body */}
          <path d="M -16 -54 L 16 -54 L 18 -22 L -18 -22 Z" fill="#ffffff" stroke="#d9eaff" strokeWidth="1.5" />
          {/* Inner shirt */}
          <rect x="-4" y="-54" width="8" height="20" fill="#84b6ff" />
          {/* Stethoscope */}
          <path d="M -8 -50 Q -2 -42 4 -50" fill="none" stroke="#2266e0" strokeWidth="2" />
          <circle cx="4" cy="-50" r="2" fill="#2266e0" />
          {/* Head */}
          <circle cx="0" cy="-66" r="10" fill="#f4d8b3" />
          {/* Hair */}
          <path d="M -10 -72 Q 0 -82 10 -72 L 10 -66 L -10 -66 Z" fill="#3a2a18" />
        </g>

        {/* Little flower bed */}
        <g transform="translate(200 360)">
          <rect x="-30" y="-6" width="60" height="6" fill="#7a5a3a" rx="1" />
          <circle cx="-18" cy="-10" r="4" fill="#e76f51" />
          <circle cx="-6"  cy="-12" r="4" fill="#f5b400" />
          <circle cx="8"   cy="-10" r="4" fill="#e76f51" />
          <circle cx="20"  cy="-12" r="4" fill="#f5b400" />
        </g>
      </svg>
    </div>
  );
}
