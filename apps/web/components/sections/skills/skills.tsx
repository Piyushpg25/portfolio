import { SkillsGrid } from "@/components/sections/skills/skills-grid";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Skills / Technology
          </p>

          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Tools I use to build production systems.
          </h2>

          <p className="mt-5 text-base leading-7 text-foreground/65 sm:text-lg">
            A practical stack spanning frontend, backend,
            databases, cloud infrastructure and engineering
            practices.
          </p>
        </div>

        <SkillsGrid />
      </div>
    </section>
  );
}