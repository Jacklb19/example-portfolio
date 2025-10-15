export default function PortfolioSection({ dict }: any) {
  return (
    <ul className="flex flex-col sm:flex-row items-start sm:items-center col-span-12 rounded-2xl bg-card border border-border p-4 sm:p-6 transition-colors duration-400 gap-4 sm:gap-0">
      <li className="text-foreground text-lg sm:text-xl font-bold sm:border-r border-border sm:pr-4 sm:mr-2 whitespace-nowrap">
        {dict.sections.portfolio}
      </li>
      <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap items-center justify-start sm:pl-4 w-full sm:w-auto">
        {[
          { icon: '🪩', name: 'Bento' },
          { icon: '🎨', name: 'Behance' },
          { icon: '📸', name: 'Instagram' },
          { icon: '▶️', name: 'Youtube' },
          { icon: '🏀', name: 'Dribbble' },
        ].map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-2 bg-background border border-border text-foreground rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-400 hover:border-accent hover:scale-105 cursor-pointer"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </div>
    </ul>
  );
}