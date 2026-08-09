import {ProjectsGrid} from './project-grid';

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl lg:mx-0">
          <p className="text-sm font-medium text-muted-foreground">
            Selected work
          </p>

          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Projects built with purpose.
          </h2>

          <p className="mt-5 text-base leading-7 text-foreground/65 sm:text-lg">
            A selection of applications and engineering projects
            demonstrating frontend development, backend architecture,
            databases, APIs and production engineering practices.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </section>
  );
}