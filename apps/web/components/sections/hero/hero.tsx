import { HeroContent } from "@/components/sections/hero/hero-content";
import { HeroVisual } from "@/components/sections/hero/hero-visual";

export function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8"
      >
        <HeroContent />

        <HeroVisual />
      </div>
    </section>
  );
}