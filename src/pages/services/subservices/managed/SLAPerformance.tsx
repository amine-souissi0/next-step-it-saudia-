import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import slaData from "@/data/services/managed/sla.json";

export default function SLAPerformance() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: slaData.hero.title[language],
      subtitle: slaData.hero.subtitle[language],
    },
    description: slaData.description[language],
    features: slaData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: slaData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
