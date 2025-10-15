import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AvatarSection from "@/components/AvatarSection";
import IntroSection from "@/components/IntroSection";
import InterestsList from "@/components/InterestsList";
import ExperienceFreelance from "@/components/ExperienceFreelance";
import ExperienceMeetzed from "@/components/ExperienceMeetzed";
import DesignTools from "@/components/DesignTools";
import EducationSection from "@/components/EducationSection";
import EditingTools from "@/components/EditingTools";
import LanguagesList from "@/components/LanguagesList";
import PortfolioSection from "@/components/PortfolioSection";
import DetailsSection from "@/components/DetailsSection";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">
        <AvatarSection />
        <IntroSection dict={dict} />
        <InterestsList dict={dict} />
        <ExperienceFreelance dict={dict} />
        <ExperienceMeetzed dict={dict} />
        <DesignTools dict={dict} />
        <EducationSection dict={dict} />
        <EditingTools dict={dict} />
        <LanguagesList dict={dict} />
        <PortfolioSection dict={dict}/>
        <DetailsSection dict={dict}/>
      </main>
    </div>
  );
}
