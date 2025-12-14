import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import zeroTrustData from "@/data/services/cybersecurity/zero-trust.json";

export default function ZeroTrust() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: zeroTrustData.hero.title[language],
      subtitle: zeroTrustData.hero.subtitle[language],
    },
    description: zeroTrustData.description[language],
    features: zeroTrustData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: zeroTrustData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
