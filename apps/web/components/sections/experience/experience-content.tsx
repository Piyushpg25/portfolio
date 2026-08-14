"use client";

import { motion } from "motion/react";

const experiences = [
  {
    role: "Java Development Intern",
    company: "Codveda Technologies",
    period: "Dec 2025 – Jan 2026",
    description:
      "Worked extensively with Core Java, collections, exception handling, and debugging. Built and optimized logic-based console applications.",
    technologies: [
      "Java",
      "Collections",
      "Exception Handling",
      "Debugging",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    period: "Aug 2025 – Sep 2025",
    description:
      "Developed responsive web pages using HTML, CSS, and JavaScript. Assisted in UI enhancements and followed real-world development workflows.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI Development",
    ],
  },
];

export function ExperienceContent() {
  return (
    <div className="relative">
      {/* Timeline */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-8
          left-[7px]
          top-8
          hidden
          w-px
          bg-gradient-to-b
          from-blue-500/50
          via-border
          to-transparent
          sm:block
        "
      />

      <div className="flex flex-col gap-6 sm:gap-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.role}`}
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
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="relative sm:pl-10"
          >
            {/* Timeline node */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-8
                hidden
                size-[15px]
                rounded-full
                border-[3px]
                border-background
                bg-blue-500
                shadow-[0_0_0_3px_rgba(59,130,246,0.12)]
                dark:bg-blue-400
                dark:shadow-[0_0_0_3px_rgba(96,165,250,0.10)]
                sm:block
              "
            />

            {/* Experience Card */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-border/60
                bg-background
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-foreground/20
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]
                dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]
                sm:p-8
              "
            >
              {/* Top gradient */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-blue-500/50
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  size-36
                  rounded-full
                  bg-blue-500/[0.035]
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:bg-blue-500/[0.07]
                  dark:bg-blue-400/[0.035]
                  dark:group-hover:bg-blue-400/[0.06]
                "
              />

              {/* Header */}
              <div
                className="
                  relative
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                <div>
                  {/* Company */}
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        size-1.5
                        rounded-full
                        bg-blue-500
                        dark:bg-blue-400
                      "
                    />

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-muted-foreground
                      "
                    >
                      {experience.company}
                    </p>
                  </div>

                  {/* Role */}
                  <h3
                    className="
                      mt-3
                      text-xl
                      font-semibold
                      tracking-[-0.025em]
                      text-foreground
                      sm:text-2xl
                    "
                  >
                    {experience.role}
                  </h3>
                </div>

                {/* Period */}
                <div
                  className="
                    w-fit
                    rounded-full
                    border
                    border-border/60
                    bg-muted/30
                    px-3.5
                    py-1.5
                    font-mono
                    text-[11px]
                    font-medium
                    text-muted-foreground
                  "
                >
                  {experience.period}
                </div>
              </div>

              {/* Divider */}
              <div className="relative my-6 h-px bg-border/50" />

              {/* Description */}
              <p
                className="
                  relative
                  max-w-3xl
                  text-sm
                  leading-6
                  text-muted-foreground
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {experience.technologies.map((technology) => (
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

              {/* Bottom accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-8
                  h-px
                  w-0
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-500
                  transition-all
                  duration-500
                  group-hover:w-24
                "
              />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}