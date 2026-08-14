import { SkillsGrid } from "@/components/sections/skills/skills-grid";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        relative
        overflow-hidden
        border-t
        border-border/50
        py-24
        sm:py-32
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
                03
              </span>

              <span className="h-px w-7 bg-border" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Skills / Technology
              </span>
            </div>

            <h2
              id="skills-heading"
              className="
                text-4xl
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              The tools behind
              <br className="hidden sm:block" />
              <span className="text-muted-foreground">
                {" "}the work.
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
              A practical stack spanning frontend, backend, cloud
              infrastructure, testing, developer tooling and the
              engineering workflows I use to ship reliable software.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-10 sm:mt-12">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-border/60
              bg-background/50
              p-5
              shadow-sm
              backdrop-blur-sm
              sm:p-7
              lg:p-8
            "
          >
            {/* Subtle top highlight */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-blue-500/30
                to-transparent
              "
            />

            {/* Ambient wash */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                size-72
                rounded-full
                bg-blue-500/[0.025]
                blur-3xl
                dark:bg-blue-400/[0.04]
              "
            />

            {/* Existing Skill Grid — untouched */}
            <div className="relative">
              <SkillsGrid />
            </div>
          </div>
        </div>

        {/* Footer detail */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            gap-4
            text-xs
            text-muted-foreground
          "
        >
          <span>
            Technologies I use regularly
          </span>

          <span className="hidden font-mono text-muted-foreground/50 sm:block">
            frontend / backend / cloud / tooling
          </span>
        </div>
      </div>
    </section>
  );
}