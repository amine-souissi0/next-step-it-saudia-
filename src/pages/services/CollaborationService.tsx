import { useNavigate } from "react-router-dom";
import { Users, Video, Zap, Monitor, RefreshCcw } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function CollaborationService() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Collaboration & Digital Workplace" : "التعاون والمكان الرقمي",
      subtitle: language === "en" 
        ? "Modern collaboration solutions to empower your workforce with seamless communication and productivity tools" 
        : "حلول تعاون حديثة لتمكين القوى العاملة لديك بأدوات الاتصال والإنتاجية السلسة",
      badge: language === "en" ? "Digital Collaboration" : "التعاون الرقمي"
    },
    overview: language === "en"
      ? "Transform how your teams work together with our comprehensive collaboration and digital workplace solutions. We help organizations implement and optimize modern communication platforms, virtual desktop infrastructure, and AI-powered productivity tools. From Microsoft Teams and unified communications to VDI and Power Platform automation, we enable seamless collaboration, remote work capabilities, and digital transformation that drives business innovation."
      : "قم بتحويل كيفية عمل فرقك معًا من خلال حلولنا الشاملة للتعاون والمكان الرقمي. نساعد المؤسسات على تنفيذ وتحسين منصات الاتصال الحديثة والبنية التحتية لسطح المكتب الافتراضي وأدوات الإنتاجية المدعومة بالذكاء الاصطناعي.",
    benefits: language === "en" 
      ? [
          "Enhanced team collaboration and productivity",
          "Seamless remote and hybrid work capabilities",
          "AI-powered productivity with Microsoft Copilot",
          "Unified communications across all devices",
          "Secure access to applications anywhere",
          "Process automation and workflow optimization",
          "Reduced hardware and maintenance costs",
          "Improved employee experience and satisfaction"
        ]
      : [
          "تحسين تعاون الفريق والإنتاجية",
          "قدرات عمل عن بُعد وهجينة سلسة",
          "إنتاجية مدعومة بالذكاء الاصطناعي مع Microsoft Copilot",
          "اتصالات موحدة عبر جميع الأجهزة",
          "وصول آمن للتطبيقات في أي مكان",
          "أتمتة العمليات وتحسين سير العمل",
          "تقليل تكاليف الأجهزة والصيانة",
          "تحسين تجربة الموظف ورضاه"
        ],
    subservices: [
      {
        id: "unified-comms",
        title: language === "en" ? "Unified Communications" : "الاتصالات الموحدة",
        description: language === "en"
          ? "Integrated voice, video, messaging, and collaboration platforms for seamless communication across your organization."
          : "منصات صوت وفيديو ورسائل وتعاون متكاملة للاتصال السلس عبر مؤسستك.",
        link: getLocalizedPath("/services/collaboration/unified-comms", language),
        icon: Users
      },
      {
        id: "vdi",
        title: language === "en" ? "Virtual Desktop (VDI)" : "سطح المكتب الافتراضي",
        description: language === "en"
          ? "Secure virtual desktop infrastructure enabling remote access to applications and data from any device."
          : "بنية تحتية آمنة لسطح المكتب الافتراضي تتيح الوصول عن بُعد للتطبيقات والبيانات من أي جهاز.",
        link: getLocalizedPath("/services/collaboration/vdi", language),
        icon: Monitor
      },
      {
        id: "power-platform",
        title: language === "en" ? "Power Platform Automation" : "أتمتة منصة Power",
        description: language === "en"
          ? "Low-code automation solutions using Microsoft Power Platform to streamline business processes and workflows."
          : "حلول أتمتة منخفضة الشيفرة باستخدام Microsoft Power Platform لتبسيط عمليات الأعمال وسير العمل.",
        link: getLocalizedPath("/services/collaboration/power-platform", language),
        icon: Zap
      },
      {
        id: "ai-copilot",
        title: language === "en" ? "AI Copilot Enablement" : "تمكين المساعد الذكي",
        description: language === "en"
          ? "Implementation and optimization of Microsoft 365 Copilot and AI assistants to boost productivity and innovation."
          : "تنفيذ وتحسين Microsoft 365 Copilot والمساعدين الذكيين لتعزيز الإنتاجية والابتكار.",
        link: getLocalizedPath("/services/collaboration/ai-copilot", language),
        icon: Video
      },
      {
        id: "change-management",
        title: language === "en" ? "Change Management" : "إدارة التغيير",
        description: language === "en"
          ? "Comprehensive change management and user adoption strategies to ensure successful digital transformation."
          : "إدارة شاملة للتغيير واستراتيجيات تبني المستخدم لضمان التحول الرقمي الناجح.",
        link: getLocalizedPath("/services/collaboration/change-management", language),
        icon: RefreshCcw
      }
    ]
  };

  return <ServicePageTemplate data={data} />;
}
