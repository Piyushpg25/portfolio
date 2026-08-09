"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Sparkle,
} from "@phosphor-icons/react";
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
      {/* Availability */}
      <motion.div variants={itemVariants}>
        <Badge
          variant="outline"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border-border/70
            bg-background/70
            px-3
            py-1.5
            text-xs
            font-medium
            text-muted-foreground
            shadow-sm
            backdrop-blur-sm
          "
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>

          Available for opportunities
        </Badge>
      </motion.div>

      {/* Heading */}
      <motion.h1
        id="hero-heading"
        variants={itemVariants}
        className="
          mt-7
          text-balance
          text-5xl
          font-semibold
          leading-[1.02]
          tracking-[-0.045em]
          text-foreground
          sm:text-6xl
          lg:text-7xl
          xl:text-[5.25rem]
        "
      >
        I build scalable{" "}
        <span
          className="
            bg-gradient-to-r
            from-foreground
            via-foreground
            to-muted-foreground
            bg-clip-text
            text-transparent
          "
        >
          digital products.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="
          mt-7
          max-w-2xl
          text-pretty
          text-base
          leading-7
          text-muted-foreground
          sm:text-lg
          sm:leading-8
        "
      >
        Software engineer focused on building reliable,
        performant and user-friendly applications across
        the modern web stack.
      </motion.p>

      {/* Actions */}
      <motion.div
        variants={itemVariants}
        className="mt-9 flex flex-col gap-3 sm:flex-row"
      >
        {/* Primary */}
        <Button
          asChild
          size="lg"
          className="
            group
            h-12
            rounded-xl
            !border-neutral-900
            !bg-neutral-900
            px-5
            !text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:!bg-neutral-800
            hover:shadow-lg
            dark:!border-white
            dark:!bg-white
            dark:!text-black
            dark:hover:!bg-neutral-200
          "
        >
          <Link href="#projects">
            View Projects

            <ArrowRight
              size={18}
              weight="bold"
              className="
                ml-1
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </Button>

        {/* Secondary */}
        <Button
          asChild
          variant="outline"
          size="lg"
          className="
            h-12
            rounded-xl
            border-border/70
            bg-background/60
            px-5
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-muted
            hover:shadow-md
          "
        >
          <Link href="#contact">
            Contact Me
          </Link>
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div variants={itemVariants}>
        <Link
          href="#skills"
          className="
            group
            mt-14
            inline-flex
            items-center
            gap-2
            text-sm
            text-muted-foreground
            transition-colors
            duration-200
            hover:text-foreground
          "
        >
          <span>Scroll to explore</span>

          <motion.span
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={16}
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}