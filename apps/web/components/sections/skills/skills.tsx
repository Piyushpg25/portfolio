import { SkillsGrid } from "@/components/sections/skills/skills-grid";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.9em] text-muted-foreground">
            Skills / Technology
          </p>

          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Tools I use to build production systems.
          </h2>

          <p className="mt-10 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A practical stack spanning frontend, backend, databases,
            cloud infrastructure and engineering practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 sm:mt-14">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}