import { AboutContent } from "@/components/sections/about/about-content";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AboutContent />
      </div>
    </section>
  );
}