import { Shield, Cloud, Lock, Database, Users, Workflow } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function Healthcare() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Healthcare Solutions" : "حلول الرعاية الصحية",
      subtitle: language === "en"
        ? "Secure and compliant technology solutions for hospitals, clinics, and healthcare providers"
        : "حلول تقنية آمنة ومتوافقة للمستشفيات والعيادات ومقدمي الرعاية الصحية",
      badge: language === "en" ? "Healthcare" : "الرعاية الصحية"
    },
    challenges: [
      {
        title: language === "en" ? "Patient Data Protection" : "حماية بيانات المرضى",
        description: language === "en"
          ? "Securing sensitive patient health records and ensuring HIPAA/GDPR compliance"
          : "تأمين سجلات صحة المرضى الحساسة وضمان الامتثال لـ HIPAA/GDPR"
      },
      {
        title: language === "en" ? "Medical Device Security" : "أمن الأجهزة الطبية",
        description: language === "en"
          ? "Protecting connected medical devices and IoMT infrastructure from cyber threats"
          : "حماية الأجهزة الطبية المتصلة والبنية التحتية لإنترنت الأشياء الطبية من التهديدات السيبرانية"
      },
      {
        title: language === "en" ? "Digital Health Transformation" : "التحول الصحي الرقمي",
        description: language === "en"
          ? "Modernizing legacy healthcare systems and enabling telemedicine capabilities"
          : "تحديث أنظمة الرعاية الصحية القديمة وتمكين قدرات التطبيب عن بُعد"
      },
      {
        title: language === "en" ? "System Interoperability" : "التشغيل البيني للأنظمة",
        description: language === "en"
          ? "Integrating diverse healthcare systems including HIS, EMR, and laboratory systems"
          : "تكامل أنظمة الرعاية الصحية المتنوعة بما في ذلك HIS وEMR وأنظمة المختبرات"
      },
      {
        title: language === "en" ? "Ransomware Protection" : "الحماية من برامج الفدية",
        description: language === "en"
          ? "Defending against ransomware attacks targeting healthcare organizations"
          : "الدفاع ضد هجمات برامج الفدية التي تستهدف مؤسسات الرعاية الصحية"
      },
      {
        title: language === "en" ? "24/7 Availability" : "التوافر على مدار الساعة",
        description: language === "en"
          ? "Ensuring continuous availability of critical healthcare systems and applications"
          : "ضمان التوافر المستمر لأنظمة وتطبيقات الرعاية الصحية الحرجة"
      }
    ],
    solutions: [
      {
        id: "managed-soc",
        title: language === "en" ? "Healthcare SOC Services" : "خدمات مركز العمليات الأمنية الصحية",
        description: language === "en"
          ? "Specialized 24/7 SOC for healthcare with HIPAA compliance and medical device monitoring"
          : "مركز عمليات أمنية متخصص على مدار الساعة للرعاية الصحية مع الامتثال لـ HIPAA ومراقبة الأجهزة الطبية",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "private-cloud",
        title: language === "en" ? "Healthcare Private Cloud" : "السحابة الخاصة للرعاية الصحية",
        description: language === "en"
          ? "HIPAA-compliant private cloud infrastructure for patient data and healthcare applications"
          : "بنية تحتية سحابية خاصة متوافقة مع HIPAA لبيانات المرضى وتطبيقات الرعاية الصحية",
        link: getLocalizedPath("/services/cloud/private-cloud", language),
        icon: Cloud
      },
      {
        id: "identity-access",
        title: language === "en" ? "Healthcare IAM" : "إدارة الهوية للرعاية الصحية",
        description: language === "en"
          ? "Secure identity and access management for healthcare staff and patient portals"
          : "إدارة هوية ووصول آمنة لطاقم الرعاية الصحية وبوابات المرضى",
        link: getLocalizedPath("/services/cybersecurity/identity-access", language),
        icon: Lock
      },
      {
        id: "backup",
        title: language === "en" ? "Medical Data Protection" : "حماية البيانات الطبية",
        description: language === "en"
          ? "Comprehensive backup and recovery for patient records and medical imaging"
          : "نسخ احتياطي واسترداد شامل لسجلات المرضى والتصوير الطبي",
        link: getLocalizedPath("/services/cloud/backup", language),
        icon: Database
      },
      {
        id: "unified-comms",
        title: language === "en" ? "Telemedicine Solutions" : "حلول التطبيب عن بُعد",
        description: language === "en"
          ? "Secure telemedicine and virtual consultation platforms"
          : "منصات آمنة للتطبيب عن بُعد والاستشارات الافتراضية",
        link: getLocalizedPath("/services/collaboration/unified-comms", language),
        icon: Users
      },
      {
        id: "system-integration",
        title: language === "en" ? "Healthcare System Integration" : "تكامل أنظمة الرعاية الصحية",
        description: language === "en"
          ? "Integration of HIS, EMR, PACS, and laboratory information systems"
          : "تكامل أنظمة HIS وEMR وPACS ونظم معلومات المختبرات",
        link: getLocalizedPath("/services/integration/system-integration", language),
        icon: Workflow
      }
    ],
    certifications: [
      "HIPAA Compliant",
      "ISO 27001:2013",
      "ISO 27799 (Health Informatics)",
      "HITRUST CSF Certified",
      "MOH Accredited"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
