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
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        flex
        min-h-[205px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border/70
        bg-card
        p-5
        transition-all
        duration-300
        hover:border-foreground/20
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        sm:p-6
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div
          className="
            flex
            size-12
            items-center
            justify-center
            rounded-xl
            border
            border-border/80
            bg-muted/40
            transition-all
            duration-300
            group-hover:border-foreground/20
            group-hover:bg-muted/70
            group-hover:shadow-sm
          "
        >
          <Icon
            size={23}
            className="
              text-foreground/80
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* Number */}
        <span
          className="
            font-mono
            text-[10px]
            tracking-wider
            text-muted-foreground/40
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Middle */}
      <div className="mt-6">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-border/70
            bg-muted/30
            px-2.5
            py-1
            text-[9px]
            font-medium
            uppercase
            tracking-[0.14em]
            text-muted-foreground
          "
        >
          Technology
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3
          className="
            text-base
            font-semibold
            tracking-tight
            text-foreground
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-2
            max-w-[34rem]
            text-[13px]
            leading-5
            text-muted-foreground
          "
        >
          {description}
        </p>
      </div>

      {/* Hover accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-6
          bottom-0
          h-px
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-transparent
          via-foreground/30
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </motion.article>
  );
}