export default function SkillsSection() {
  const SKILLS = [
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MySQL",
    "Postgres",
    "Docker",
    "Kubernetes",
  ];

  return (
    <section className="mt-6 sm:mt-10">
      <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Skills</h2>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="
              rounded-full 
              bg-zinc-900 dark:bg-zinc-100 
              px-3 py-1.5 sm:px-4 sm:py-2 
              text-xs sm:text-sm font-medium 
              text-zinc-50 dark:text-zinc-900 
              transition-all duration-200
              hover:bg-zinc-700 dark:hover:bg-zinc-300
              hover:scale-105
              cursor-default
              whitespace-nowrap
            ">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
