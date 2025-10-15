export default function InterestsList({ dict }: any) {
  return (
    <ul className="flex flex-col sm:flex-row items-start sm:items-center col-span-12 sm:col-span-9 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-card border border-border transition-colors duration-400">
      <li className="text-foreground text-lg sm:text-xl font-bold sm:border-r border-border sm:pr-4 whitespace-nowrap">
        {dict.sections.interests.title}
      </li>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {dict.sections.interests.items.map((item: string) => (
          <li
            key={item}
            className="flex items-center bg-background border border-border text-foreground rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400 hover:border-accent"
          >
            {item}
          </li>
        ))}
      </div>
    </ul>
  );
}