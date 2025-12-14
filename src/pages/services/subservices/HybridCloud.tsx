import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import hybridCloudData from "@/data/services/hybrid-cloud.json";

export default function HybridCloud() {
  const { language } = useLanguage();

  // Transform bilingual data to match template structure
  const data = {
    hero: {
      title: hybridCloudData.hero.title[language],
      subtitle: hybridCloudData.hero.subtitle[language],
    },
    description: hybridCloudData.description[language],
    features: hybridCloudData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: hybridCloudData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}

