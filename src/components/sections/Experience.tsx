'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

/**
 * Experience section. Resume-style timeline: company / role / period header
 * on the left, bulleted responsibilities on the right. Connected by a thin
 * vertical line so it reads as a continuous timeline rather than a list of
 * disconnected cards.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-24 md:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          02 — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="h-section mb-12"
        >
          Where I&apos;ve worked.
        </motion.h2>

        <ol className="relative space-y-12 md:space-y-16 border-l border-line pl-6 md:pl-10">
          {experience.map((job, i) => (
            <motion.li
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span
                className="absolute -left-[31px] md:-left-[45px] top-2 block h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                aria-hidden="true"
              />

              <div className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10">
                {/* Period & company */}
                <div className="space-y-1">
                  <p className="font-mono text-[11px] tracking-wide uppercase text-ink-muted">
                    {job.period}
                  </p>
                  <p className="font-mono text-[11px] tracking-wide text-ink-muted">
                    {job.location}
                  </p>
                </div>

                {/* Role & bullets */}
                <div className="space-y-3">
                  <h3 className="font-display text-xl md:text-2xl text-ink leading-snug">
                    {job.role}{' '}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>

                  <ul className="space-y-2 text-ink-soft leading-relaxed">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[15px]">
                        <span
                          className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
