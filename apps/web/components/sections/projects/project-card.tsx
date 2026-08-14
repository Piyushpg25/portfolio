"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowUpRight,
  GithubLogo,
  Sparkle,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

interface ProjectIconProps {
  size?: number;
  className?: string;
  weight?:
    | "thin"
    | "light"
    | "regular"
    | "bold"
    | "fill"
    | "duotone";
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress";
  featured?: boolean;
  icon?: ComponentType<ProjectIconProps>;
  index: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  status,
  featured = false,
  icon: Icon,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
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
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        bg-background
        transition-all
        duration-300
        ${
          featured
            ? `
              border-blue-500/20
              shadow-[0_12px_45px_rgba(59,130,246,0.08)]
              dark:border-blue-400/20
              dark:shadow-[0_12px_45px_rgba(59,130,246,0.06)]
            `
            : `
              border-border/60
              shadow-sm
            `
        }
        hover:border-foreground/20
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
        dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
      `}
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className={`
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          ${
            featured
              ? "via-blue-500/70"
              : "via-foreground/20"
          }
          to-transparent
        `}
      />

      {/* Visual Header */}
      <div
        className={`
          relative
          h-40
          overflow-hidden
          border-b
          border-border/50
          ${
            featured
              ? `
                bg-gradient-to-br
                from-blue-500/[0.10]
                via-violet-500/[0.05]
                to-transparent
                dark:from-blue-400/[0.12]
                dark:via-violet-400/[0.06]
              `
              : `
                bg-gradient-to-br
                from-muted/70
                via-background
                to-muted/30
              `
          }
        `}
      >
        {/* Ambient gradient */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            -right-16
            -top-16
            size-40
            rounded-full
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-100
            ${
              featured
                ? "bg-blue-500/15 opacity-70"
                : "bg-foreground/[0.04] opacity-50"
            }
          `}
        />

        {/* Grid detail */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:28px_28px]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />

        <div className="relative flex h-full items-center justify-between px-6">
          {/* Project Icon */}
          <motion.div
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`
              flex
              size-14
              items-center
              justify-center
              rounded-2xl
              border
              bg-background/80
              shadow-sm
              backdrop-blur-sm
              ${
                featured
                  ? "border-blue-500/20 dark:border-blue-400/20"
                  : "border-border/70"
              }
            `}
          >
            {Icon ? (
              <Icon
                size={28}
                weight="duotone"
                className={
                  featured
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-foreground"
                }
              />
            ) : (
              <span className="text-xl font-semibold text-foreground">
                {title.charAt(0)}
              </span>
            )}
          </motion.div>

          {/* Featured */}
          {featured && (
            <div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-blue-500/20
                bg-background/80
                px-3
                py-1.5
                text-xs
                font-medium
                text-blue-600
                shadow-sm
                backdrop-blur-sm
                dark:border-blue-400/20
                dark:text-blue-400
              "
            >
              <Sparkle
                size={13}
                weight="fill"
              />

              Featured
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Title + Status */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3
              className={`
                text-xl
                font-semibold
                tracking-[-0.02em]
                text-foreground
                ${
                  featured
                    ? "sm:text-2xl"
                    : ""
                }
              `}
            >
              {title}
            </h3>
          </div>

          <div className="mt-2.5 flex items-center gap-2">
            <span
              className={`
                size-1.5
                rounded-full
                ${
                  status === "completed"
                    ? "bg-emerald-500"
                    : "bg-amber-500"
                }
              `}
            />

            <span className="text-xs font-medium text-muted-foreground">
              {status === "completed"
                ? "Completed"
                : "Currently building"}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-muted-foreground
            ${
              featured
                ? "sm:text-[15px] sm:leading-7"
                : ""
            }
          `}
        >
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border
                border-border/60
                bg-muted/30
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-muted-foreground
                transition-colors
                duration-200
                group-hover:bg-muted/50
                group-hover:text-foreground
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-8">
          {/* GitHub */}
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="
              inline-flex
              h-10
              items-center
              gap-2
              rounded-lg
              border
              border-border/70
              bg-background
              px-3.5
              text-sm
              font-medium
              text-foreground
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-muted
              hover:shadow-sm
            "
          >
            <GithubLogo
              size={17}
              weight="fill"
            />

            Code
          </Link>

          {/* Live Demo */}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              className="
                group/demo
                inline-flex
                h-10
                items-center
                gap-2
                rounded-lg
                bg-black/0
                px-4
                text-sm
                font-medium
                text-background
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              Live Demo

              <ArrowUpRight
                size={16}
                weight="bold"
                className="
                  transition-transform
                  duration-200
                  group-hover/demo:translate-x-0.5
                  group-hover/demo:-translate-y-0.5
                "
              />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom hover highlight */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-x-10
          bottom-0
          h-px
          origin-center
          scale-x-0
          bg-gradient-to-r
          from-transparent
          ${
            featured
              ? "via-blue-500/60"
              : "via-foreground/30"
          }
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100
        `}
      />
    </motion.article>
  );
}