"use client";

import {
  ArrowUpRight,
  Code,
  Lightning,
  Rocket,
} from "@phosphor-icons/react";

const highlights = [
  {
    icon: Code,
    title: "Engineering Focus",
    description:
      "I enjoy turning complex requirements into clean, maintainable and scalable software.",
  },
  {
    icon: Lightning,
    title: "Performance Mindset",
    description:
      "I care about fast interfaces, efficient APIs, reliable systems and thoughtful architecture.",
  },
  {
    icon: Rocket,
    title: "Always Building",
    description:
      "I learn by building real products and continuously improving them with production practices.",
  },
];

export function AboutContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      {/* Main Content */}
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          About me
        </p>

        <h2
          id="about-heading"
          className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          I like building software that is simple on the surface and
          thoughtful underneath.
        </h2>

        <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            I&apos;m a software engineer focused on building modern web
            applications with strong attention to user experience,
            performance and maintainable architecture.
          </p>

          <p>
            My interests span frontend development, backend engineering,
            databases, APIs, cloud infrastructure and DevOps. I enjoy
            understanding how different parts of a system work together
            rather than treating them as isolated technologies.
          </p>

          <p>
            My goal is to keep improving as an engineer by building real
            products, solving meaningful problems and following practices
            that scale beyond a single project.
          </p>
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          Let&apos;s work together
          <ArrowUpRight
            size={17}
            weight="bold"
          />
        </a>
      </div>

      {/* Highlights */}
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {highlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <div
              key={highlight.title}
              className="group rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-muted/40 transition-transform duration-300 group-hover:scale-105">
                  <Icon
                    size={22}
                    weight="duotone"
                    className="text-foreground"
                  />
                </div>

                <div>
                  <h3 className="font-medium text-foreground">
                    {highlight.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}