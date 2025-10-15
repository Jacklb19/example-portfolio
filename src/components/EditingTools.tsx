export default function EditingTools({ dict }: any) {
  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center col-span-12 sm:col-span-6 rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-10 transition-colors duration-400">
      <li className="text-foreground text-lg sm:text-xl font-bold sm:border-r border-border sm:pr-4 whitespace-nowrap">
        {dict.sections.editingTools}
      </li>
      <div className="flex gap-2 sm:gap-3 flex-wrap">
        <li className="flex items-center bg-[#000155] dark:bg-[#1e3a8a] rounded-lg font-bold text-[#a0a0f9] text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400">
          Ae
        </li>
        <li className="flex items-center bg-[#02035e] dark:bg-[#312e81] rounded-lg font-bold text-[#9997f9] text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-400">
          Pr
        </li>
      </div>
    </ul>
  );
}