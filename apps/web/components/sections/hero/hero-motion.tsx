"use client";

import { motion } from "motion/react";

interface HeroMotionProps {
  children: React.ReactNode;
}

export function HeroMotion({
  children,
}: HeroMotionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}