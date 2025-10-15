export default function DetailsSection({ dict }: any) {
  return (
    <ul className="flex flex-col sm:flex-row items-start sm:items-center col-span-12 rounded-2xl bg-card border border-border p-4 sm:p-6 transition-colors duration-400 gap-4 sm:gap-0">
      <li className="text-foreground text-lg sm:text-xl font-bold sm:border-r border-border sm:pr-4 sm:mr-2 whitespace-nowrap">
        {dict.sections.details}
      </li>
      <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap items-center justify-start sm:pl-4 w-full sm:w-auto">
        <li className="flex items-center gap-2 bg-background border border-border rounded-lg text-foreground text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400 hover:border-accent">
          <span>🧑‍💻</span>
          <span>26 years</span>
        </li>
        <li className="flex items-center gap-2 bg-background border border-border rounded-lg text-foreground text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400 hover:border-accent max-w-full">
          <span className="hidden xs:inline">📧</span>
          <span className="truncate">iamsunilfreelancer.com</span>
        </li>
        <li className="flex items-center gap-2 bg-background border border-border rounded-lg text-foreground text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400 hover:border-accent">
          <span>📞</span>
          <span className="hidden xs:inline">+91 9899052055</span>
          <span className="xs:hidden">+91 98990...</span>
        </li>
        <li className="flex items-center gap-2 bg-background border border-border rounded-lg text-foreground text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400 hover:border-accent">
          <span>🇮🇳</span>
          <span>India</span>
        </li>
      </div>
    </ul>
  );
}