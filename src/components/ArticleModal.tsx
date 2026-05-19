'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Article } from '@/lib/data';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

/**
 * Reading modal for an Engineering Insights article.
 *
 * Renders the article's `body` array: each string is a paragraph, except
 * strings prefixed with "## ", which render as section sub-headings. The
 * reading column is width-capped for a comfortable line length even though
 * the modal itself is wider.
 *
 * Behavior: closes on ESC, backdrop click, and the close button; locks body
 * scroll while open; animated with framer-motion.
 */
export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (!article) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <motion.article
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-md border border-line bg-bg-card p-6 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close article"
              className="absolute top-4 right-4 text-ink-muted hover:text-accent transition-colors"
            >
              <X size={20} />
            </button>

            {/* Category + reading time */}
            <p className="eyebrow mb-3">
              {article.category} · {article.readingTime}
            </p>

            {/* Title */}
            <h2
              id="article-modal-title"
              className="font-display text-2xl md:text-3xl text-ink leading-tight mb-8 max-w-[36ch]"
            >
              {article.title}
            </h2>

            {/* Body — reading column capped for line length */}
            <div className="max-w-[640px] space-y-5">
              {article.body.map((block, i) =>
                block.startsWith('## ') ? (
                  <h3
                    key={i}
                    className="font-display text-xl text-ink pt-3 leading-snug"
                  >
                    {block.slice(3)}
                  </h3>
                ) : (
                  <p
                    key={i}
                    className="text-ink-soft text-[15px] md:text-base leading-relaxed"
                  >
                    {block}
                  </p>
                )
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
