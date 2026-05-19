'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '@/lib/data';

/**
 * Page-load overlay. Shows the user's initials briefly, then fades away.
 * Keep this short — ~900ms total — to avoid annoying repeat visitors.
 *
 * We use sessionStorage so the loader only shows once per browser session.
 */
export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Skip the loader for repeat in-session visits
    if (typeof window !== 'undefined' && sessionStorage.getItem('loaded')) {
      setShow(false);
      return;
    }

    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('loaded', '1');
    }, 900);

    return () => clearTimeout(t);
  }, []);

  // Derive initials from the name in data.ts so this stays in sync.
  const initials = personal.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display text-5xl tracking-tight text-ink"
          >
            <span className="text-accent">{initials[0]}</span>
            {initials[1]}
            <span className="ml-1 inline-block h-1 w-1 translate-y-[-6px] rounded-full bg-accent animate-blink" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
