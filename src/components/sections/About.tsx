'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { about, personal } from '@/lib/data';

/**
 * About section.
 *
 * Layout: two-column on desktop (photo left, content right), stacked on mobile.
 *
 * Photo: if /public/images/profile.jpg exists it renders normally. If it
 * fails to load (placeholder case) we show a clean bordered placeholder
 * with instructions on how to drop the photo in.
 */
export default function About() {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section
      id="about"
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
          01 — About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="h-section mb-12"
        >
          A little about me.
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-[300px_1fr] md:gap-16 md:items-start">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {!photoMissing ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line">
                <Image
                  src="/images/profile.jpg"
                  alt={`Portrait of ${personal.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  onError={() => setPhotoMissing(true)}
                  priority
                />
              </div>
            ) : (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-dashed border-line bg-bg-soft flex items-center justify-center p-6">
                <div className="text-center space-y-2">
                  <p className="font-mono text-[10px] tracking-extra-wide uppercase text-ink-muted">
                    Photo placeholder
                  </p>
                  <p className="font-mono text-[11px] text-ink-soft leading-relaxed">
                    Drop a photo at:
                  </p>
                  <code className="block font-mono text-[10px] text-accent break-all">
                    /public/images/profile.jpg
                  </code>
                </div>
              </div>
            )}

            {/* Decorative offset frame, like the reference site */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full rounded-sm border border-accent/30 md:block -z-10"
            />
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-ink-soft leading-relaxed"
          >
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="pt-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill border-accent/40 text-accent hover:border-accent hover:bg-accent/5"
              >
                <Download size={13} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Expertise */}
            <div className="pt-10">
              <p className="eyebrow mb-4">Expertise</p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {about.expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-ink-soft text-sm"
                  >
                    <span className="block h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
