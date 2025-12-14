import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import projectManagementData from "@/data/services/integration/project-management.json";

export default function ProjectManagement() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: projectManagementData.hero.title[language],
      subtitle: projectManagementData.hero.subtitle[language],
      badge: projectManagementData.hero.badge[language],
    },
    description: projectManagementData.description[language],
    features: projectManagementData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: projectManagementData.technicalSpecs.title[language],
      items: projectManagementData.technicalSpecs.items[language],
    },
    relatedServices: projectManagementData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
