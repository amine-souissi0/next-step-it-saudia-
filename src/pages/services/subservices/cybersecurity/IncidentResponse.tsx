import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import incidentResponseData from "@/data/services/cybersecurity/incident-response.json";

export default function IncidentResponse() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: incidentResponseData.hero.title[language],
      subtitle: incidentResponseData.hero.subtitle[language],
    },
    description: incidentResponseData.description[language],
    features: incidentResponseData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: incidentResponseData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
