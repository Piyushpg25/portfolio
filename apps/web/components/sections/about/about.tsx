import { AboutContent } from "@/components/sections/about/about-content";
import { EngineeringPillars } from "@/components/sections/about/engineering-pillars";

export function About() {
  return (
    <section
      id="about-profile"
      aria-labelledby="about-heading"
      className="relative border-t py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <AboutContent />

        <EngineeringPillars />
      </div>
    </section>
  );
}