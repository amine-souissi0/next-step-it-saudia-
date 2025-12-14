import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import testingQAData from "@/data/services/integration/testing-qa.json";

export default function TestingQA() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: testingQAData.hero.title[language],
      subtitle: testingQAData.hero.subtitle[language],
      badge: testingQAData.hero.badge[language],
    },
    description: testingQAData.description[language],
    features: testingQAData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: testingQAData.technicalSpecs.title[language],
      items: testingQAData.technicalSpecs.items[language],
    },
    relatedServices: testingQAData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
