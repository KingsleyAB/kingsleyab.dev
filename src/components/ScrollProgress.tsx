'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin scroll-progress bar pinned to the top of the viewport. Spring-smoothed
 * so it glides instead of snapping. Uses the accent gold so it reads as
 * intentional ornament, not a loading bar.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
