import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import riskComplianceData from "@/data/services/cybersecurity/risk-compliance.json";

export default function RiskCompliance() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: riskComplianceData.hero.title[language],
      subtitle: riskComplianceData.hero.subtitle[language],
    },
    description: riskComplianceData.description[language],
    features: riskComplianceData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: riskComplianceData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
