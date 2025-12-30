"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import AG from "@/assets/images/AG.jpg";
import BG from "@/assets/images/bridgelabz.jpg";

const WORK_EXPERIENCE = [
  {
    company: "Dr. Agarwal's Health Care Limited",
    role: "Software Developer",
    date: "Jan 2024 – Present",
    logo: AG,
    color: "bg-indigo-600",
    description:
      "Led development of patient management system using React and Node.js. Implemented real-time appointment scheduling features and integrated electronic health records. Optimized database queries reducing load times by 40%.",
  },
  {
    company: "BridgeLabz",
    role: "Software Developer Intern",
    date: "Nov 2023 – Jan 2024",
    logo: BG,
    color: "bg-green-500",
    description:
      "Developed RESTful APIs using Express.js and MongoDB. Collaborated with cross-functional teams to deliver features on time. Participated in code reviews and implemented best practices for clean code.",
  },
];

export default function WorkExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-8 sm:mt-12">
      <h2 className="mb-2 sm:mb-4 text-lg sm:text-xl font-bold">
        Work Experience
      </h2>
      <div className="flex flex-col gap-3 sm:gap-6">
        {WORK_EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-200 mb-2">
            <div
              onClick={() => toggleExpand(index)}
              className="flex items-start justify-between gap-3 cursor-pointer select-none">
              {/* Left Side: Logo + Text */}
              <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full overflow-hidden ${exp.color}`}>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>

                <div className="flex flex-col min-w-0 pt-0.5">
                  <h3 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 truncate pr-2">
                    {exp.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 truncate">
                    {exp.role}
                  </p>
                  {/* Date shows here on very small mobile screens if you prefer, 
                      but keeping it on the right looks cleaner usually. 
                      Below keeps the current layout but shrinks text. */}
                </div>
              </div>

              {/* Right Side: Date + Chevron */}
              <div className="flex flex-col items-end gap-1 sm:flex-row sm:items-center sm:gap-3 shrink-0 pt-0.5">
                <div className="text-[10px] sm:text-sm text-zinc-400 dark:text-zinc-500 tabular-nums whitespace-nowrap">
                  {exp.date}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 transition-transform duration-200 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Expanded Description */}
            <div
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                expandedIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}>
              <div className="overflow-hidden">
                {/* Mobile: px-3 (aligns with outer padding) + pl-[3.25rem] (pushes text past logo)
                   Desktop: pl-20 (pushes text past larger logo)
                */}
                <div className="px-3 pb-4 pt-1 sm:pl-20 sm:pr-12 pl-[3.25rem]">
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
