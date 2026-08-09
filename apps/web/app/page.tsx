import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Skills } from "@/components/sections/skills/skills";
import { Projects } from "@/components/sections/projects/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <section
        id="skills"
        className="min-h-screen"
      />

      <section
        id="projects"
        className="min-h-screen"
      />

      <section
        id="experience"
        className="min-h-screen"
      />

      <section
        id="contact"
        className="min-h-screen"
      />
    </main>
  );
}