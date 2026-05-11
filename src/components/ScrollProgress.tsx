"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] bg-accent-500/30 origin-left z-[99] blur-sm"
        style={{ scaleX }}
      />
    </>
  );
}
