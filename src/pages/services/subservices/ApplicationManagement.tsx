import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import applicationManagementData from "@/data/services/application-management.json";

export default function ApplicationManagement() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: applicationManagementData.hero.title[language],
      subtitle: applicationManagementData.hero.subtitle[language],
    },
    description: applicationManagementData.description[language],
    features: applicationManagementData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: applicationManagementData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
