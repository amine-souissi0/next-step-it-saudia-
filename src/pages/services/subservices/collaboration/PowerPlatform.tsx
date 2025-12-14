import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import powerPlatformData from "@/data/services/collaboration/power-platform.json";

export default function PowerPlatform() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: powerPlatformData.hero.title[language],
      subtitle: powerPlatformData.hero.subtitle[language],
    },
    description: powerPlatformData.description[language],
    features: powerPlatformData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: powerPlatformData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
