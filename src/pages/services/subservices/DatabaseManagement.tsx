import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import databaseManagementData from "@/data/services/database-management.json";

export default function DatabaseManagement() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: databaseManagementData.hero.title[language],
      subtitle: databaseManagementData.hero.subtitle[language],
    },
    description: databaseManagementData.description[language],
    features: databaseManagementData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: databaseManagementData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
