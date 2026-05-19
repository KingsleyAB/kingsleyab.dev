import { personal } from '@/lib/data';

/**
 * Footer. Quiet and resume-like: name, location, year, and a small set of
 * links. No marketing flourishes.
 */
export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center md:px-12">
        <div className="space-y-1">
          <p className="font-display text-base text-ink">{personal.name}</p>
          <p className="font-mono text-[11px] tracking-wide text-ink-muted">
            {personal.title} · {personal.location}
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6">
          <span className="font-mono text-[11px] tracking-wide text-ink-muted">
            © {new Date().getFullYear()} · All rights reserved
          </span>
          <a
            href="#hero"
            className="font-mono text-[11px] tracking-extra-wide uppercase text-ink-soft hover:text-accent transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
