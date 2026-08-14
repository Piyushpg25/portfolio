import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-6 inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              ● Available for Opportunities
            </span>

            <h1 className="heading-xl mb-6">
              Building
              <span className="text-blue-600"> Modern </span>
              Digital Experiences.
            </h1>

            <p className="text-lead mb-20 max-w-xl ">
              I&apos;m a Full Stack Developer passionate about building fast,
              scalable and production-ready applications using modern web
              technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>
                View Projects
              </Button>

              <Button variant="outline">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <div className="flex h-96 w-96 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] shadow-[var(--shadow-lg)]">
              <span className="text-lg font-medium text-gray-500">
                Profile Image
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}