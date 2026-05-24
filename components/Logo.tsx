type Props = {
  size?: number;
  rounded?: number;
  background?: string;
  className?: string;
  ariaLabel?: string;
};

/**
 * HOUBA logo — stylised M + H + house silhouette in white on a blue
 * rounded rectangle. Two upright bars (serving as both the M legs and
 * the H legs) with a deep V cut at the top between them and a peaked
 * house silhouette inside the lower H opening.
 */
export default function Logo({
  size = 44,
  rounded = 12,
  background = "linear-gradient(180deg, #2c8be0 0%, #1e6fcc 100%)",
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
        width="72%"
        height="72%"
        aria-hidden="true"
        focusable="false"
      >
        {/* Outer M+H letterform in white */}
        <path
          d="
            M 8 10
            L 8 152
            L 42 152
            L 42 96
            L 78 96
            L 78 152
            L 112 152
            L 112 10
            L 78 10
            L 60 54
            L 42 10
            Z
          "
          fill="#ffffff"
        />
        {/* Peaked house silhouette inside the lower H opening (in blue) */}
        <g transform="translate(60 132)">
          <path
            d="
              M 0 -22
              L -16 -6
              L -13 -6
              L -13 14
              L -4 14
              L -4 0
              L 4 0
              L 4 14
              L 13 14
              L 13 -6
              L 16 -6
              Z
            "
            fill="#1e6fcc"
          />
        </g>
      </svg>
    </span>
  );
}
