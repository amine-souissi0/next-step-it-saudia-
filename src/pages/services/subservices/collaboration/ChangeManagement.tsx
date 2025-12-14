import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import changeManagementData from "@/data/services/collaboration/change-management.json";

export default function ChangeManagement() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: changeManagementData.hero.title[language],
      subtitle: changeManagementData.hero.subtitle[language],
    },
    description: changeManagementData.description[language],
    features: changeManagementData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: changeManagementData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
