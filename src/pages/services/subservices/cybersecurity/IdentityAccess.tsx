import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import identityAccessData from "@/data/services/cybersecurity/identity-access.json";

export default function IdentityAccess() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: identityAccessData.hero.title[language],
      subtitle: identityAccessData.hero.subtitle[language],
    },
    description: identityAccessData.description[language],
    features: identityAccessData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: identityAccessData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
