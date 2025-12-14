import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import vdiData from "@/data/services/collaboration/vdi.json";

export default function VDI() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: vdiData.hero.title[language],
      subtitle: vdiData.hero.subtitle[language],
    },
    description: vdiData.description[language],
    features: vdiData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: vdiData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}
