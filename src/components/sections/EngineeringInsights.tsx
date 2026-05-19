'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { writing, type Article } from '@/lib/data';
import ArticleModal from '@/components/ArticleModal';

/**
 * Engineering Insights section.
 *
 * Presents technical writing — essays and notes on firmware engineering,
 * debugging, and growing as an engineer. Replaces the earlier "Projects"
 * section, which implied shipped products that don't exist.
 *
 * Keeps the same interaction as the old projects list: a clean numbered
 * text list (not cards), and clicking a row opens the article in a modal.
 * With a single article the list is one row, which still reads correctly
 * as "selected writing".
 */
export default function EngineeringInsights() {
  const [active, setActive] = useState<Article | null>(null);

  return (
    <section
      id="works"
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
          04 — Engineering Insights
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="h-section mb-10 max-w-3xl text-balance"
        >
          Thoughts on firmware engineering, debugging complex systems, and
          growing as an engineer.
        </motion.h2>

        <ul className="border-t border-line">
          {writing.map((article, i) => (
            <motion.li
              key={article.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-line"
            >
              <button
                type="button"
                onClick={() => setActive(article)}
                className="group flex w-full items-start justify-between gap-6 py-6 md:py-8 text-left transition-colors hover:bg-white/[0.02]"
                aria-label={`Read: ${article.title}`}
              >
                <div className="flex gap-4 md:gap-6">
                  <span className="font-mono text-[11px] tracking-wide text-ink-muted shrink-0 pt-1 md:w-10">
                    0{i + 1}
                  </span>

                  <div className="space-y-2">
                    <span className="block font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </span>
                    <span className="block text-ink-soft text-[15px] leading-relaxed max-w-xl">
                      {article.excerpt}
                    </span>
                    <span className="block font-mono text-[11px] tracking-wide text-ink-muted">
                      {article.category} · {article.readingTime}
                    </span>
                  </div>
                </div>

                {/* Plus glyph — rotates on hover. Reads as "expand to read",
                    which is honest; an arrow would imply an external link. */}
                <span
                  className="shrink-0 font-mono text-xl leading-none text-ink-muted pt-1 transition-all duration-300 group-hover:text-accent group-hover:rotate-90"
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <ArticleModal article={active} onClose={() => setActive(null)} />
    </section>
  );
}
