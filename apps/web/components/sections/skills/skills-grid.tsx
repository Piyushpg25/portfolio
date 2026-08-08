"use client";

import {
  BracketsCurly,
  Cloud,
  Database,
  GitBranch,
  Gear,
  Globe,
  ShieldCheck,
  TestTube,
} from "@phosphor-icons/react";

import { SkillCard } from "@/components/sections/skills/skill-card";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Modern interfaces focused on performance, accessibility and user experience.",
    skills: [
      {
        name: "Next.js",
        description:
          "Production React applications with App Router and server-first rendering.",
        icon: Globe,
      },
      {
        name: "React",
        description:
          "Component-driven interfaces with predictable state and reusable patterns.",
        icon: BracketsCurly,
      },
      {
        name: "TypeScript",
        description:
          "Strong typing for safer refactoring and maintainable application code.",
        icon: Gear,
      },
      {
        name: "Tailwind CSS",
        description:
          "Consistent responsive UI systems with utility-first styling.",
        icon: Globe,
      },
    ],
  },
  {
    title: "Backend & Data",
    description:
      "Reliable APIs and data layers designed around clear boundaries.",
    skills: [
      {
        name: "Hono",
        description:
          "Lightweight APIs designed for modern runtimes and edge environments.",
        icon: BracketsCurly,
      },
      {
        name: "Bun",
        description:
          "Fast JavaScript runtime and tooling for modern backend development.",
        icon: Gear,
      },
      {
        name: "Drizzle ORM",
        description:
          "Type-safe database access with explicit schemas and SQL-friendly patterns.",
        icon: Database,
      },
      {
        name: "Turso",
        description:
          "Edge-friendly SQLite database infrastructure for globally distributed apps.",
        icon: Database,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deployment and infrastructure practices for production workloads.",
    skills: [
      {
        name: "Cloudflare",
        description:
          "Edge deployment, Workers and cloud infrastructure for scalable applications.",
        icon: Cloud,
      },
      {
        name: "Docker",
        description:
          "Portable application environments with reproducible builds and deployments.",
        icon: Gear,
      },
      {
        name: "GitHub Actions",
        description:
          "Automated CI workflows for testing, validation and deployment.",
        icon: GitBranch,
      },
      {
        name: "Testing",
        description:
          "Automated confidence through unit, integration and end-to-end testing.",
        icon: TestTube,
      },
    ],
  },
  {
    title: "Engineering",
    description:
      "Practices that keep software secure, maintainable and reliable.",
    skills: [
      {
        name: "API Design",
        description:
          "Clear contracts, validation, error handling and predictable responses.",
        icon: BracketsCurly,
      },
      {
        name: "Security",
        description:
          "Authentication, authorization, validation and secure application boundaries.",
        icon: ShieldCheck,
      },
      {
        name: "Performance",
        description:
          "Rendering, caching, bundle size and runtime performance optimization.",
        icon: Gear,
      },
      {
        name: "Git",
        description:
          "Structured version control and clean engineering workflows.",
        icon: GitBranch,
      },
    ],
  },
] as const;

export function SkillsGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <div className="mb-5">
            <h3 className="text-lg font-semibold tracking-tight">
              {group.title}
            </h3>

            <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {group.skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                description={skill.description}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}