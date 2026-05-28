/**
 * Editorial rotating seal — circular text wraps a central medical cross.
 * Used as a decorative mark anchored in the hero. Pure SVG + CSS rotation.
 */
export default function HeroSeal() {
  return (
    <div className="hero-seal" aria-hidden="true">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Circular path the text rides on (radius ~85) */}
          <path
            id="hero-seal-path"
            d="M 100 100 m -85 0 a 85 85 0 1 1 170 0 a 85 85 0 1 1 -170 0"
            fill="none"
          />
        </defs>

        {/* Outer thin ring */}
        <circle cx="100" cy="100" r="98" fill="none" stroke="#0e419b" strokeWidth="1.5" opacity="0.35" />
        <circle cx="100" cy="100" r="74"  fill="none" stroke="#0e419b" strokeWidth="1"   opacity="0.25" />

        {/* Tick marks every 30deg on the outer ring */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const r1 = 88;
          const r2 = 96;
          const x1 = 100 + Math.cos(a) * r1;
          const y1 = 100 + Math.sin(a) * r1;
          const x2 = 100 + Math.cos(a) * r2;
          const y2 = 100 + Math.sin(a) * r2;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0e419b" strokeWidth="1.5" opacity="0.5" />;
        })}

        {/* Rotating text along the circle */}
        <g className="hero-seal-spin">
          <text
            fill="#0e419b"
            fontFamily="Fraunces, Georgia, serif"
            fontSize="11.5"
            letterSpacing="3"
            fontWeight="600"
            style={{ textTransform: "uppercase" }}
          >
            <textPath href="#hero-seal-path" startOffset="0">
              · Maison Médicale Houba · De Wand · Laeken · ASBL agréée
            </textPath>
          </text>
        </g>

        {/* Central composition: small cross + H mark */}
        <g transform="translate(100 100)">
          {/* Soft inner disc */}
          <circle r="40" fill="#ffffff" />
          <circle r="40" fill="none" stroke="#0e419b" strokeWidth="1" opacity="0.4" />
          {/* Cross */}
          <rect x="-5"  y="-22" width="10" height="44" rx="2" fill="#0e419b" />
          <rect x="-22" y="-5"  width="44" height="10" rx="2" fill="#0e419b" />
        </g>
      </svg>
    </div>
  );
}
