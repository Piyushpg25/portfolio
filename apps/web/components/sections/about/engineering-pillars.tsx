"use client";

import {
  Gauge,
  LockKey,
  Stack,
  Wrench,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Build fast interfaces and APIs with rendering, caching and bundle performance in mind.",
  },
  {
    icon: LockKey,
    title: "Security",
    description:
      "Treat authentication, authorization, validation and secure data handling as core engineering concerns.",
  },
  {
    icon: Stack,
    title: "Architecture",
    description:
      "Prefer modular systems with clear boundaries, predictable dependencies and maintainable code.",
  },
  {
    icon: Wrench,
    title: "Production",
    description:
      "Think beyond local development with testing, observability, CI/CD and reliable deployment workflows.",
  },
] as const;

export function EngineeringPillars() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;

        return (
          <motion.article
            key={pillar.title}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
            className="group rounded-2xl border bg-background/70 p-5 shadow-sm backdrop-blur transition-shadow duration-300 hover:shadow-md"
          >
            <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/50 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              <Icon size={20} weight="duotone" />
            </div>

            <h3 className="mt-4 font-semibold tracking-tight">
              {pillar.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground/65">
              {pillar.description}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}