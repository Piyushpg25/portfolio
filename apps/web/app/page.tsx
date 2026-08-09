import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Skills } from "@/components/sections/skills/skills";
import { Projects } from "@/components/sections/projects/projects";
import { Contact } from "@/components/sections/contact/contact";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  );
}