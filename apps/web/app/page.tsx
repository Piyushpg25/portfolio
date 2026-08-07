import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] p-10 shadow-[var(--shadow-md)]">
          <p className="font-mono mb-4 text-sm text-gray-500">
            Full Stack Developer
          </p>

          <h1 className="heading-xl mb-6">Building Modern Web Experiences.</h1>

          <p className="text-lead mb-8 max-w-2xl">
            This portfolio is being built from scratch using modern technologies
            and production-grade engineering practices.
          </p>

          <div className="flex gap-4">
            <Button>View Projects</Button>

            <Button variant="outline">Contact Me</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
