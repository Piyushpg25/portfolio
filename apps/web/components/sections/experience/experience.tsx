import { ExperienceContent } from "@/components/sections/experience/experience-content";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-border/50
        py-24
        sm:py-32
      "
    >
      {/* Subtle ambient gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[420px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-3xl
          dark:bg-blue-400/[0.045]
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="
            flex
            flex-col
            gap-8
            border-b
            border-border/60
            pb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-16
          "
        >
          {/* Heading */}
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  flex
                  size-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  bg-background
                  font-mono
                  text-[10px]
                  font-medium
                  text-muted-foreground
                "
              >
                05
              </span>

              <span className="h-px w-7 bg-border" />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Experience
              </p>
            </div>

            <h2
              id="experience-heading"
              className="
                text-4xl
                font-semibold
                leading-[1]
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building experience through{" "}
              <span className="text-muted-foreground">
                real work.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-md lg:pb-1">
            <p
              className="
                text-[15px]
                leading-7
                text-muted-foreground
                sm:text-base
              "
            >
              Internships where I worked with Java, web technologies,
              debugging, UI development, and real-world development
              workflows.
            </p>
          </div>
        </div>

        {/* Experience Content */}
        <div className="mt-10 sm:mt-12">
          <ExperienceContent />
        </div>
      </div>
    </section>
  );
}