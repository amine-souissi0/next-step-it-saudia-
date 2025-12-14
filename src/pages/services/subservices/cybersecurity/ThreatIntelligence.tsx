import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import threatIntelData from "@/data/services/cybersecurity/threat-intelligence.json";

export default function ThreatIntelligence() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: threatIntelData.hero.title[language],
      subtitle: threatIntelData.hero.subtitle[language],
    },
    description: threatIntelData.description[language],
    features: threatIntelData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: threatIntelData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
