import { HeroContent } from "@/components/sections/hero/hero-content";
import { HeroMotion } from "@/components/sections/hero/hero-motion";
import { HeroVisual } from "@/components/sections/hero/hero-visual";
import { HeroBackground } from "@/components/sections/hero/hero-background";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div
        className="
          relative
          mx-auto
          grid
          min-h-[calc(100svh-4rem)]
          max-w-7xl
          items-center
          gap-12
          px-6
          pb-16
          pt-28
          sm:pt-32
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
          lg:px-8
          lg:py-20
        "
      >
        <HeroMotion>
          <HeroContent />
        </HeroMotion>

        <HeroVisual />
      </div>
    </section>
  );
}