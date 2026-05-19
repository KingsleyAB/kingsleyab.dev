'use client';

import { personal } from '@/lib/data';

/**
 * Fixed vertical sidebar on the right edge of the viewport.
 *
 * Layout (top → bottom):
 *   LINKEDIN (rotated 90°, text reading bottom-to-top)
 *   GITHUB
 *   EMAIL
 *   ─────  (thin vertical line)
 *   ↓      (small down chevron, gently bouncing)
 *
 * Hidden on mobile (< md) so it doesn't compete with content on narrow
 * viewports. Matches the reference site's exact composition.
 */
export default function SocialSidebar() {
  const items = [
    { label: 'LINKEDIN', href: personal.linkedin },
    { label: 'GITHUB', href: personal.github },
    { label: 'EMAIL', href: `mailto:${personal.email}` },
  ];

  return (
    <aside
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:flex md:flex-col md:items-center md:gap-8"
      aria-label="Social links"
    >
      <ul className="flex flex-col items-center gap-10">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-[10px] tracking-mega-wide text-ink-muted
                         transition-colors duration-300 hover:text-accent
                         [writing-mode:vertical-rl] rotate-180"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Thin vertical line + chevron — the classic "scroll for more" motif */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <span className="block h-20 w-px bg-line" aria-hidden="true" />
        <svg
          className="h-3 w-3 animate-bounce-soft text-ink-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </aside>
  );
}
