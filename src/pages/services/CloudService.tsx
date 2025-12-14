import { useNavigate } from "react-router-dom";
import { Cloud, Server, Database, Shield, HardDrive, RefreshCw, Container, Box } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function CloudService() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Cloud & Datacenter Solutions" : "حلول السحابة ومراكز البيانات",
      subtitle: language === "en" 
        ? "Modern infrastructure solutions that scale with your business needs" 
        : "حلول بنية تحتية حديثة تنمو مع احتياجات عملك",
      badge: language === "en" ? "Cloud Services" : "الخدمات السحابية"
    },
    overview: language === "en"
      ? "Transform your IT infrastructure with our comprehensive cloud and datacenter solutions. We help organizations leverage the power of cloud computing while maintaining control, security, and compliance. Our solutions are designed to optimize performance, reduce costs, and enable digital transformation across private, public, and hybrid cloud environments."
      : "قم بتحويل البنية التحتية لتكنولوجيا المعلومات من خلال حلولنا الشاملة للسحابة ومراكز البيانات. نساعد المؤسسات على الاستفادة من قوة الحوسبة السحابية مع الحفاظ على التحكم والأمان والامتثال.",
    benefits: language === "en" 
      ? [
          "Scalable infrastructure that grows with your business",
          "99.99% uptime SLA guarantee",
          "Advanced security and compliance",
          "24/7 expert support and monitoring",
          "Cost optimization and predictable pricing",
          "Hybrid and multi-cloud capabilities"
        ]
      : [
          "بنية تحتية قابلة للتوسع تنمو مع عملك",
          "ضمان وقت تشغيل 99.99٪",
          "أمان وامتثال متقدمان",
          "دعم ومراقبة على مدار الساعة",
          "تحسين التكلفة والتسعير المتوقع",
          "قدرات السحابة الهجينة والمتعددة"
        ],
    subservices: [
      {
        id: "private-cloud",
        title: language === "en" ? "Private Cloud" : "السحابة الخاصة",
        description: language === "en"
          ? "Dedicated cloud infrastructure with complete control, security, and customization for your organization's unique requirements."
          : "بنية تحتية سحابية مخصصة مع تحكم كامل وأمان وتخصيص لمتطلبات مؤسستك الفريدة.",
        link: getLocalizedPath("/services/cloud/private-cloud", language),
        icon: Cloud
      },
      {
        id: "public-cloud",
        title: language === "en" ? "Public Cloud" : "السحابة العامة",
        description: language === "en"
          ? "Enterprise-grade public cloud solutions with AWS, Azure, and Google Cloud Platform for unlimited scalability."
          : "حلول سحابية عامة على مستوى المؤسسات مع AWS و Azure و Google Cloud Platform لتوسع غير محدود.",
        link: getLocalizedPath("/services/cloud/public-cloud", language),
        icon: Server
      },
      {
        id: "hybrid-cloud",
        title: language === "en" ? "Hybrid Cloud" : "السحابة الهجينة",
        description: language === "en"
          ? "Seamlessly integrate on-premises infrastructure with cloud services for optimal flexibility and performance."
          : "دمج سلس للبنية التحتية المحلية مع الخدمات السحابية لتحقيق أقصى قدر من المرونة والأداء.",
        link: getLocalizedPath("/services/cloud/hybrid-cloud", language),
        icon: Database
      },
      {
        id: "backup-storage",
        title: language === "en" ? "Backup & Storage" : "النسخ الاحتياطي والتخزين",
        description: language === "en"
          ? "Enterprise backup, archiving, and storage solutions with immutable storage and ransomware protection."
          : "حلول نسخ احتياطي وأرشفة وتخزين مؤسسية مع تخزين غير قابل للتغيير وحماية من برامج الفدية.",
        link: getLocalizedPath("/services/cloud/backup-storage", language),
        icon: HardDrive
      },
      {
        id: "virtualization",
        title: language === "en" ? "Virtualization" : "المحاكاة الافتراضية",
        description: language === "en"
          ? "Advanced virtualization with VMware, Hyper-V, and KVM for maximum resource efficiency and rapid deployment."
          : "محاكاة افتراضية متقدمة مع VMware و Hyper-V و KVM لأقصى كفاءة للموارد والنشر السريع.",
        link: getLocalizedPath("/services/cloud/virtualization", language),
        icon: Box
      },
      {
        id: "container-platform",
        title: language === "en" ? "Container Platform" : "منصة الحاويات",
        description: language === "en"
          ? "Enterprise Kubernetes platform for cloud-native applications with automated CI/CD and service mesh integration."
          : "منصة Kubernetes المؤسسية للتطبيقات السحابية الأصلية مع CI/CD التلقائي وتكامل شبكة الخدمة.",
        link: getLocalizedPath("/services/cloud/container-platform", language),
        icon: Container
      },
      {
        id: "disaster-recovery",
        title: language === "en" ? "Disaster Recovery" : "التعافي من الكوارث",
        description: language === "en"
          ? "Comprehensive disaster recovery solutions with automated failover to ensure business continuity."
          : "حلول شاملة للتعافي من الكوارث مع الفشل التلقائي لضمان استمرارية الأعمال.",
        link: getLocalizedPath("/services/cloud/disaster-recovery", language),
        icon: Shield
      },
      {
        id: "migration",
        title: language === "en" ? "Cloud Migration" : "الهجرة السحابية",
        description: language === "en"
          ? "End-to-end cloud migration services with zero-downtime cutover and optimized cloud-native architecture."
          : "خدمات هجرة سحابية شاملة مع انتقال بدون توقف وبنية سحابية أصلية محسّنة.",
        link: getLocalizedPath("/services/cloud/cloud-migration", language),
        icon: RefreshCw
      }
    ]
  };

  return <ServicePageTemplate data={data} />;
}
