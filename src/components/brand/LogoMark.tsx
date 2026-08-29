/**
 * LogoMark — vector fallback for the NW monogram, colour-matched to the
 * real artwork in public/images/logo.png (violet #3b027a N over azure
 * #0170cc W, separated by a white keyline). Flat colour, no gradients.
 *
 * This only renders if `/images/logo.png` is missing. That file is present,
 * so in normal operation the real logo is used.
 */
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1489 1080"
      role="img"
      aria-label="NW Aesthetics"
      className={className}
    >
      {/* azure W, sitting behind */}
      <path
        d="M585 25 L700 890 L980 25 L1120 890 L1345 25"
        fill="none"
        stroke="#0170cc"
        strokeWidth="230"
        strokeLinejoin="miter"
        strokeMiterlimit="12"
      />

      {/* white keyline that separates the N from the W */}
      <path
        d="M130 900 L355 178 L625 900 L850 178"
        fill="none"
        stroke="#ffffff"
        strokeWidth="248"
        strokeLinejoin="miter"
        strokeMiterlimit="12"
      />

      {/* violet N, in front */}
      <path
        d="M130 900 L355 178 L625 900 L850 178"
        fill="none"
        stroke="#3b027a"
        strokeWidth="200"
        strokeLinejoin="miter"
        strokeMiterlimit="12"
      />
    </svg>
  );
}
