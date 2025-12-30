const WORK_EXPERIENCE = [
  {
    company: "Atomic Finance",
    role: "Bitcoin Protocol Engineer",
    date: "May 2021 - Oct 2022",
    logo: "/logos/atomic.png",
    logoFallback: "A",
    color: "bg-indigo-500",
  },
  {
    company: "Shopify",
    role: "Software Engineer",
    date: "January 2021 - April 2021",
    logo: "/logos/shopify.png",
    logoFallback: "S",
    color: "bg-green-500",
  },
  {
    company: "Nvidia",
    role: "Software Engineer",
    date: "January 2020 - April 2020",
    logo: "/logos/nvidia.png",
    logoFallback: "N",
    color: "bg-green-600",
  },
  {
    company: "Splunk",
    role: "Software Engineer",
    date: "January 2019 - April 2019",
    logo: "/logos/splunk.png",
    logoFallback: "S",
    color: "bg-pink-600",
  }
];

export default function WorkExperienceSection() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-bold">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {WORK_EXPERIENCE.map((job, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${job.color}`}>
                <span className="text-xs font-bold">{job.logoFallback}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.company}
                </h3>
                <span className="hidden sm:inline-block text-zinc-400">•</span>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {job.role}
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400 tabular-nums text-right">
              {job.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
