import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import virtualizationData from "@/data/services/virtualization.json";

export default function Virtualization() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: virtualizationData.hero.title[language],
      subtitle: virtualizationData.hero.subtitle[language],
      badge: virtualizationData.hero.badge[language],
    },
    description: virtualizationData.description[language],
    features: virtualizationData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: virtualizationData.technicalSpecs.title[language],
      items: virtualizationData.technicalSpecs.items[language],
    },
    relatedServices: virtualizationData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
