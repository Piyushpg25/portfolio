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
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
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
        y: 24,
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
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Visual Header */}
      <div className="relative h-36 overflow-hidden border-b border-border/70 bg-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,120,120,0.14),transparent_55%)]" />

        <div className="absolute -right-10 -top-10 size-32 rounded-full border border-border/40 transition-transform duration-500 group-hover:scale-125" />

        <div className="absolute -bottom-16 -left-10 size-36 rounded-full border border-border/30 transition-transform duration-500 group-hover:scale-110" />

        <div className="relative flex h-full items-center justify-between px-6">
          {/* Project Icon */}
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border/70 bg-background shadow-sm transition-transform duration-300 group-hover:scale-105">
            {Icon ? (
              <Icon
                size={28}
                weight="duotone"
                className="text-foreground"
              />
            ) : (
              <span className="text-xl font-semibold text-foreground">
                {title.charAt(0)}
              </span>
            )}
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur">
              <Sparkle
                size={13}
                weight="fill"
              />

              <span>Featured</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title + Status */}
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span
              className={`size-1.5 rounded-full ${
                status === "completed"
                  ? "bg-emerald-500"
                  : "bg-amber-500"
              }`}
            />

            <span>
              {status === "completed"
                ? "Completed"
                : "Currently building"}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border/70 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:bg-muted/70"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          {/* GitHub */}
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm"
          >
            <GithubLogo
              size={17}
              weight="fill"
            />

            <span>Code</span>
          </Link>

          {/* Live Demo */}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 16px",
                minHeight: "40px",
                borderRadius: "8px",
                backgroundColor: "#18181b",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.25,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow:
                  "0 1px 2px rgba(0, 0, 0, 0.08)",
                transition:
                  "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  color: "#ffffff",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                Live Demo
              </span>

              <ArrowUpRight
                size={17}
                weight="bold"
                color="#ffffff"
                style={{
                  flexShrink: 0,
                }}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Hover Highlight */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}