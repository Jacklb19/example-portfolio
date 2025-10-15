export default function LanguagesList({ dict }: any) {
  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center col-span-12 sm:col-span-6 rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-10 transition-colors duration-400">
      <li className="text-foreground text-lg sm:text-xl font-bold sm:border-r border-border sm:pr-4 whitespace-nowrap">
        {dict.sections.languages}
      </li>
      <div className="flex gap-3 sm:gap-4">
        <li className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200">
          🇮🇳
        </li>
        <li className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200">
          🇬🇧
        </li>
        <li className="text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-200">
          🇺🇸
        </li>
      </div>
    </ul>
  );
}