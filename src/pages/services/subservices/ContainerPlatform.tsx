import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import containerPlatformData from "@/data/services/container-platform.json";

export default function ContainerPlatform() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: containerPlatformData.hero.title[language],
      subtitle: containerPlatformData.hero.subtitle[language],
      badge: containerPlatformData.hero.badge[language],
    },
    description: containerPlatformData.description[language],
    features: containerPlatformData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: containerPlatformData.technicalSpecs.title[language],
      items: containerPlatformData.technicalSpecs.items[language],
    },
    relatedServices: containerPlatformData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
