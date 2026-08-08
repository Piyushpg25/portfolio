"use client";

import { Code, Database, Globe, Lightning } from "@phosphor-icons/react";
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
      aria-hidden="true"
      className="relative z-10 mx-auto aspect-square w-full max-w-[520px]"
    >

      <HeroThree />


      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      {/* Outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        className="absolute inset-[8%] rounded-full border border-foreground/10"
      />
        
      {/* Dashed orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          ...orbitTransition,
          duration: 32,
        }}
        className="absolute inset-[18%] rounded-full border border-dashed border-foreground/10"
      />

      {/* Orbit nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={orbitTransition}
        className="absolute inset-[8%]"
      >
        <div className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-foreground shadow-lg" />

        <div className="absolute bottom-[12%] left-[8%] size-2 rounded-full bg-foreground/60" />
      </motion.div>

      {/* Main identity card */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
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
        className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-6 shadow-2xl backdrop-blur-xl">
          {/* Card glow */}
          <div className="absolute -right-16 -top-16 size-32 rounded-full bg-primary/10 blur-3xl" />

          {/* Header */}
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Software Engineer
              </p>

              <p className="mt-2 text-2xl font-semibold tracking-tight">
                Piyush
              </p>
            </div>

            <div className="flex size-11 items-center justify-center rounded-2xl border bg-muted/50">
              <Code size={22} weight="duotone" />
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-border" />

          {/* Tech stack */}
          <div className="grid grid-cols-2 gap-3">
            <TechItem
              icon={<Globe size={18} />}
              label="Web"
            />

            <TechItem
              icon={<Database size={18} />}
              label="Backend"
            />

            <TechItem
              icon={<Lightning size={18} />}
              label="Cloud"
            />

            <TechItem
              icon={<Code size={18} />}
              label="Systems"
            />
          </div>

          {/* Status */}
          <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500" />
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

function TechItem({ icon, label }: TechItemProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border bg-muted/30 px-3 py-2.5">
      <span className="text-muted-foreground">
        {icon}
      </span>

      <span className="text-sm font-medium">
        {label}
      </span>
    </div>
  );
}