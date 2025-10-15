export default function DesignTools({ dict }: any) {
  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center col-span-12 sm:col-span-6 rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-10 transition-colors duration-400">
      <li className="text-foreground text-lg sm:text-xl font-bold sm:border-r border-border sm:pr-4 whitespace-nowrap">
        {dict.sections.designTools}
      </li>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        <li className="flex items-center bg-[#360300] dark:bg-[#8b1a00] rounded-lg font-bold text-[#da9f4c] text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400">
          Ai
        </li>
        <li className="flex items-center bg-[#0b172a] dark:bg-[#1e3a8a] rounded-lg font-bold text-[#74aaf2] text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400">
          Ps
        </li>
        <li className="flex items-center bg-[#59051e] dark:bg-[#9d174d] rounded-lg font-bold text-[#d84b6f] text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400">
          Id
        </li>
        <li className="flex items-center bg-[#480d30] dark:bg-[#701a75] rounded-lg font-bold text-[#de6ff0] text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400">
          Xd
        </li>
      </div>
    </ul>
  );
}