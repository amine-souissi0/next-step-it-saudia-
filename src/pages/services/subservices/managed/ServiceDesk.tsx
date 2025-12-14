import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import serviceDeskData from "@/data/services/managed/service-desk.json";

export default function ServiceDesk() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: serviceDeskData.hero.title[language],
      subtitle: serviceDeskData.hero.subtitle[language],
    },
    description: serviceDeskData.description[language],
    features: serviceDeskData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: serviceDeskData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
