import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import aiCopilotData from "@/data/services/collaboration/ai-copilot.json";

export default function AICopilot() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: aiCopilotData.hero.title[language],
      subtitle: aiCopilotData.hero.subtitle[language],
    },
    description: aiCopilotData.description[language],
    features: aiCopilotData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: aiCopilotData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
