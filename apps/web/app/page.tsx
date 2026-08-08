import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Skills } from "@/components/sections/skills/skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
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