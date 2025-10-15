export default function EducationSection({ dict }: any) {
  return (
    <section className="flex flex-col gap-4 sm:gap-6 items-center col-span-12 sm:col-span-6 row-span-3 rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-10 transition-colors duration-400">
      {[
        dict.sections.education.highSchool,
        dict.sections.education.diploma,
        dict.sections.education.graduation,
      ].map((item: any, index: number) => (
        <article
          key={index}
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-4 ${
            index < 2 ? "border-b border-border pb-4 sm:pb-6 lg:pb-8" : ""
          }`}
        >
          <span className="flex flex-col gap-1 flex-1">
            <h2 className="text-foreground text-xl sm:text-2xl lg:text-3xl font-bold">
              {item.title}
            </h2>
            <p className="text-muted text-base sm:text-lg">{item.field}</p>
            <p className="text-muted text-xs sm:text-sm">{item.location}</p>
          </span>
          <span className="bg-background border border-border text-foreground rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-2 whitespace-nowrap self-start sm:self-center transition-colors duration-400">
            {item.period}
          </span>
        </article>
      ))}
    </section>
  );
}