export default function AboutSection() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold">About</h2>
      <div className="prose  prose-zinc dark:prose-invert text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p className="">
          At the end of 2022, I quit my job as a software engineer to go
          fulltime into building and scaling my own SaaS businesses. In the
          past,
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            I pursued a double degree in computer science and business
          </span>
          ,
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            interned at big tech companies in Silicon Valley
          </span>
          , and
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            competed in over 21 hackathons for fun
          </span>
          . I also had the pleasure of being a part of the first ever in-person
          cohort of buildspace called
          <span className="underline decoration-zinc-400 underline-offset-4 mx-1 font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-colors">
            buildspace sf1
          </span>
          .
        </p>
      </div>
    </section>
  );
}
