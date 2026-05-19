/**
 * Decorative concentric arc rings that radiate from the top-right corner.
 * Pure SVG, fixed-positioned, pointer-events-none — purely atmosphere.
 *
 * Why SVG rather than CSS radial-gradient: arcs need crisp 1px strokes that
 * don't soften as the viewport scales. SVG also lets us drop the bottom-left
 * quadrant cleanly so the rings don't reach into the content area.
 */
export default function BackgroundArcs() {
  // Eight rings, gently fading toward the outer edge. Radii increase linearly
  // so the visual rhythm stays even.
  const rings = [240, 380, 520, 660, 800, 940, 1080, 1220];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute -top-[200px] -right-[200px] h-[1800px] w-[1800px] md:-top-[300px] md:-right-[300px] md:h-[2200px] md:w-[2200px]"
        viewBox="0 0 1600 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rings.map((r, i) => (
          <circle
            key={r}
            cx="1600"
            cy="0"
            r={r}
            stroke="rgba(232, 230, 225, 0.06)"
            strokeWidth={i === 0 ? 1.2 : 1}
            // The innermost ring gets a hair more presence; outer rings fade.
            opacity={1 - i * 0.07}
          />
        ))}
        {/* Subtle inner halo — a very faint gradient swell so the corner has
            a little luminance, not a flat dark plane. */}
        <defs>
          <radialGradient id="cornerGlow" cx="1" cy="0" r="0.6">
            <stop offset="0%" stopColor="rgba(212, 175, 106, 0.06)" />
            <stop offset="60%" stopColor="rgba(212, 175, 106, 0)" />
          </radialGradient>
        </defs>
        <rect width="1600" height="1600" fill="url(#cornerGlow)" />
      </svg>

      {/* A second, very faint set of arcs at the bottom-left to keep the
          composition from feeling lopsided. Optional — comment out if it
          fights with the reference too much. */}
      <svg
        className="absolute -bottom-[400px] -left-[400px] hidden h-[1200px] w-[1200px] lg:block"
        viewBox="0 0 1200 1200"
        fill="none"
      >
        {[300, 480, 660, 840].map((r, i) => (
          <circle
            key={r}
            cx="0"
            cy="1200"
            r={r}
            stroke="rgba(232, 230, 225, 0.025)"
            strokeWidth={1}
            opacity={1 - i * 0.15}
          />
        ))}
      </svg>
    </div>
  );
}
