import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import migrationProjectsData from "@/data/services/integration/migration-projects.json";

export default function MigrationProjects() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: migrationProjectsData.hero.title[language],
      subtitle: migrationProjectsData.hero.subtitle[language],
      badge: migrationProjectsData.hero.badge[language],
    },
    description: migrationProjectsData.description[language],
    features: migrationProjectsData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: migrationProjectsData.technicalSpecs.title[language],
      items: migrationProjectsData.technicalSpecs.items[language],
    },
    relatedServices: migrationProjectsData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
