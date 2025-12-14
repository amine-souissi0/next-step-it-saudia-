import { Shield, Cloud, Zap, Users, TrendingUp, Lock } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function Retail() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Retail & E-Commerce Solutions" : "حلول التجزئة والتجارة الإلكترونية",
      subtitle: language === "en"
        ? "Digital transformation and security solutions for modern retail and e-commerce businesses"
        : "حلول التحول الرقمي والأمن لأعمال التجزئة والتجارة الإلكترونية الحديثة",
      badge: language === "en" ? "Retail" : "التجزئة"
    },
    challenges: [
      {
        title: language === "en" ? "Payment Security" : "أمن المدفوعات",
        description: language === "en"
          ? "Securing payment transactions and achieving PCI-DSS compliance for online and in-store payments"
          : "تأمين معاملات الدفع وتحقيق الامتثال لـ PCI-DSS للمدفوعات عبر الإنترنت وفي المتاجر"
      },
      {
        title: language === "en" ? "Omnichannel Experience" : "تجربة القنوات المتعددة",
        description: language === "en"
          ? "Creating seamless shopping experiences across online, mobile, and physical stores"
          : "إنشاء تجارب تسوق سلسة عبر المتاجر الإلكترونية والمحمولة والفعلية"
      },
      {
        title: language === "en" ? "E-Commerce Scalability" : "قابلية توسع التجارة الإلكترونية",
        description: language === "en"
          ? "Scaling infrastructure to handle peak shopping seasons and flash sales"
          : "توسيع البنية التحتية للتعامل مع مواسم التسوق الذروة والمبيعات السريعة"
      },
      {
        title: language === "en" ? "Customer Data Protection" : "حماية بيانات العملاء",
        description: language === "en"
          ? "Protecting customer personal and payment information from breaches and fraud"
          : "حماية المعلومات الشخصية ومعلومات الدفع للعملاء من الاختراقات والاحتيال"
      },
      {
        title: language === "en" ? "Inventory Management" : "إدارة المخزون",
        description: language === "en"
          ? "Real-time inventory synchronization across online and offline channels"
          : "مزامنة المخزون في الوقت الفعلي عبر القنوات عبر الإنترنت وخارجها"
      },
      {
        title: language === "en" ? "Digital Marketing" : "التسويق الرقمي",
        description: language === "en"
          ? "Leveraging data analytics and AI for personalized marketing and customer insights"
          : "الاستفادة من تحليلات البيانات والذكاء الاصطناعي للتسويق الشخصي ورؤى العملاء"
      }
    ],
    solutions: [
      {
        id: "managed-soc",
        title: language === "en" ? "Retail Cybersecurity" : "الأمن السيبراني للتجزئة",
        description: language === "en"
          ? "24/7 security monitoring for e-commerce platforms and POS systems"
          : "مراقبة أمنية على مدار الساعة لمنصات التجارة الإلكترونية وأنظمة نقاط البيع",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "hybrid-cloud",
        title: language === "en" ? "E-Commerce Cloud" : "السحابة للتجارة الإلكترونية",
        description: language === "en"
          ? "Scalable cloud infrastructure for e-commerce platforms and inventory management"
          : "بنية تحتية سحابية قابلة للتوسع لمنصات التجارة الإلكترونية وإدارة المخزون",
        link: getLocalizedPath("/services/cloud/hybrid-cloud", language),
        icon: Cloud
      },
      {
        id: "ai-copilot",
        title: language === "en" ? "AI-Powered Retail" : "التجزئة المدعومة بالذكاء الاصطناعي",
        description: language === "en"
          ? "AI and machine learning for personalization, recommendations, and inventory optimization"
          : "الذكاء الاصطناعي والتعلم الآلي للتخصيص والتوصيات وتحسين المخزون",
        link: getLocalizedPath("/services/collaboration/ai-copilot", language),
        icon: Zap
      },
      {
        id: "unified-comms",
        title: language === "en" ? "Customer Engagement" : "مشاركة العملاء",
        description: language === "en"
          ? "Unified communications for customer support and omnichannel engagement"
          : "اتصالات موحدة لدعم العملاء ومشاركة القنوات المتعددة",
        link: getLocalizedPath("/services/collaboration/unified-comms", language),
        icon: Users
      },
      {
        id: "system-integration",
        title: language === "en" ? "Retail System Integration" : "تكامل أنظمة التجزئة",
        description: language === "en"
          ? "Integration of POS, ERP, CRM, and e-commerce platforms"
          : "تكامل أنظمة نقاط البيع وتخطيط موارد المؤسسات وإدارة علاقات العملاء ومنصات التجارة الإلكترونية",
        link: getLocalizedPath("/services/integration/system-integration", language),
        icon: TrendingUp
      },
      {
        id: "identity-access",
        title: language === "en" ? "Customer Identity Management" : "إدارة هوية العملاء",
        description: language === "en"
          ? "Secure customer authentication and single sign-on across platforms"
          : "مصادقة آمنة للعملاء وتسجيل دخول موحد عبر المنصات",
        link: getLocalizedPath("/services/cybersecurity/identity-access", language),
        icon: Lock
      }
    ],
    certifications: [
      "PCI-DSS Compliant",
      "ISO 27001:2013",
      "SOC 2 Type II",
      "GDPR Compliant"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
