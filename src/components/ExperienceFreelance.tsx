export default function ExperienceFreelance({ dict }: any) {
  return (
    <article className="col-span-12 sm:col-span-6 rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-10 transition-colors duration-400">
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border pb-4 sm:pb-6 lg:pb-10 gap-3 sm:gap-4">
        <header className="flex flex-col gap-1 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            {dict.sections.experience.freelance.title}
          </h3>
          <p className="text-muted text-xs sm:text-sm">
            {dict.sections.experience.freelance.role}
          </p>
        </header>
        <span className="bg-background border border-border text-foreground rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-2 whitespace-nowrap self-start sm:self-center transition-colors duration-400">
          {dict.sections.experience.freelance.period}
        </span>
      </section>
      <ul className="list-disc list-inside text-foreground text-xs sm:text-sm leading-relaxed mt-4 sm:mt-6 space-y-2 marker:text-muted">
        {dict.sections.experience.freelance.bullets.map((b: string, index: number) => (
          <li key={index} className="pl-1">
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}