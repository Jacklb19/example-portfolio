export default function IntroSection({ dict }: any) {
  return (
    <p className="p-4 sm:p-5 lg:p-6 text-base sm:text-lg lg:text-2xl text-foreground leading-relaxed col-span-12 sm:col-span-9 rounded-2xl bg-card border border-border transition-colors duration-400">
      {dict.intro}
    </p>
  );
}