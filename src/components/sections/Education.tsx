'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/data';

/**
 * Education section. Same visual rhythm as Experience but lighter — typically
 * shorter content. Edit the entries in src/lib/data.ts.
 */
export default function Education() {
  return (
    <section
      id="education"
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
          03 — Education
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="h-section mb-12"
        >
          Where I studied.
        </motion.h2>

        <ol className="relative space-y-10 border-l border-line pl-6 md:pl-10">
          {education.map((edu, i) => (
            <motion.li
              key={`${edu.school}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span
                className="absolute -left-[31px] md:-left-[45px] top-2 block h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
                aria-hidden="true"
              />

              <div className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10">
                <p className="font-mono text-[11px] tracking-wide uppercase text-ink-muted">
                  {edu.period}
                </p>

                <div className="space-y-2">
                  <h3 className="font-display text-xl md:text-2xl text-ink leading-snug">
                    {edu.school}
                  </h3>
                  <p className="font-mono text-[12px] tracking-wide text-accent">
                    {edu.degree}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
