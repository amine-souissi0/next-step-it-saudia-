import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import networkDesignData from "@/data/services/integration/network-security-design.json";

export default function NetworkSecurityDesign() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: networkDesignData.hero.title[language],
      subtitle: networkDesignData.hero.subtitle[language],
      badge: networkDesignData.hero.badge[language],
    },
    description: networkDesignData.description[language],
    features: networkDesignData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: networkDesignData.technicalSpecs.title[language],
      items: networkDesignData.technicalSpecs.items[language],
    },
    relatedServices: networkDesignData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
