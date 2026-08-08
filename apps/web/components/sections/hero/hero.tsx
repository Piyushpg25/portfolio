import { HeroContent } from "@/components/sections/hero/hero-content";
import { HeroMotion } from "@/components/sections/hero/hero-motion";
import { HeroVisual } from "@/components/sections/hero/hero-visual";
import { HeroBackground } from "@/components/sections/hero/hero-background";

export function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <HeroBackground />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
        <HeroMotion>
          <HeroContent />
        </HeroMotion>

        <HeroVisual />
      </div>
    </section>
  );
}