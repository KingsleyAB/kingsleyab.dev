'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import { personal } from '@/lib/data';

/**
 * Hero section.
 *
 * Composition (top → bottom):
 *  - eyebrow greeting in mono
 *  - big display name
 *  - "I am a [TYPEWRITER]" line that cycles through rotatingTitles
 *  - short summary paragraph
 *  - row of mono pill buttons: LinkedIn / GitHub / Email / Resume
 *  - location chip at the bottom
 *
 * Sized to fill at least the viewport so it reads as a clean landing screen.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Greeting eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow mb-6"
        >
          {personal.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-ink mb-6 text-balance"
        >
          I am{' '}
          <span className="text-accent">{personal.name}</span>
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-2xl md:text-4xl text-ink-soft mb-2"
        >
           <Typewriter words={personal.rotatingTitles} />
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-[12px] tracking-extra-wide uppercase text-ink-muted mb-10"
        >
          Based in {personal.location}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl text-ink-soft text-base md:text-lg leading-relaxed mb-10"
        >
          {personal.heroSummary}
        </motion.p>

        {/* Pill buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            <Linkedin size={13} />
            <span>LinkedIn</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>
          <a href={`mailto:${personal.email}`} className="btn-pill">
            <Mail size={13} />
            <span>Email</span>
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill border-accent/40 text-accent hover:border-accent hover:bg-accent/5"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Typewriter                                    */
/* -------------------------------------------------------------------------- */

/**
 * Lightweight typewriter that cycles through an array of strings.
 *
 * State machine:
 *  - "typing"   → add one character every TYPE_MS ms
 *  - "holding"  → pause for HOLD_MS ms once the word is complete
 *  - "deleting" → remove one character every DELETE_MS ms
 *  - on empty   → advance to the next word and start "typing" again
 */
function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  const TYPE_MS = 80;
  const DELETE_MS = 40;
  const HOLD_MS = 1600;

  useEffect(() => {
    const word = words[index];

    if (phase === 'typing') {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), TYPE_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('deleting'), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const t = setTimeout(() => setText(word.slice(0, text.length - 1)), DELETE_MS);
        return () => clearTimeout(t);
      }
      setIndex((i) => (i + 1) % words.length);
      setPhase('typing');
    }
  }, [text, phase, index, words]);

  return (
    <span className="inline-block">
      <span className="text-ink italic">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] -translate-y-[2px] bg-accent align-middle animate-blink" />
    </span>
  );
}
