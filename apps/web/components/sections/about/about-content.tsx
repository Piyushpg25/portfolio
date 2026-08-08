"use client";

import { motion } from "motion/react";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function AboutContent() {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="max-w-2xl"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        About / Engineering Profile
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        I enjoy turning complex problems into simple,
        reliable software.
      </h2>

      <div className="mt-6 space-y-4 text-base leading-7 text-foreground/70 sm:text-lg">
        <p>
          I&apos;m a software engineer focused on building
          modern web applications with a strong emphasis
          on performance, maintainability and user
          experience.
        </p>

        <p>
          I enjoy working across the stack — from
          designing interfaces and APIs to working with
          databases, cloud infrastructure and deployment
          pipelines.
        </p>

        <p>
          My goal is not just to make software work, but
          to understand how it behaves in production and
          continuously improve it.
        </p>
      </div>
    </motion.div>
  );
}