import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import cloudMigrationData from "@/data/services/cloud-migration.json";

export default function CloudMigration() {
  const { language } = useLanguage();

  // Transform bilingual data to match template structure
  const data = {
    hero: {
      title: cloudMigrationData.hero.title[language],
      subtitle: cloudMigrationData.hero.subtitle[language],
    },
    description: cloudMigrationData.description[language],
    features: cloudMigrationData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: language === "en" ? "Technical Specifications" : "المواصفات الفنية",
      items: cloudMigrationData.technicalSpecs.flatMap(spec => [
        `${spec.category[language]}:`,
        ...spec.specs.map(s => `  • ${s[language]}`)
      ]),
    },
  };

  return <SubservicePageTemplate data={data} />;
}

