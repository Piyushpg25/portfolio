"use client";

import { motion } from "motion/react";

interface HeaderMotionProps {
  children: React.ReactNode;
}

export function HeaderMotion({
  children,
}: HeaderMotionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}