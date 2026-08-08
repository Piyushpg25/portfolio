"use client";

import { motion } from "motion/react";

export function HeroVisual() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{
        opacity: 0,
        scale: 0.92,
        rotate: -4,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: "easeOut",
      }}
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-8 rounded-full border"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-16 rounded-full border border-dashed"
      />

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-background/80 shadow-2xl backdrop-blur"
      >
        <div className="flex h-full items-center justify-center text-2xl font-semibold">
          PX
        </div>
      </motion.div>
    </motion.div>
  );
}