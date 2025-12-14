import { Network, Eye, Shield, Cloud, Zap, Settings } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function SmartCities() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Smart Cities Solutions" : "حلول المدن الذكية",
      subtitle: language === "en"
        ? "Integrated technology solutions for building sustainable and intelligent urban infrastructure"
        : "حلول تقنية متكاملة لبناء بنية تحتية حضرية مستدامة وذكية",
      badge: language === "en" ? "Smart Cities" : "المدن الذكية"
    },
    challenges: [
      {
        title: language === "en" ? "IoT Device Management" : "إدارة أجهزة إنترنت الأشياء",
        description: language === "en"
          ? "Managing and securing millions of connected sensors and IoT devices across the city"
          : "إدارة وتأمين ملايين المستشعرات المتصلة وأجهزة إنترنت الأشياء في جميع أنحاء المدينة"
      },
      {
        title: language === "en" ? "Critical Infrastructure Security" : "أمن البنية التحتية الحرجة",
        description: language === "en"
          ? "Protecting smart city infrastructure including utilities, transportation, and public services"
          : "حماية البنية التحتية للمدينة الذكية بما في ذلك المرافق والنقل والخدمات العامة"
      },
      {
        title: language === "en" ? "Data Integration & Analytics" : "تكامل البيانات والتحليلات",
        description: language === "en"
          ? "Integrating and analyzing massive volumes of data from diverse city systems"
          : "تكامل وتحليل كميات ضخمة من البيانات من أنظمة المدينة المتنوعة"
      },
      {
        title: language === "en" ? "Citizen Privacy" : "خصوصية المواطن",
        description: language === "en"
          ? "Balancing smart city services with citizen privacy and data protection"
          : "الموازنة بين خدمات المدينة الذكية وخصوصية المواطنين وحماية البيانات"
      },
      {
        title: language === "en" ? "System Interoperability" : "التشغيل البيني للأنظمة",
        description: language === "en"
          ? "Ensuring seamless communication between different smart city systems and vendors"
          : "ضمان الاتصال السلس بين أنظمة المدينة الذكية المختلفة والبائعين"
      },
      {
        title: language === "en" ? "Sustainability Goals" : "أهداف الاستدامة",
        description: language === "en"
          ? "Meeting environmental and sustainability targets through technology"
          : "تحقيق الأهداف البيئية والاستدامة من خلال التكنولوجيا"
      }
    ],
    solutions: [
      {
        id: "network-design",
        title: language === "en" ? "Smart City Network Infrastructure" : "البنية التحتية لشبكة المدينة الذكية",
        description: language === "en"
          ? "City-wide network architecture with 5G, fiber, and wireless connectivity"
          : "بنية شبكة على مستوى المدينة مع اتصال الجيل الخامس والألياف والاتصال اللاسلكي",
        link: getLocalizedPath("/services/integration/network-security-design", language),
        icon: Network
      },
      {
        id: "managed-soc",
        title: language === "en" ? "Smart City SOC" : "مركز العمليات الأمنية للمدينة الذكية",
        description: language === "en"
          ? "24/7 security operations center monitoring critical infrastructure and IoT devices"
          : "مركز عمليات أمنية على مدار الساعة لمراقبة البنية التحتية الحرجة وأجهزة إنترنت الأشياء",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "cloud",
        title: language === "en" ? "Smart City Cloud Platform" : "منصة السحابة للمدينة الذكية",
        description: language === "en"
          ? "Scalable cloud infrastructure for smart city applications and data analytics"
          : "بنية تحتية سحابية قابلة للتوسع لتطبيقات المدينة الذكية وتحليلات البيانات",
        link: getLocalizedPath("/services/cloud/hybrid-cloud", language),
        icon: Cloud
      },
      {
        id: "threat-intelligence",
        title: language === "en" ? "IoT Security & Monitoring" : "أمن ومراقبة إنترنت الأشياء",
        description: language === "en"
          ? "Comprehensive IoT device security and threat detection for connected infrastructure"
          : "أمن شامل لأجهزة إنترنت الأشياء وكشف التهديدات للبنية التحتية المتصلة",
        link: getLocalizedPath("/services/cybersecurity/threat-intelligence", language),
        icon: Eye
      },
      {
        id: "ai-analytics",
        title: language === "en" ? "AI-Powered City Operations" : "عمليات المدينة المدعومة بالذكاء الاصطناعي",
        description: language === "en"
          ? "AI and machine learning for predictive maintenance and operational optimization"
          : "الذكاء الاصطناعي والتعلم الآلي للصيانة التنبؤية والتحسين التشغيلي",
        link: getLocalizedPath("/services/collaboration/ai-copilot", language),
        icon: Zap
      },
      {
        id: "noc",
        title: language === "en" ? "Smart City NOC" : "مركز عمليات المدينة الذكية",
        description: language === "en"
          ? "24/7 network operations center for monitoring and managing city infrastructure"
          : "مركز عمليات شبكة على مدار الساعة لمراقبة وإدارة البنية التحتية للمدينة",
        link: getLocalizedPath("/services/managed/service-desk", language),
        icon: Settings
      }
    ],
    certifications: [
      "ISO 37120 (Smart Cities)",
      "ISO 27001:2013",
      "ISO 50001 (Energy Management)",
      "LEED Certified",
      "Saudi Green Building Code"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
