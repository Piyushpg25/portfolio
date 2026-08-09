"use client";

import { motion } from "motion/react";

import type { ComponentType } from "react";

interface SkillCardProps {
  name: string;
  description: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
  index: number;
}

export function SkillCard({
  name,
  description,
  icon: Icon,
  index,
}: SkillCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="group rounded-2xl border bg-background/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/50 text-foreground transition-transform duration-300 group-hover:scale-105">
          <Icon size={25} />
        </div>

        <span className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          Technology
        </span>
      </div>

      <h3 className="mt-5 font-semibold tracking-tight">
        {name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-foreground/65">
        {description}
      </p>
    </motion.article>
  );
}