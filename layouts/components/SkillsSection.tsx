export default function SkillsSection() {
  const SKILLS = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ];
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="rounded-full bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-50 dark:text-zinc-900 transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
