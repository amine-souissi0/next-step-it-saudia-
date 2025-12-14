import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import privateCloudData from "@/data/services/private-cloud.json";

export default function PrivateCloud() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: privateCloudData.hero.title[language],
      subtitle: privateCloudData.hero.subtitle[language],
      badge: privateCloudData.hero.badge[language],
    },
    description: privateCloudData.description[language],
    features: privateCloudData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: privateCloudData.technicalSpecs.title[language],
      items: privateCloudData.technicalSpecs.items[language],
    },
    relatedServices: privateCloudData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
