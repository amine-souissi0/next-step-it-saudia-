import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import grcData from "@/data/services/cybersecurity/grc.json";

export default function GRCCompliance() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: grcData.hero.title[language],
      subtitle: grcData.hero.subtitle[language],
    },
    description: grcData.description[language],
    features: grcData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: grcData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
