"use client";

import Image from "next/image";
import { Globe, Github } from "lucide-react";
import EZH from "@/assets/images/ezh.png";
import EZH_INV from "@/assets/images/ezh_inventory.png";

const PROJECTS = [
  {
    title: "EZ Hub",
    description: `
      EZ Hub is a centralized SaaS platform designed to interconnect multiple products seamlessly.
      It provides a unified ecosystem for managing subscriptions, authentication, billing, and shared services across all EZ products
    `,
    image: EZH,
    date: "Jan 2024 – Feb 2024",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Stripe",
      "Shadcn UI",
    ],
    links: [{ label: "Website", href: "https://ez-hub.in", icon: Globe }],
  },
  {
    title: "EZ Inventory",
    description:
      "EZ Inventory is a modern inventory management SaaS for Indian businesses, offering real-time stock tracking, automated reordering, barcode scanning, and multi-warehouse management. It helps businesses streamline operations.",
    image: EZH_INV,
    date: "Jun 2024 – Present",
    tags: [
      "Angular 18",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Stripe",
      "Shadcn UI",
      "Next.js",
    ],
    links: [
      { label: "Website", href: "https://ez-hub.in/inventory", icon: Globe },
      {
        label: "Backend",
        href: "https://github.com/Heeneth12/EZ-Inventory-BE",
        icon: Github,
      },
      {
        label: "Frontend",
        href: "https://github.com/Heeneth12/EZ-Inventory",
        icon: Github,
      },
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
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:shadow-lg">
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
                    className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-[10px] sm:text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-1 sm:gap-2">
                {project.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-1 py-1 sm:px-2 sm:py-2 text-xs sm:text-sm font-medium text-zinc-50 dark:text-zinc-900 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300">
                      <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
