import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import disasterRecoveryData from "@/data/services/disaster-recovery.json";

export default function DisasterRecovery() {
  const { language } = useLanguage();

  // Transform bilingual data to match template structure
  const data = {
    hero: {
      title: disasterRecoveryData.hero.title[language],
      subtitle: disasterRecoveryData.hero.subtitle[language],
    },
    description: disasterRecoveryData.description[language],
    features: disasterRecoveryData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: disasterRecoveryData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}

