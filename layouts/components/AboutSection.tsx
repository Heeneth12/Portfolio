export default function AboutSection() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold">About</h2>

      <div
        className="
          mt-2
          text-zinc-600 dark:text-zinc-400
          text-xs sm:text-base
          font-semibold
          leading-relaxed
          text-left sm:text-justify
        ">
        <p>
          I'm a software developer with over 2 years of experience and a
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            degree in Computer Science
          </span>
          . Currently building
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 font-bold cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            EZ-Hub
          </span>
          , a idea with multiple interconnected SaaS products. As a solo
          developer, I'm working on
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            EZ-Inventory
          </span>
          and other tools. I'm also
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            open to freelancing
          </span>
          and love building products.
        </p>
      </div>
    </section>
  );
}
