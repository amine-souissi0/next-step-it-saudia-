import { Network, Cloud, Shield, Zap, Workflow, Settings } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function Telecom() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Telecommunications Solutions" : "حلول الاتصالات",
      subtitle: language === "en"
        ? "Advanced network infrastructure and security solutions for telecom operators and service providers"
        : "بنية تحتية متقدمة للشبكات وحلول أمنية لمشغلي الاتصالات ومزودي الخدمات",
      badge: language === "en" ? "Telecommunications" : "الاتصالات"
    },
    challenges: [
      {
        title: language === "en" ? "5G Network Deployment" : "نشر شبكات الجيل الخامس",
        description: language === "en"
          ? "Deploying and securing next-generation 5G networks with edge computing capabilities"
          : "نشر وتأمين شبكات الجيل الخامس من الجيل التالي مع قدرات الحوسبة الطرفية"
      },
      {
        title: language === "en" ? "Network Security" : "أمن الشبكات",
        description: language === "en"
          ? "Protecting critical telecom infrastructure from DDoS attacks and network intrusions"
          : "حماية البنية التحتية الحرجة للاتصالات من هجمات DDoS والاختراقات الشبكية"
      },
      {
        title: language === "en" ? "IoT Management" : "إدارة إنترنت الأشياء",
        description: language === "en"
          ? "Managing and securing millions of IoT devices and connections across the network"
          : "إدارة وتأمين ملايين أجهزة واتصالات إنترنت الأشياء عبر الشبكة"
      },
      {
        title: language === "en" ? "Regulatory Compliance" : "الامتثال التنظيمي",
        description: language === "en"
          ? "Meeting CITC regulations and international telecom standards"
          : "الالتزام بلوائح هيئة الاتصالات والمعايير الدولية للاتصالات"
      },
      {
        title: language === "en" ? "Service Quality" : "جودة الخدمة",
        description: language === "en"
          ? "Ensuring 99.999% network availability and optimal performance for subscribers"
          : "ضمان توافر الشبكة بنسبة 99.999٪ والأداء الأمثل للمشتركين"
      },
      {
        title: language === "en" ? "Digital Transformation" : "التحول الرقمي",
        description: language === "en"
          ? "Modernizing OSS/BSS systems and enabling new digital services"
          : "تحديث أنظمة OSS/BSS وتمكين الخدمات الرقمية الجديدة"
      }
    ],
    solutions: [
      {
        id: "network-design",
        title: language === "en" ? "5G Network Design" : "تصميم شبكات الجيل الخامس",
        description: language === "en"
          ? "Comprehensive 5G network architecture and deployment services"
          : "بنية شبكة الجيل الخامس الشاملة وخدمات النشر",
        link: getLocalizedPath("/services/integration/network-security-design", language),
        icon: Network
      },
      {
        id: "cloud",
        title: language === "en" ? "Telco Cloud Solutions" : "حلول السحابة للاتصالات",
        description: language === "en"
          ? "NFV, SDN, and edge computing platforms for modern telecom infrastructure"
          : "منصات NFV وSDN والحوسبة الطرفية للبنية التحتية الحديثة للاتصالات",
        link: getLocalizedPath("/services/cloud/hybrid-cloud", language),
        icon: Cloud
      },
      {
        id: "managed-soc",
        title: language === "en" ? "Telecom SOC Services" : "خدمات مركز العمليات الأمنية",
        description: language === "en"
          ? "24/7 security monitoring for telecom networks and critical infrastructure"
          : "مراقبة أمنية على مدار الساعة لشبكات الاتصالات والبنية التحتية الحرجة",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "noc",
        title: language === "en" ? "NOC Services" : "خدمات مركز عمليات الشبكة",
        description: language === "en"
          ? "24/7 network operations center for monitoring and managing telecom networks"
          : "مركز عمليات شبكة على مدار الساعة لمراقبة وإدارة شبكات الاتصالات",
        link: getLocalizedPath("/services/managed/service-desk", language),
        icon: Settings
      },
      {
        id: "system-integration",
        title: language === "en" ? "OSS/BSS Integration" : "تكامل OSS/BSS",
        description: language === "en"
          ? "Integration and modernization of operational and business support systems"
          : "تكامل وتحديث أنظمة الدعم التشغيلي والأعمال",
        link: getLocalizedPath("/services/integration/system-integration", language),
        icon: Workflow
      },
      {
        id: "ai-automation",
        title: language === "en" ? "Network Automation" : "أتمتة الشبكة",
        description: language === "en"
          ? "AI-powered network automation and self-healing capabilities"
          : "أتمتة الشبكة المدعومة بالذكاء الاصطناعي وقدرات الإصلاح الذاتي",
        link: getLocalizedPath("/services/collaboration/power-platform", language),
        icon: Zap
      }
    ],
    certifications: [
      "CITC Compliant",
      "ISO 27001:2013",
      "TM Forum Frameworx Certified",
      "3GPP Standards Compliant",
      "MEF CE 3.0 Certified"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
