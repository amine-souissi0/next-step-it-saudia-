import { Shield, Cloud, Network, Eye, Workflow, Database } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function OilGas() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Oil & Gas Industry Solutions" : "حلول صناعة النفط والغاز",
      subtitle: language === "en"
        ? "Secure and resilient technology solutions for oil & gas operations and critical infrastructure"
        : "حلول تقنية آمنة ومرنة لعمليات النفط والغاز والبنية التحتية الحرجة",
      badge: language === "en" ? "Energy Sector" : "قطاع الطاقة"
    },
    challenges: [
      {
        title: language === "en" ? "OT/IT Security Convergence" : "تقارب أمن OT/IT",
        description: language === "en"
          ? "Securing operational technology and industrial control systems while integrating with IT infrastructure"
          : "تأمين التكنولوجيا التشغيلية وأنظمة التحكم الصناعية مع التكامل مع البنية التحتية لتكنولوجيا المعلومات"
      },
      {
        title: language === "en" ? "Critical Infrastructure Protection" : "حماية البنية التحتية الحرجة",
        description: language === "en"
          ? "Protecting refineries, pipelines, and production facilities from cyber and physical threats"
          : "حماية المصافي وخطوط الأنابيب ومرافق الإنتاج من التهديدات السيبرانية والمادية"
      },
      {
        title: language === "en" ? "Remote Operations" : "العمليات عن بُعد",
        description: language === "en"
          ? "Enabling secure remote monitoring and control of offshore and remote facilities"
          : "تمكين المراقبة والتحكم الآمن عن بُعد للمنشآت البحرية والنائية"
      },
      {
        title: language === "en" ? "Regulatory Compliance" : "الامتثال التنظيمي",
        description: language === "en"
          ? "Meeting strict energy sector regulations and international safety standards"
          : "الالتزام بلوائح قطاع الطاقة الصارمة ومعايير السلامة الدولية"
      },
      {
        title: language === "en" ? "Data Management" : "إدارة البيانات",
        description: language === "en"
          ? "Managing massive volumes of sensor data, exploration data, and operational information"
          : "إدارة كميات هائلة من بيانات المستشعرات وبيانات الاستكشاف والمعلومات التشغيلية"
      },
      {
        title: language === "en" ? "Business Continuity" : "استمرارية الأعمال",
        description: language === "en"
          ? "Ensuring uninterrupted operations and rapid recovery from incidents"
          : "ضمان العمليات المتواصلة والتعافي السريع من الحوادث"
      }
    ],
    solutions: [
      {
        id: "managed-soc",
        title: language === "en" ? "Industrial SOC Services" : "خدمات مركز العمليات الأمنية الصناعية",
        description: language === "en"
          ? "Specialized 24/7 SOC for OT/IT environments with ICS/SCADA monitoring"
          : "مركز عمليات أمنية متخصص على مدار الساعة لبيئات OT/IT مع مراقبة ICS/SCADA",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "private-cloud",
        title: language === "en" ? "Energy Private Cloud" : "السحابة الخاصة للطاقة",
        description: language === "en"
          ? "Secure private cloud infrastructure for exploration, production, and operational data"
          : "بنية تحتية سحابية خاصة آمنة لبيانات الاستكشاف والإنتاج والعمليات",
        link: getLocalizedPath("/services/cloud/private-cloud", language),
        icon: Cloud
      },
      {
        id: "network-design",
        title: language === "en" ? "Industrial Network Design" : "تصميم الشبكات الصناعية",
        description: language === "en"
          ? "Secure network architecture for refineries, pipelines, and remote facilities"
          : "بنية شبكة آمنة للمصافي وخطوط الأنابيب والمنشآت النائية",
        link: getLocalizedPath("/services/integration/network-security-design", language),
        icon: Network
      },
      {
        id: "threat-intelligence",
        title: language === "en" ? "Energy Threat Intelligence" : "استخبارات تهديدات الطاقة",
        description: language === "en"
          ? "Specialized threat intelligence for energy sector targeting and APT groups"
          : "استخبارات تهديدات متخصصة لاستهداف قطاع الطاقة ومجموعات التهديدات المستمرة المتقدمة",
        link: getLocalizedPath("/services/cybersecurity/threat-intelligence", language),
        icon: Eye
      },
      {
        id: "system-integration",
        title: language === "en" ? "OT/IT Integration" : "تكامل OT/IT",
        description: language === "en"
          ? "Secure integration of operational technology with enterprise IT systems"
          : "تكامل آمن للتكنولوجيا التشغيلية مع أنظمة تكنولوجيا المعلومات للمؤسسات",
        link: getLocalizedPath("/services/integration/system-integration", language),
        icon: Workflow
      },
      {
        id: "backup-dr",
        title: language === "en" ? "Disaster Recovery" : "التعافي من الكوارث",
        description: language === "en"
          ? "Mission-critical DR for operational continuity and data protection"
          : "التعافي من الكوارث الحرجة لاستمرارية العمليات وحماية البيانات",
        link: getLocalizedPath("/services/cloud/disaster-recovery", language),
        icon: Database
      }
    ],
    certifications: [
      "IEC 62443 Compliant",
      "ISO 27001:2013",
      "NERC CIP Compliant",
      "API Security Standards",
      "ISA/IEC 62443"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
