import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import systemIntegrationData from "@/data/services/integration/system-integration.json";

export default function SystemIntegration() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: systemIntegrationData.hero.title[language],
      subtitle: systemIntegrationData.hero.subtitle[language],
      badge: systemIntegrationData.hero.badge[language],
    },
    description: systemIntegrationData.description[language],
    features: systemIntegrationData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: systemIntegrationData.technicalSpecs.title[language],
      items: systemIntegrationData.technicalSpecs.items[language],
    },
    relatedServices: systemIntegrationData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
