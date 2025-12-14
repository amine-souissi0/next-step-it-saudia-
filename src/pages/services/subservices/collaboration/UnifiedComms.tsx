import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import unifiedCommsData from "@/data/services/collaboration/unified-comms.json";

export default function UnifiedComms() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: unifiedCommsData.hero.title[language],
      subtitle: unifiedCommsData.hero.subtitle[language],
    },
    description: unifiedCommsData.description[language],
    features: unifiedCommsData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: unifiedCommsData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
