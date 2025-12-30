export default function ContactSection() {
  return (
    <section className="mt-10 mb-12 sm:mt-20 sm:mb-24">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto px-4">
        
        {/* Badge */}
        <div className="mb-4 inline-flex items-center rounded-full bg-zinc-900 dark:bg-zinc-100 px-3 py-1 text-xs sm:text-sm font-medium text-zinc-50 dark:text-zinc-900 shadow-sm">
          Contact
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
          Get in Touch
        </h2>

        {/* Main Text */}
        <p className="mt-4 text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Want to chat? Just shoot me a dm{" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-400/50 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all"
          >
            with a direct question on Twitter
          </a>{" "}
          and I&apos;ll respond whenever I can.
        </p>

        {/* Disclaimer / Fine print */}
        <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-500">
          (Please note: I will ignore all soliciting)
        </p>
      </div>
    </section>
  );
}