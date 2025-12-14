import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import publicCloudData from "@/data/services/public-cloud.json";

export default function PublicCloud() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: publicCloudData.hero.title[language],
      subtitle: publicCloudData.hero.subtitle[language],
      badge: publicCloudData.hero.badge[language],
    },
    description: publicCloudData.description[language],
    features: publicCloudData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: publicCloudData.technicalSpecs.title[language],
      items: publicCloudData.technicalSpecs.items[language],
    },
    relatedServices: publicCloudData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
