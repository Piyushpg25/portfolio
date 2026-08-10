"use client";

import {
  BootstrapIcon,
  CloudflareIcon,
  CssIcon,
  DockerIcon,
  DrizzleIcon,
  ExpressIcon,
  GitIcon,
  GithubIcon,
  GithubActionsIcon,
  HonoIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  LinuxIcon,
  MongoDbIcon,
  MySqlIcon,
  NextjsIcon,
  NodejsIcon,
  PostmanIcon,
  PostgreSqlIcon,
  PythonIcon,
  ReactIcon,
  RestApiIcon,
  TailwindCssIcon,
  TypescriptIcon,
  UbuntuIcon,
} from "@/components/icons";

import { SkillCard } from "@/components/sections/skills/skill-card";

interface Skill {
  name: string;
  description: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
}

interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Modern frontend technologies for building responsive, accessible and performant user interfaces.",
    skills: [
      {
        name: "HTML5",
        description:
          "Semantic markup for accessible and well-structured web interfaces.",
        icon: HtmlIcon,
      },
      {
        name: "CSS3",
        description:
          "Modern layouts, responsive design, animations and visual styling.",
        icon: CssIcon,
      },
      {
        name: "JavaScript",
        description:
          "Core language for interactive and dynamic web applications.",
        icon: JavascriptIcon,
      },
      {
        name: "TypeScript",
        description:
          "Type-safe development for maintainable and scalable applications.",
        icon: TypescriptIcon,
      },
      {
        name: "React",
        description:
          "Component-based UI development with reusable application architecture.",
        icon: ReactIcon,
      },
      {
        name: "Next.js",
        description:
          "Full-stack React framework using the modern App Router.",
        icon: NextjsIcon,
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS framework for rapidly building consistent interfaces.",
        icon: TailwindCssIcon,
      },
      {
        name: "Bootstrap",
        description:
          "Responsive UI development using a mature component system.",
        icon: BootstrapIcon,
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Backend technologies for APIs, server-side applications and scalable services.",
    skills: [
      {
        name: "Node.js",
        description:
          "JavaScript runtime for building scalable server-side applications.",
        icon: NodejsIcon,
      },
      {
        name: "Express.js",
        description:
          "Flexible Node.js framework for building production-ready APIs.",
        icon: ExpressIcon,
      },
      {
        name: "Hono",
        description:
          "Lightweight web framework designed for modern runtimes and edge environments.",
        icon: HonoIcon,
      },
      {
        name: "REST API",
        description:
          "Resource-oriented API architecture using HTTP methods and predictable contracts.",
        icon: RestApiIcon,
      },
      {
        name: "Java",
        description:
          "Object-oriented programming and enterprise backend development.",
        icon: JavaIcon,
      },
      {
        name: "Python",
        description:
          "General-purpose language for backend development, scripting and automation.",
        icon: PythonIcon,
      },
    ],
  },

  {
    title: "Database",
    description:
      "Database technologies for structured, scalable and reliable data persistence.",
    skills: [
      {
        name: "MongoDB",
        description:
          "Document-oriented database for flexible application data models.",
        icon: MongoDbIcon,
      },
      {
        name: "MySQL",
        description:
          "Relational database for structured application data and transactions.",
        icon: MySqlIcon,
      },
      {
        name: "PostgreSQL",
        description:
          "Powerful relational database for production-grade applications.",
        icon: PostgreSqlIcon,
      },
      {
        name: "Drizzle ORM",
        description:
          "Type-safe database toolkit with explicit schemas and SQL-friendly patterns.",
        icon: DrizzleIcon,
      },
    ],
  },

  {
    title: "DevOps & Cloud",
    description:
      "Tools and platforms used for development workflows, deployment and infrastructure.",
    skills: [
      {
        name: "Git",
        description:
          "Distributed version control for collaborative software development.",
        icon: GitIcon,
      },
      {
        name: "GitHub",
        description:
          "Code hosting, collaboration and project management platform.",
        icon: GithubIcon,
      },
      {
        name: "GitHub Actions",
        description:
          "CI/CD automation for testing, validation and deployment workflows.",
        icon: GithubActionsIcon,
      },
      {
        name: "Docker",
        description:
          "Containerization for reproducible development and production environments.",
        icon: DockerIcon,
      },
      {
        name: "Cloudflare",
        description:
          "Edge infrastructure and cloud platform for modern application deployment.",
        icon: CloudflareIcon,
      },
      {
        name: "Linux",
        description:
          "Operating system fundamentals, CLI workflows and server environments.",
        icon: LinuxIcon,
      },
      {
        name: "Ubuntu",
        description:
          "Linux distribution commonly used for development and server environments.",
        icon: UbuntuIcon,
      },
    ],
  },

  {
    title: "API & Developer Tools",
    description:
      "Tools used for API development, testing and everyday engineering workflows.",
    skills: [
      {
        name: "Postman",
        description:
          "API development, testing, debugging and request inspection.",
        icon: PostmanIcon,
      },
    ],
  },
];

export function SkillsGrid() {
  return (
    <div className="space-y-12 sm:space-y-14">
      {skillGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          aria-labelledby={`skill-group-${groupIndex}`}
        >
          {/* Category Header */}
          <div className="mb-5 flex flex-col gap-3 border-b border-border/60 pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>

                <h3
                  id={`skill-group-${groupIndex}`}
                  className="text-xl font-semibold tracking-tight sm:text-2xl"
                >
                  {group.title}
                </h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {group.description}
              </p>
            </div>

            <span className="shrink-0 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {group.skills.length}{" "}
              {group.skills.length === 1
                ? "Technology"
                : "Technologies"}
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                description={skill.description}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}