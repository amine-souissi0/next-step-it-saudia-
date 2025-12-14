import { Shield, Cloud, Lock, TrendingUp, Workflow, Database } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function Banking() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Banking & Financial Services Solutions" : "حلول الخدمات المصرفية والمالية",
      subtitle: language === "en"
        ? "Secure, compliant, and innovative technology solutions for banks and financial institutions"
        : "حلول تقنية آمنة ومتوافقة ومبتكرة للبنوك والمؤسسات المالية",
      badge: language === "en" ? "Financial Services" : "الخدمات المالية"
    },
    challenges: [
      {
        title: language === "en" ? "Regulatory Compliance" : "الامتثال التنظيمي",
        description: language === "en"
          ? "Meeting stringent SAMA regulations, PCI-DSS standards, and international banking compliance requirements"
          : "الالتزام بلوائح ساما الصارمة ومعايير PCI-DSS ومتطلبات الامتثال المصرفي الدولي"
      },
      {
        title: language === "en" ? "Cyber Threats & Fraud" : "التهديدات السيبرانية والاحتيال",
        description: language === "en"
          ? "Protecting against sophisticated financial cyber attacks, fraud, and money laundering activities"
          : "الحماية من الهجمات السيبرانية المالية المتطورة وأنشطة الاحتيال وغسيل الأموال"
      },
      {
        title: language === "en" ? "Digital Banking Transformation" : "التحول المصرفي الرقمي",
        description: language === "en"
          ? "Modernizing legacy banking systems while ensuring security, availability, and customer experience"
          : "تحديث الأنظمة المصرفية القديمة مع ضمان الأمان والتوافر وتجربة العملاء"
      },
      {
        title: language === "en" ? "Data Security & Privacy" : "أمن البيانات والخصوصية",
        description: language === "en"
          ? "Protecting sensitive customer financial data and ensuring privacy across all channels"
          : "حماية بيانات العملاء المالية الحساسة وضمان الخصوصية عبر جميع القنوات"
      },
      {
        title: language === "en" ? "Business Continuity" : "استمرارية الأعمال",
        description: language === "en"
          ? "Ensuring 99.999% availability for critical banking operations and rapid disaster recovery"
          : "ضمان توافر 99.999٪ للعمليات المصرفية الحرجة والتعافي السريع من الكوارث"
      },
      {
        title: language === "en" ? "FinTech Integration" : "تكامل التكنولوجيا المالية",
        description: language === "en"
          ? "Securely integrating innovative FinTech solutions while maintaining regulatory compliance"
          : "التكامل الآمن لحلول التكنولوجيا المالية المبتكرة مع الحفاظ على الامتثال التنظيمي"
      }
    ],
    solutions: [
      {
        id: "managed-soc",
        title: language === "en" ? "Financial SOC Services" : "خدمات مركز العمليات الأمنية المالية",
        description: language === "en"
          ? "Specialized 24/7 SOC for financial institutions with fraud detection and threat intelligence"
          : "مركز عمليات أمنية متخصص على مدار الساعة للمؤسسات المالية مع كشف الاحتيال واستخبارات التهديدات",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "private-cloud",
        title: language === "en" ? "Banking Private Cloud" : "السحابة الخاصة المصرفية",
        description: language === "en"
          ? "SAMA-compliant private cloud infrastructure for core banking systems and applications"
          : "بنية تحتية سحابية خاصة متوافقة مع ساما لأنظمة وتطبيقات الخدمات المصرفية الأساسية",
        link: getLocalizedPath("/services/cloud/private-cloud", language),
        icon: Cloud
      },
      {
        id: "identity-access",
        title: language === "en" ? "IAM & Zero Trust" : "إدارة الهوية والثقة الصفرية",
        description: language === "en"
          ? "Advanced identity management and Zero Trust architecture for secure banking access"
          : "إدارة هوية متقدمة وبنية الثقة الصفرية للوصول المصرفي الآمن",
        link: getLocalizedPath("/services/cybersecurity/identity-access", language),
        icon: Lock
      },
      {
        id: "disaster-recovery",
        title: language === "en" ? "Disaster Recovery" : "التعافي من الكوارث",
        description: language === "en"
          ? "Mission-critical DR solutions ensuring RPO/RTO compliance for banking operations"
          : "حلول تعافي من الكوارث حرجة تضمن الامتثال لـ RPO/RTO للعمليات المصرفية",
        link: getLocalizedPath("/services/cloud/disaster-recovery", language),
        icon: TrendingUp
      },
      {
        id: "system-integration",
        title: language === "en" ? "Core Banking Integration" : "تكامل الخدمات المصرفية الأساسية",
        description: language === "en"
          ? "Seamless integration of core banking systems with modern digital channels"
          : "تكامل سلس لأنظمة الخدمات المصرفية الأساسية مع القنوات الرقمية الحديثة",
        link: getLocalizedPath("/services/integration/system-integration", language),
        icon: Workflow
      },
      {
        id: "backup",
        title: language === "en" ? "Data Protection" : "حماية البيانات",
        description: language === "en"
          ? "Enterprise-grade backup and data protection for financial records and transactions"
          : "نسخ احتياطي وحماية بيانات على مستوى المؤسسات للسجلات والمعاملات المالية",
        link: getLocalizedPath("/services/cloud/backup", language),
        icon: Database
      }
    ],
    caseStudies: [
      {
        title: language === "en" ? "Major Bank Security Transformation" : "التحول الأمني لبنك رئيسي",
        description: language === "en"
          ? "Implemented comprehensive cybersecurity framework including SOC, SIEM, and Zero Trust for one of Saudi Arabia's largest banks."
          : "تنفيذ إطار عمل شامل للأمن السيبراني بما في ذلك مركز العمليات الأمنية وSIEM والثقة الصفرية لأحد أكبر بنوك المملكة.",
        results: language === "en" ? "90% reduction in security incidents, SAMA compliance achieved" : "تخفيض 90٪ في الحوادث الأمنية، تحقيق الامتثال لساما"
      }
    ],
    certifications: [
      "SAMA Compliant",
      "PCI-DSS Level 1",
      "ISO 27001:2013",
      "ISO 22301 (BCMS)",
      "SOC 2 Type II",
      "SWIFT CSP"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
