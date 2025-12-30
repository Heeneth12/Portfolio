import Image from "next/image";
import EZH from "@/assets/images/ezh.png";
import EZH_INV from "@/assets/images/ezh_inventory.png";

const PROJECTS = [
  {
    title: "Chat Collect",
    description:
      "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    image: EZH,
    date: "Jan 2024 - Feb 2024",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [{ label: "Website", href: "#", icon: "globe" }],
  },
  {
    title: "Magic UI",
    description:
      "Designed, developed and sold animated UI components for developers.",
    image: EZH_INV,
    date: "June 2023 - Present",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      { label: "Website", href: "#", icon: "globe" },
      { label: "Source", href: "#", icon: "github" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="mt-12">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-block rounded-full bg-black dark:bg-white px-4 py-1.5 text-sm font-medium text-white dark:text-black">
          My Projects
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Check out my latest work
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>

      {/* Links */}
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:shadow-lg">
          {/* Project Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-zinc-400 text-sm">
                Project Preview
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className="text-sm text-zinc-400 tabular-nums">
                {project.date}
              </span>
            </div>

            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200">
                  {link.icon === "globe" && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"
                      />
                    </svg>
                  )}

                  {link.icon === "github" && (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017..."
                        clipRule="evenodd"
                      />
                    </svg>
                  )}

                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
