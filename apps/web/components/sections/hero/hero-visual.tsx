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
  duration: 28,
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
      {/* ========================================================= */}
      {/* Ambient background */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          size-[72%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.08]
          blur-[110px]
          dark:bg-blue-500/[0.13]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          size-[42%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/[0.07]
          blur-[80px]
          dark:bg-violet-500/[0.12]
        "
      />

      {/* ========================================================= */}
      {/* HD radial gradient */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_48%)]
          dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.14),transparent_48%)]
        "
      />

      {/* ========================================================= */}
      {/* Subtle rings */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-[3%]
          rounded-full
          border
          border-blue-500/[0.06]
          dark:border-blue-400/[0.12]
        "
      />

      <div
        className="
          absolute
          inset-[11%]
          rounded-full
          border
          border-violet-500/[0.05]
          dark:border-violet-400/[0.10]
        "
      />

      {/* ========================================================= */}
      {/* Three.js centerpiece */}
      {/* ========================================================= */}

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

      {/* ========================================================= */}
      {/* Outer orbit */}
      {/* ========================================================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        className="
          absolute
          inset-[6%]
          z-20
          rounded-full
          border
          border-blue-500/[0.12]
          shadow-[0_0_40px_rgba(59,130,246,0.04)]
          dark:border-blue-400/[0.18]
        "
      />

      {/* ========================================================= */}
      {/* Inner dashed orbit */}
      {/* ========================================================= */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          ...orbitTransition,
          duration: 36,
        }}
        className="
          absolute
          inset-[16%]
          z-20
          rounded-full
          border
          border-dashed
          border-violet-500/[0.10]
          dark:border-violet-400/[0.16]
        "
      />

      {/* ========================================================= */}
      {/* Orbit nodes */}
      {/* ========================================================= */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        className="
          absolute
          inset-[6%]
          z-30
        "
      >
        {/* Blue primary node */}
        <div
          className="
            absolute
            left-1/2
            top-0
            size-3
            -translate-x-1/2
            rounded-full
            bg-blue-500
            shadow-[0_0_20px_rgba(59,130,246,0.65)]
            dark:bg-blue-400
            dark:shadow-[0_0_25px_rgba(96,165,250,0.8)]
          "
        />

        {/* Violet secondary node */}
        <div
          className="
            absolute
            bottom-[12%]
            left-[8%]
            size-2
            rounded-full
            bg-violet-500/70
            shadow-[0_0_14px_rgba(139,92,246,0.5)]
            dark:bg-violet-400/80
          "
        />

        {/* Cyan tiny node */}
        <div
          className="
            absolute
            right-[10%]
            top-[28%]
            size-1.5
            rounded-full
            bg-cyan-500/70
            shadow-[0_0_12px_rgba(6,182,212,0.5)]
            dark:bg-cyan-400/80
          "
        />
      </motion.div>

      {/* ========================================================= */}
      {/* Identity Card */}
      {/* ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 0.8,
          },
          y: {
            duration: 5,
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
            rounded-[28px]
            border
            border-blue-500/10
            bg-background/75
            p-5
            shadow-[0_25px_80px_rgba(0,0,0,0.10)]
            backdrop-blur-2xl
            dark:border-white/[0.10]
            dark:bg-zinc-950/65
            dark:shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            sm:p-6
          "
        >
          {/* Top gradient highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-500/60
              to-transparent
              dark:via-blue-400/70
            "
          />

          {/* Card ambient glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              size-48
              rounded-full
              bg-blue-500/[0.10]
              blur-3xl
              dark:bg-blue-500/[0.16]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              size-40
              rounded-full
              bg-violet-500/[0.07]
              blur-3xl
              dark:bg-violet-500/[0.12]
            "
          />

          {/* ===================================================== */}
          {/* Header */}
          {/* ===================================================== */}

          <div className="relative flex items-center justify-between">
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-blue-600/70
                  dark:text-blue-400/80
                  sm:text-xs
                "
              >
                Software Engineer
              </p>

              <p
                className="
                  mt-1.5
                  text-xl
                  font-semibold
                  tracking-[-0.03em]
                  text-foreground
                  sm:text-2xl
                "
              >
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
                border-blue-500/10
                bg-blue-500/[0.06]
                text-blue-600
                shadow-sm
                dark:border-blue-400/15
                dark:bg-blue-400/[0.08]
                dark:text-blue-400
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
          <div
            className="
              my-5
              h-px
              bg-gradient-to-r
              from-transparent
              via-border
              to-transparent
              sm:my-6
            "
          />

          {/* ===================================================== */}
          {/* Tech stack */}
          {/* ===================================================== */}

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <TechItem
              icon={<Globe size={17} />}
              label="Web"
              color="blue"
            />

            <TechItem
              icon={<Database size={17} />}
              label="Backend"
              color="violet"
            />

            <TechItem
              icon={<Lightning size={17} />}
              label="Cloud"
              color="cyan"
            />

            <TechItem
              icon={<Code size={17} />}
              label="Systems"
              color="emerald"
            />
          </div>

          {/* ===================================================== */}
          {/* Status */}
          {/* ===================================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-[11px]
              text-muted-foreground
              sm:text-xs
            "
          >
            <span className="relative flex size-2">
              <span
                className="
                  absolute
                  inline-flex
                  size-full
                  animate-ping
                  rounded-full
                  bg-emerald-500/50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  size-2
                  rounded-full
                  bg-emerald-500
                  shadow-[0_0_10px_rgba(16,185,129,0.5)]
                "
              />
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
  color: "blue" | "violet" | "cyan" | "emerald";
}

function TechItem({
  icon,
  label,
  color,
}: TechItemProps) {
  const colorStyles = {
    blue: `
      text-blue-600
      bg-blue-500/[0.06]
      border-blue-500/10
      dark:text-blue-400
      dark:bg-blue-400/[0.08]
      dark:border-blue-400/15
    `,
    violet: `
      text-violet-600
      bg-violet-500/[0.06]
      border-violet-500/10
      dark:text-violet-400
      dark:bg-violet-400/[0.08]
      dark:border-violet-400/15
    `,
    cyan: `
      text-cyan-600
      bg-cyan-500/[0.06]
      border-cyan-500/10
      dark:text-cyan-400
      dark:bg-cyan-400/[0.08]
      dark:border-cyan-400/15
    `,
    emerald: `
      text-emerald-600
      bg-emerald-500/[0.06]
      border-emerald-500/10
      dark:text-emerald-400
      dark:bg-emerald-400/[0.08]
      dark:border-emerald-400/15
    `,
  };

  return (
    <div
      className={`
        group
        flex
        items-center
        gap-2.5
        rounded-xl
        border
        px-3
        py-2.5
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-sm
        ${colorStyles[color]}
      `}
    >
      <span
        className="
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </span>

      <span
        className="
          text-sm
          font-medium
          text-foreground
        "
      >
        {label}
      </span>
    </div>
  );
}