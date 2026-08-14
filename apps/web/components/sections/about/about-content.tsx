"use client";

import {
  ArrowUpRight,
  Code,
  Lightning,
  Rocket,
} from "@phosphor-icons/react";

const highlights = [
  {
    number: "01",
    icon: Code,
    title: "Engineering Focus",
    description:
      "I enjoy turning complex requirements into clean, maintainable and scalable software.",
  },
  {
    number: "02",
    icon: Lightning,
    title: "Performance Mindset",
    description:
      "I care about fast interfaces, efficient APIs, reliable systems and thoughtful architecture.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Always Building",
    description:
      "I learn by building real products and continuously improving them with production practices.",
  },
];

export function AboutContent() {
  return (
    <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
      {/* ─────────────────────────────
          LEFT — Introduction
      ───────────────────────────── */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-foreground/30" />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-muted-foreground
            "
          >
            About me
          </span>
        </div>

        {/* Heading */}
        <h2
          id="about-heading"
          className="
            mt-6
            max-w-xl
            text-4xl
            font-semibold
            leading-[1.02]
            tracking-[-0.045em]
            text-foreground
            sm:text-5xl
          "
        >
          I like building software that is{" "}
          <span className="text-muted-foreground">
            simple on the surface
          </span>{" "}
          and thoughtful underneath.
        </h2>

        {/* Description */}
        <div
          className="
            mt-8
            max-w-lg
            space-y-5
            text-[15px]
            leading-7
            text-muted-foreground
            sm:text-base
          "
        >
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

        {/* CTA */}
        <a
          href="#contact"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-2
            border-b
            border-foreground/20
            pb-1.5
            text-sm
            font-medium
            text-foreground
            transition-all
            duration-300
            hover:border-blue-500
            hover:text-blue-600
            dark:hover:text-blue-400
          "
        >
          Let&apos;s work together

          <ArrowUpRight
            size={16}
            weight="bold"
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </div>

      {/* ─────────────────────────────
          RIGHT — Engineering Principles
      ───────────────────────────── */}
      <div className="relative">
        {/* Vertical guide */}
        <div
          className="
            absolute
            bottom-5
            left-[20px]
            top-5
            w-px
            bg-border
            lg:left-[24px]
          "
        />

        <div className="space-y-2">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.title}
                className="
                  group
                  relative
                  pl-12
                  lg:pl-16
                "
              >
                {/* Timeline node */}
                <div
                  className="
                    absolute
                    left-[14px]
                    top-7
                    z-10
                    flex
                    size-3
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-background
                    bg-border
                    ring-1
                    ring-border
                    transition-all
                    duration-300
                    group-hover:scale-125
                    group-hover:bg-blue-500
                    group-hover:ring-blue-500/20
                    lg:left-[18px]
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border/60
                    bg-background/50
                    px-5
                    py-6
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:border-blue-500/25
                    group-hover:bg-background/80
                    group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.06)]
                    dark:group-hover:border-blue-400/20
                    dark:group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.25)]
                    sm:px-6
                  "
                >
                  {/* Top accent */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-400
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <span
                      className="
                        hidden
                        pt-1
                        text-[10px]
                        font-bold
                        tracking-[0.2em]
                        text-muted-foreground/40
                        sm:block
                      "
                    >
                      {highlight.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="
                        flex
                        size-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-border/70
                        bg-muted/30
                        text-muted-foreground
                        transition-all
                        duration-300
                        group-hover:border-blue-500/20
                        group-hover:bg-blue-500/[0.07]
                        group-hover:text-blue-600
                        dark:group-hover:text-blue-400
                      "
                    >
                      <Icon
                        size={21}
                        weight="duotone"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            text-[10px]
                            font-bold
                            tracking-[0.18em]
                            text-muted-foreground/40
                            sm:hidden
                          "
                        >
                          {highlight.number}
                        </span>

                        <h3
                          className="
                            text-base
                            font-semibold
                            tracking-tight
                            text-foreground
                          "
                        >
                          {highlight.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-2
                          max-w-xl
                          text-sm
                          leading-6
                          text-muted-foreground
                        "
                      >
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}