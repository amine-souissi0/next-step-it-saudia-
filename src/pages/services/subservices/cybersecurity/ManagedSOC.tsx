import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import managedSocData from "@/data/services/cybersecurity/managed-soc.json";

export default function ManagedSOC() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: managedSocData.hero.title[language],
      subtitle: managedSocData.hero.subtitle[language],
    },
    description: managedSocData.description[language],
    features: managedSocData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: managedSocData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
