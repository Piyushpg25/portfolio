"use client";
import {
  BracketsCurly,
  Code,
  Database,
  Globe,
} from "@phosphor-icons/react";

import { ProjectCard } from "@/components/sections/projects/project-card";

const projects = [
  {
    title: "Production Portfolio",
    description:
      "A production-grade personal portfolio designed as a premium SaaS-style product with modern frontend architecture, animations and cloud deployment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Three.js",
      "Cloudflare",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "#",
    status: "in-progress" as const,
    featured: true,
    icon: Globe,
  },
  {
    title: "Task Management Platform",
    description:
      "A full-stack task management application with authentication, CRUD operations, API architecture, validation and production-oriented testing.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    githubUrl: "https://github.com/",
    liveUrl: "#",
    status: "completed" as const,
    featured: false,
    icon: Code,
  },
  {
    title: "REST API Service",
    description:
      "A modular REST API demonstrating authentication, validation, error handling, database integration and scalable backend architecture.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "Jest",
    ],
    githubUrl: "https://github.com/",
    status: "completed" as const,
    featured: false,
    icon: BracketsCurly,
  },
  {
    title: "Database Management System",
    description:
      "A database-focused application demonstrating relational data modeling, constraints, queries and structured backend integration.",
    technologies: [
      "Java",
      "MySQL",
      "SQL",
      "JDBC",
    ],
    githubUrl: "https://github.com/",
    status: "completed" as const,
    featured: false,
    icon: Database,
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          index={index}
        />
      ))}
    </div>
  );
}