const EDUCATION = [
  {
    school: "Buildspace",
    degree: "s3, s4, sf1, s5",
    date: "2023 - 2024",
    logoFallback: "B",
    color: "bg-black",
  },
  {
    school: "Buildspace",
    degree: "s3, s4, sf1, s5",
    date: "2023 - 2024",
    logoFallback: "B",
    color: "bg-black",
  },
];

export default function EducationSection() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-bold">Education</h2>
      <div className="flex flex-col gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${edu.color}`}>
                <span className="text-xs font-bold">{edu.logoFallback}</span>
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {edu.school}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400 tabular-nums text-right">
              {edu.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
