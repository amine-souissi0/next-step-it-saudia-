import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import infrastructureManagementData from "@/data/services/infrastructure-management.json";

export default function InfrastructureManagement() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: infrastructureManagementData.hero.title[language],
      subtitle: infrastructureManagementData.hero.subtitle[language],
    },
    description: infrastructureManagementData.description[language],
    features: infrastructureManagementData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: infrastructureManagementData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
