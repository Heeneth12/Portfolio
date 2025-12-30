import Image from "next/image";
import user from "@/assets/images/user.jpeg";
import SplitText from "@/components/SplitText";

export default function Header() {
  return (
    <section className="flex flex-row items-start justify-between gap-8 sm:items-center">
      <div className="flex flex-col gap-2 flex-1">
        <SplitText
          text="Hi, I'm Heeneth 👋"
          className="text-2xl font-bold tracking-tight sm:text-5xl text-left"
          tag="h1"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        <p
          className="
            max-w-md
            text-sm sm:text-lg
            leading-snug sm:leading-relaxed
            text-zinc-800 dark:text-zinc-400
          ">
          Software Engineer turned Entrepreneur. I love building things and
          helping people. Very active on Twitter.
        </p>
      </div>

      {/* Avatar Image */}
      <div className="relative h-18 w-18 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
        <Image
          src={user}
          alt="Heeneth"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
