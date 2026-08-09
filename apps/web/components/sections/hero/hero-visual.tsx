"use client";

import {
  Code,
  Database,
  Globe,
  Lightning,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

import { HeroThree } from "@/components/sections/hero/hero-three";

const orbitTransition = {
  duration: 24,
  repeat: Infinity,
  ease: "linear" as const,
};

export function HeroVisual() {
  return (
    <div
      className="
        relative
        flex
        min-h-[420px]
        w-full
        items-center
        justify-center
        overflow-hidden
        sm:min-h-[500px]
        lg:min-h-[600px]
      "
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          size-[65%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[90px]
        "
      />

      {/* Secondary glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          size-[38%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-foreground/5
          blur-3xl
        "
      />

      {/* Three.js centerpiece */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          size-[78%]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <HeroThree />
      </div>

      {/* Outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        className="
          absolute
          inset-[6%]
          z-20
          rounded-full
          border
          border-foreground/10
        "
      />

      {/* Dashed orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          ...orbitTransition,
          duration: 32,
        }}
        className="
          absolute
          inset-[16%]
          z-20
          rounded-full
          border
          border-dashed
          border-foreground/10
        "
      />

      {/* Orbit nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        className="
          absolute
          inset-[6%]
          z-30
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            size-3
            -translate-x-1/2
            rounded-full
            bg-foreground
            shadow-[0_0_20px_rgba(255,255,255,0.25)]
          "
        />

        <div
          className="
            absolute
            bottom-[12%]
            left-[8%]
            size-2
            rounded-full
            bg-foreground/50
          "
        />
      </motion.div>

      {/* Identity Card */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.7,
          },
          scale: {
            duration: 0.7,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          w-[68%]
          max-w-md
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-foreground/10
            bg-background/75
            p-5
            shadow-2xl
            backdrop-blur-2xl
            sm:p-6
          "
        >
          {/* Card glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              size-40
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          {/* Header */}
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
                Software Engineer
              </p>

              <p className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
                Piyush
              </p>
            </div>

            <div
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-2xl
                border
                border-border/70
                bg-muted/50
                shadow-sm
                sm:size-11
              "
            >
              <Code
                size={21}
                weight="duotone"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-border/70 sm:my-6" />

          {/* Tech stack */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <TechItem
              icon={<Globe size={17} />}
              label="Web"
            />

            <TechItem
              icon={<Database size={17} />}
              label="Backend"
            />

            <TechItem
              icon={<Lightning size={17} />}
              label="Cloud"
            />

            <TechItem
              icon={<Code size={17} />}
              label="Systems"
            />
          </div>

          {/* Status */}
          <div className="mt-5 flex items-center gap-2 text-[11px] text-muted-foreground sm:text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/50" />

              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>

            Building production systems
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface TechItemProps {
  icon: React.ReactNode;
  label: string;
}

function TechItem({
  icon,
  label,
}: TechItemProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-2.5
        rounded-xl
        border
        border-border/60
        bg-muted/30
        px-3
        py-2.5
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-border
        hover:bg-muted/60
      "
    >
      <span className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {label}
      </span>
    </div>
  );
}