import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import nocServicesData from "@/data/services/noc-services.json";

export default function NOCServices() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: nocServicesData.hero.title[language],
      subtitle: nocServicesData.hero.subtitle[language],
    },
    description: nocServicesData.description[language],
    features: nocServicesData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: nocServicesData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
