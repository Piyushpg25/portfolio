import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] p-10 shadow-[var(--shadow-md)]">
          <h1 className="mb-4 text-5xl font-bold">
            Premium Portfolio
          </h1>

          <p className="mb-8 text-lg">
            Production-ready UI Foundation 🚀
          </p>

          <Button>
            Coming Soon
          </Button>
        </div>
      </Container>
    </Section>
  );
}