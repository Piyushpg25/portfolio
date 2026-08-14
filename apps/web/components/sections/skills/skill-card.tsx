"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

interface SkillCardProps {
  name: string;
  image: string;
  index: number;
}

export function SkillCard({
  name,
  image,
  index,
}: SkillCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 14,
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
        delay: index * 0.035,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        flex
        min-h-[108px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-background
        px-3
        py-5
        transition-all
        duration-300
        hover:border-foreground/20
        hover:bg-muted/[0.35]
        hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)]
        dark:hover:shadow-[0_14px_35px_rgba(0,0,0,0.25)]
      "
    >
      {/* Subtle hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          size-20
          rounded-full
          bg-blue-500/[0.06]
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:bg-blue-400/[0.08]
        "
      />

      {/* Logo */}
      <motion.div
        className="
          relative
          flex
          size-10
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        {!imageError ? (
          <Image
            src={image}
            alt={`${name} logo`}
            width={40}
            height={40}
            className="
              size-10
              object-contain
              drop-shadow-sm
              transition-all
              duration-300
              group-hover:drop-shadow-md
            "
            onError={() => setImageError(true)}
          />
        ) : (
          <span
            className="
              flex
              size-10
              items-center
              justify-center
              rounded-xl
              border
              border-border/70
              bg-muted/50
              text-sm
              font-semibold
              text-muted-foreground
            "
          >
            {name.charAt(0)}
          </span>
        )}
      </motion.div>

      {/* Technology name */}
      <p
        className="
          relative
          mt-3
          max-w-full
          truncate
          px-1
          text-center
          text-xs
          font-medium
          leading-4
          text-muted-foreground
          transition-colors
          duration-300
          group-hover:text-foreground
        "
      >
        {name}
      </p>

      {/* Hover accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
          transition-all
          duration-300
          group-hover:w-1/2
        "
      />

      {/* Corner detail */}
      <div
        aria-hidden="true"
        className="
          absolute
          right-2.5
          top-2.5
          size-1
          rounded-full
          bg-border
          transition-colors
          duration-300
          group-hover:bg-blue-500
        "
      />
    </motion.article>
  );
}