import Image from 'next/image';
import SRM from '@/assets/images/srm.jpg'

const EDUCATION = [
  {
    school: "SRM University",
    degree: "computer science and engineering",
    date: "2020 - 2024",
    logo: SRM, // Add your image path here
    color: "bg-blue-900",
  },
  // {
  //   school: "Buildspace",
  //   degree: "s3, s4, sf1, s5",
  //   date: "2023 - 2024",
  //   logo: "/path/to/buildspace-logo.png", // Add your image path here
  //   color: "bg-black",
  // },
];

export default function EducationSection() {
  return (
    <section className="mt-8 sm:mt-12">
      <h2 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold">Education</h2>
      <div className="flex flex-col gap-4 sm:gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="flex items-start sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div
                className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full overflow-hidden ${edu.color}`}>
                <Image
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 truncate">
                  {edu.school}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 truncate capitalize">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 tabular-nums text-right whitespace-nowrap shrink-0">
              {edu.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}