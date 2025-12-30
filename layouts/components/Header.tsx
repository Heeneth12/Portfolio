import Image from "next/image";
import user from "@/assets/images/user.jpeg";

export default function Header() {
  return (
    <section className="flex flex-col-reverse items-start justify-between gap-8 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm Heeneth{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Software Engineer turned Entrepreneur. I love building things and
          helping people. Very active on Twitter.
        </p>
      </div>

      {/* Avatar Image */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
        <Image
          src={user}
          alt="Dillion"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
