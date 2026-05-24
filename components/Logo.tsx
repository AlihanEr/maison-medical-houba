type Props = {
  size?: number;
  rounded?: number;
  background?: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * HOUBA logo — stylised M + H + house silhouette in white on blue.
 * Reconstructed from the original brand mark.
 */
export default function Logo({
  size = 44,
  rounded = 14,
  background = "linear-gradient(135deg, #2266e0 0%, #0e419b 100%)",
  className,
  ariaLabel = "Maison Médicale Houba",
}: Props) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: size,
        height: size,
        borderRadius: rounded,
        background,
        flexShrink: 0,
        boxShadow: "0 1px 3px rgba(10,38,96,0.18)",
      }}
    >
      <svg
        viewBox="0 0 120 160"
        width="68%"
        height="68%"
        aria-hidden="true"
        focusable="false"
      >
        {/* M + H fused: two tall verticals with peaked tops + a deep V cut between */}
        <path
          d="
            M 6 14
            L 6 146
            L 38 146
            L 38 92
            L 82 92
            L 82 146
            L 114 146
            L 114 14
            L 82 14
            L 82 62
            L 60 32
            L 38 62
            L 38 14
            Z
          "
          fill="#ffffff"
        />
        {/* House silhouette inside the lower H crossbar */}
        <g transform="translate(60 118)">
          <path
            d="
              M 0 -16
              L -18 0
              L -16 0
              L -16 16
              L 16 16
              L 16 0
              L 18 0
              Z
            "
            fill="#2266e0"
          />
        </g>
      </svg>
    </span>
  );
}
