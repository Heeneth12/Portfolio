"use client";

import Image from "next/image";
import { Globe, Github } from "lucide-react";
import EZH from "@/assets/images/ezh.png";
import EZH_INV from "@/assets/images/ezh_inventory.png";

const PROJECTS = [
  {
    title: "Chat Collect",
    description:
      "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users.",
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
    ],
    links: [
      { label: "Website", href: "#", icon: Globe },
    ],
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
    ],
    links: [
      { label: "Website", href: "#", icon: Globe },
      { label: "Source", href: "#", icon: Github },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="mt-12 sm:mt-24">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto px-4">
        <div className="mb-4 inline-flex items-center rounded-full bg-zinc-900 dark:bg-zinc-100 px-3 py-1 text-xs sm:text-sm font-medium text-zinc-50 dark:text-zinc-900">
          My Projects
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
          Check out my latest work
        </h2>
        <p className="mt-4 text-sm sm:text-lg text-zinc-600 dark:text-zinc-400">
          I&apos;ve worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:shadow-lg"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  // Use placeholder/blur if you have blurDataURL, otherwise optional
                />
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-400 text-sm">
                  Project Preview
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <span className="shrink-0 text-xs text-zinc-400 tabular-nums pt-1">
                  {project.date}
                </span>
              </div>

              <p className="mb-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-2 sm:gap-3">
                {project.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-zinc-50 dark:text-zinc-900 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}