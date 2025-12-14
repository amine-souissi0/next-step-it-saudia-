import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import itStrategyData from "@/data/services/integration/it-strategy.json";

export default function ITStrategy() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: itStrategyData.hero.title[language],
      subtitle: itStrategyData.hero.subtitle[language],
      badge: itStrategyData.hero.badge[language],
    },
    description: itStrategyData.description[language],
    features: itStrategyData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: itStrategyData.technicalSpecs.title[language],
      items: itStrategyData.technicalSpecs.items[language],
    },
    relatedServices: itStrategyData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
