import { SkillCard } from "@/components/sections/skills/skill-card";

interface Skill {
  name: string;
  image: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", image: "/icons/react.svg" },
      { name: "Next.js", image: "/icons/nextjs.svg" },
      { name: "TypeScript", image: "/icons/typescript.svg" },
      { name: "JavaScript", image: "/icons/javascript.svg" },
      { name: "HTML5", image: "/icons/html5.svg" },
      { name: "CSS", image: "/icons/css.svg" },
      { name: "Tailwind CSS", image: "/icons/tailwindcss-dark.svg" },
      { name: "Bootstrap", image: "/icons/bootstrap.svg" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", image: "/icons/nodejs.svg" },
      { name: "Bun", image: "/icons/bun.svg" },
      { name: "REST API", image: "/icons/api.svg" },
      { name: "MongoDB", image: "/icons/mongodb.svg" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Vitest", image: "/icons/vitest.svg" },
    ],
  },
  {
    title: "Tooling & DevOps",
    skills: [
      { name: "Git", image: "/icons/git.svg" },
      { name: "GitHub", image: "/icons/github.svg" },
      { name: "Postman", image: "/icons/postman.svg" },
      { name: "Linux (Ubuntu)", image: "/icons/linux.svg" },
    ],
  },
];

function SkillGroup({ group }: { group: SkillGroup }) {
  const groupId = `skill-group-${group.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <section
      aria-labelledby={groupId}
      className="
        min-w-0
        rounded-2xl
        border
        border-border/50
        bg-background/40
        p-5
        transition-colors
        duration-300
        hover:border-border
        sm:p-6
      "
    >
      {/* Group Header */}
      <div
        className="
          mb-5
          flex
          items-center
          justify-between
          gap-4
          border-b
          border-border/50
          pb-4
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="size-1.5 shrink-0 rounded-full bg-blue-500" />

          <h3
            id={groupId}
            className="
              truncate
              text-base
              font-semibold
              tracking-tight
              text-foreground
              sm:text-lg
            "
          >
            {group.title}
          </h3>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-border/60
            bg-muted/40
            px-2
            py-0.5
            font-mono
            text-[10px]
            font-medium
            text-muted-foreground
          "
        >
          {String(group.skills.length).padStart(2, "0")}
        </span>
      </div>

      {/* Skill Cards */}
      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          lg:grid-cols-2
          xl:grid-cols-4
        "
      >
        {group.skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            image={skill.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export function SkillsGrid() {
  return (
    <div
      className="
        grid
        gap-5
        lg:grid-cols-2
        lg:gap-6
      "
    >
      {skillGroups.map((group) => (
        <SkillGroup
          key={group.title}
          group={group}
        />
      ))}
    </div>
  );
}