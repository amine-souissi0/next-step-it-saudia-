import { Users, Cloud, Shield, Monitor, Zap, Lock } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function Education() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Education Solutions" : "حلول التعليم",
      subtitle: language === "en"
        ? "Modern technology solutions for universities, schools, and educational institutions"
        : "حلول تقنية حديثة للجامعات والمدارس والمؤسسات التعليمية",
      badge: language === "en" ? "Education" : "التعليم"
    },
    challenges: [
      {
        title: language === "en" ? "Digital Learning Transformation" : "تحول التعلم الرقمي",
        description: language === "en"
          ? "Enabling online and hybrid learning with secure collaboration platforms"
          : "تمكين التعلم عبر الإنترنت والتعلم الهجين من خلال منصات تعاون آمنة"
      },
      {
        title: language === "en" ? "Student Data Protection" : "حماية بيانات الطلاب",
        description: language === "en"
          ? "Protecting sensitive student information and ensuring privacy compliance"
          : "حماية معلومات الطلاب الحساسة وضمان الامتثال للخصوصية"
      },
      {
        title: language === "en" ? "Campus Network Security" : "أمن شبكة الحرم الجامعي",
        description: language === "en"
          ? "Securing campus networks with thousands of students and BYOD policies"
          : "تأمين شبكات الحرم الجامعي مع آلاف الطلاب وسياسات BYOD"
      },
      {
        title: language === "en" ? "Remote Learning Infrastructure" : "البنية التحتية للتعلم عن بُعد",
        description: language === "en"
          ? "Providing reliable video conferencing and learning management systems"
          : "توفير مؤتمرات الفيديو الموثوقة وأنظمة إدارة التعلم"
      },
      {
        title: language === "en" ? "Budget Constraints" : "قيود الميزانية",
        description: language === "en"
          ? "Delivering modern technology solutions within limited educational budgets"
          : "تقديم حلول تقنية حديثة ضمن ميزانيات تعليمية محدودة"
      },
      {
        title: language === "en" ? "IT Resource Management" : "إدارة موارد تكنولوجيا المعلومات",
        description: language === "en"
          ? "Managing IT infrastructure with limited technical staff"
          : "إدارة البنية التحتية لتكنولوجيا المعلومات مع موظفين تقنيين محدودين"
      }
    ],
    solutions: [
      {
        id: "unified-comms",
        title: language === "en" ? "Virtual Classroom Solutions" : "حلول الفصول الدراسية الافتراضية",
        description: language === "en"
          ? "Microsoft Teams and unified communications for online learning and collaboration"
          : "Microsoft Teams والاتصالات الموحدة للتعلم عبر الإنترنت والتعاون",
        link: getLocalizedPath("/services/collaboration/unified-comms", language),
        icon: Users
      },
      {
        id: "cloud",
        title: language === "en" ? "Education Cloud Platform" : "منصة السحابة التعليمية",
        description: language === "en"
          ? "Scalable cloud infrastructure for learning management systems and student portals"
          : "بنية تحتية سحابية قابلة للتوسع لأنظمة إدارة التعلم وبوابات الطلاب",
        link: getLocalizedPath("/services/cloud/public-cloud", language),
        icon: Cloud
      },
      {
        id: "managed-soc",
        title: language === "en" ? "Campus Cybersecurity" : "الأمن السيبراني للحرم الجامعي",
        description: language === "en"
          ? "24/7 security monitoring for campus networks and student data protection"
          : "مراقبة أمنية على مدار الساعة لشبكات الحرم الجامعي وحماية بيانات الطلاب",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "vdi",
        title: language === "en" ? "Virtual Desktop for Education" : "سطح المكتب الافتراضي للتعليم",
        description: language === "en"
          ? "VDI solutions enabling students to access educational resources from any device"
          : "حلول VDI تمكن الطلاب من الوصول إلى الموارد التعليمية من أي جهاز",
        link: getLocalizedPath("/services/collaboration/vdi", language),
        icon: Monitor
      },
      {
        id: "ai-copilot",
        title: language === "en" ? "AI-Enhanced Learning" : "التعلم المعزز بالذكاء الاصطناعي",
        description: language === "en"
          ? "AI-powered tools for personalized learning and administrative automation"
          : "أدوات مدعومة بالذكاء الاصطناعي للتعلم الشخصي والأتمتة الإدارية",
        link: getLocalizedPath("/services/collaboration/ai-copilot", language),
        icon: Zap
      },
      {
        id: "identity-access",
        title: language === "en" ? "Student Identity Management" : "إدارة هوية الطلاب",
        description: language === "en"
          ? "Secure single sign-on and access management for students and faculty"
          : "تسجيل دخول موحد آمن وإدارة وصول للطلاب وأعضاء هيئة التدريس",
        link: getLocalizedPath("/services/cybersecurity/identity-access", language),
        icon: Lock
      }
    ],
    certifications: [
      "ISO 27001:2013",
      "MOE Compliant",
      "FERPA Compliant",
      "COPPA Compliant"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
