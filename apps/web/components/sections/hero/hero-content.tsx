"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export function HeroContent() {
  return (
    <div className="max-w-3xl">
      <motion.div variants={itemVariants}>
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-4 py-1.5"
        >
          Available for opportunities
        </Badge>
      </motion.div>

      <motion.h1
        id="hero-heading"
        variants={itemVariants}
        className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
      >
        I build scalable{" "}
        <span className="text-muted-foreground">
          digital products.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl"
      >
        Software engineer focused on building reliable,
        performant and user-friendly applications across
        the modern web stack.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Button asChild size="lg">
          <Link href="#projects">
            View Projects
            <ArrowRight size={18} />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
        >
          <Link href="#contact">
            Contact Me
          </Link>
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link
          href="#skills"
          className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll to explore
          <ArrowDown size={16} />
        </Link>
      </motion.div>
    </div>
  );
}