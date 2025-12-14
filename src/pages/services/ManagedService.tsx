import { useNavigate } from "react-router-dom";
import { Settings, MonitorDot, Wrench, HardDrive, Headphones, TrendingUp } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function ManagedService() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Managed Services" : "الخدمات المُدارة",
      subtitle: language === "en" 
        ? "Proactive IT management and support services to optimize performance, reduce costs, and ensure business continuity" 
        : "خدمات إدارة ودعم تكنولوجيا المعلومات الاستباقية لتحسين الأداء وتقليل التكاليف وضمان استمرارية الأعمال",
      badge: language === "en" ? "Managed Services" : "الخدمات المُدارة"
    },
    overview: language === "en"
      ? "Focus on your core business while we manage your IT infrastructure. Our comprehensive managed services provide 24/7 monitoring, proactive maintenance, and expert support to ensure your systems run smoothly and efficiently. With our NOC and SOC services, experienced engineers, and proven processes, we deliver predictable IT performance and reduce operational costs while meeting SLA commitments."
      : "ركز على أعمالك الأساسية بينما ندير بنيتك التحتية لتكنولوجيا المعلومات. توفر خدماتنا المُدارة الشاملة مراقبة على مدار الساعة وصيانة استباقية ودعم متخصص.",
    benefits: language === "en" 
      ? [
          "24/7 monitoring and support from expert teams",
          "Proactive issue detection and resolution",
          "Predictable monthly costs and SLA guarantees",
          "Reduced IT overhead and operational expenses",
          "Access to specialized expertise and tools",
          "Continuous optimization and improvement",
          "Comprehensive reporting and analytics",
          "Scalable services that grow with your business"
        ]
      : [
          "مراقبة ودعم على مدار الساعة من فرق متخصصة",
          "كشف استباقي للمشكلات وحلها",
          "تكاليف شهرية متوقعة وضمانات SLA",
          "تقليل تكاليف تكنولوجيا المعلومات والتشغيل",
          "الوصول إلى الخبرات والأدوات المتخصصة",
          "التحسين والتطوير المستمر",
          "تقارير وتحليلات شاملة",
          "خدمات قابلة للتوسع تنمو مع عملك"
        ],
    subservices: [
      {
        id: "infrastructure",
        title: language === "en" ? "Infrastructure Management" : "إدارة البنية التحتية",
        description: language === "en"
          ? "Comprehensive 24/7 management of servers, storage, and infrastructure with 99.99% uptime SLA and proactive monitoring."
          : "إدارة شاملة على مدار الساعة للخوادم والتخزين والبنية التحتية مع SLA بنسبة 99.99٪ ومراقبة استباقية.",
        link: getLocalizedPath("/services/managed/infrastructure", language),
        icon: Settings
      },
      {
        id: "noc",
        title: language === "en" ? "NOC Services" : "خدمات مركز العمليات",
        description: language === "en"
          ? "24/7 Network Operations Center with sub-5-minute incident detection, rapid response, and network performance optimization."
          : "مركز عمليات الشبكة على مدار الساعة مع الكشف عن الحوادث في أقل من 5 دقائق والاستجابة السريعة وتحسين أداء الشبكة.",
        link: getLocalizedPath("/services/managed/noc", language),
        icon: MonitorDot
      },
      {
        id: "application",
        title: language === "en" ? "Application Management" : "إدارة التطبيقات",
        description: language === "en"
          ? "End-to-end application lifecycle management with performance monitoring, patch management, and 24/7 support."
          : "إدارة دورة حياة التطبيقات من البداية إلى النهاية مع مراقبة الأداء وإدارة التصحيحات والدعم على مدار الساعة.",
        link: getLocalizedPath("/services/managed/application", language),
        icon: Wrench
      },
      {
        id: "database",
        title: language === "en" ? "Database Management" : "إدارة قواعد البيانات",
        description: language === "en"
          ? "Expert DBA services with 99.99% availability, performance tuning, automated backups, and multi-platform support."
          : "خدمات DBA احترافية مع توفر 99.99٪ وضبط الأداء والنسخ الاحتياطية التلقائية والدعم متعدد المنصات.",
        link: getLocalizedPath("/services/managed/database", language),
        icon: HardDrive
      },
      {
        id: "service-desk",
        title: language === "en" ? "Service Desk" : "مكتب الخدمة",
        description: language === "en"
          ? "Multi-lingual IT service desk providing user support, ticketing, and incident management with ITIL best practices."
          : "مكتب خدمة تكنولوجيا المعلومات متعدد اللغات يوفر دعم المستخدمين وإدارة التذاكر والحوادث.",
        link: getLocalizedPath("/services/managed/service-desk", language),
        icon: Headphones
      },
      {
        id: "sla",
        title: language === "en" ? "SLA Performance" : "مراقبة مستوى الخدمة",
        description: language === "en"
          ? "Comprehensive SLA monitoring, reporting, and optimization to ensure service delivery excellence."
          : "مراقبة وإعداد تقارير وتحسين شامل لمستوى الخدمة لضمان تميز تقديم الخدمة.",
        link: getLocalizedPath("/services/managed/sla", language),
        icon: TrendingUp
      }
    ]
  };

  return <ServicePageTemplate data={data} />;
}
