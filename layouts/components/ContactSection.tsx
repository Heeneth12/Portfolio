export default function ContactSection() {
  return (
    <section className="mt-12 mb-16">
      <div className="text-center">
        <div className="mb-4 inline-block rounded-full bg-black dark:bg-white px-4 py-1.5 text-sm font-medium text-white dark:text-black">
          Contact
        </div>

        <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>

        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Want to chat? Just shoot me a dm{" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
            with a direct question on Twitter
          </a>{" "}
          and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </section>
  );
}
