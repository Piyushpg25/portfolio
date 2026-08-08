export default function HomePage() {
  return (
    <main>
      <section
        id="about"
        className="flex min-h-screen items-center justify-center"
      >
        <h1 className="text-4xl font-bold">
          About
        </h1>
      </section>

      <section
        id="skills"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-4xl font-bold">
          Skills
        </h2>
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-4xl font-bold">
          Projects
        </h2>
      </section>

      <section
        id="experience"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-4xl font-bold">
          Experience
        </h2>
      </section>

      <section
        id="contact"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-4xl font-bold">
          Contact
        </h2>
      </section>
    </main>
  );
}