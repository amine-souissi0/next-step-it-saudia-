import { useLanguage } from "@/contexts/LanguageContext";
import SubservicePageTemplate from "@/components/templates/SubservicePageTemplate";
import backupStorageData from "@/data/services/backup-storage.json";

export default function BackupStorage() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: backupStorageData.hero.title[language],
      subtitle: backupStorageData.hero.subtitle[language],
      badge: backupStorageData.hero.badge[language],
    },
    description: backupStorageData.description[language],
    features: backupStorageData.features.map(feature => ({
      title: feature.title[language],
      description: feature.description[language],
    })),
    technicalSpecs: {
      title: backupStorageData.technicalSpecs.title[language],
      items: backupStorageData.technicalSpecs.items[language],
    },
    relatedServices: backupStorageData.relatedServices.map(service => ({
      title: service.title[language],
      link: service.link,
    })),
  };

  return <SubservicePageTemplate data={data} />;
}
