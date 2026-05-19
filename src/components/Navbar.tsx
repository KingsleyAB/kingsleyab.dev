'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '@/lib/data';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Insights', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Top nav. Translucent by default; gains a subtle background and bottom
 * border once the user has scrolled past the hero so it doesn't fight with
 * the hero copy on first paint.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        {/* Wordmark — first name in display serif, last initial in accent */}
        <a
          href="#hero"
          className="font-display text-xl tracking-tight text-ink hover:text-accent transition-colors"
        >
          {personal.firstName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center md:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-extra-wide uppercase text-ink-soft hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden text-ink-soft hover:text-accent transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-line bg-bg/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-[11px] tracking-extra-wide uppercase text-ink-soft hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
