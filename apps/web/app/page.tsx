import { SiteLayout } from "@/components/common/site-layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <SiteLayout>
      <Section>
        <Container>
          <h1 className="heading-xl mb-6">
            Premium Portfolio
          </h1>

          <p className="text-lead mb-8">
            Layout foundation completed.
          </p>

          <Button>
            Start Exploring
          </Button>
        </Container>
      </Section>
    </SiteLayout>
  );
}