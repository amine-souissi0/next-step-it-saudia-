import { useNavigate } from "react-router-dom";
import { Network, Workflow, GitBranch, Target, Lightbulb, TestTube } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function IntegrationService() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Integration & Professional Services" : "التكامل والخدمات المهنية",
      subtitle: language === "en" 
        ? "Expert consulting and integration services to transform your IT infrastructure and align technology with business goals" 
        : "خدمات استشارية وتكامل متخصصة لتحويل البنية التحتية لتكنولوجيا المعلومات ومواءمة التكنولوجيا مع أهداف العمل",
      badge: language === "en" ? "Professional Services" : "الخدمات المهنية"
    },
    overview: language === "en"
      ? "Transform your business with our comprehensive integration and professional services. Our expert consultants bring deep technical knowledge and industry best practices to design, implement, and optimize your IT infrastructure. From network architecture to system integration, migration projects to IT strategy, we provide end-to-end solutions that drive business value and digital transformation."
      : "قم بتحويل أعمالك من خلال خدماتنا الشاملة للتكامل والخدمات المهنية. يقدم مستشارونا الخبراء معرفة تقنية عميقة وأفضل الممارسات لتصميم وتنفيذ وتحسين البنية التحتية لتكنولوجيا المعلومات.",
    benefits: language === "en" 
      ? [
          "Expert consultants with deep technical expertise",
          "Vendor-neutral solutions and recommendations",
          "Proven methodologies and best practices",
          "End-to-end project management",
          "Risk mitigation and quality assurance",
          "Knowledge transfer and training",
          "Scalable and future-proof architectures",
          "Alignment with business objectives"
        ]
      : [
          "مستشارون خبراء بمعرفة تقنية عميقة",
          "حلول وتوصيات محايدة للبائعين",
          "منهجيات مثبتة وأفضل الممارسات",
          "إدارة شاملة للمشاريع",
          "تخفيف المخاطر وضمان الجودة",
          "نقل المعرفة والتدريب",
          "بنى قابلة للتوسع ومستقبلية",
          "التوافق مع أهداف العمل"
        ],
    subservices: [
      {
        id: "network-design",
        title: language === "en" ? "Network & Security Design" : "تصميم الشبكات والأمن",
        description: language === "en"
          ? "Comprehensive network architecture design with integrated security, performance optimization, and scalability planning."
          : "تصميم شامل لبنية الشبكة مع الأمان المتكامل وتحسين الأداء والتخطيط لقابلية التوسع.",
        link: getLocalizedPath("/services/integration/network-security-design", language),
        icon: Network
      },
      {
        id: "system-integration",
        title: language === "en" ? "System Integration" : "تكامل الأنظمة",
        description: language === "en"
          ? "Seamless integration of disparate systems, applications, and platforms to create unified, efficient workflows."
          : "تكامل سلس للأنظمة والتطبيقات والمنصات المختلفة لإنشاء سير عمل موحد وفعال.",
        link: getLocalizedPath("/services/integration/system-integration", language),
        icon: Workflow
      },
      {
        id: "migration",
        title: language === "en" ? "Migration Projects" : "مشاريع الترحيل",
        description: language === "en"
          ? "Risk-free migration services from legacy systems to modern platforms with minimal downtime and business disruption."
          : "خدمات ترحيل خالية من المخاطر من الأنظمة القديمة إلى المنصات الحديثة مع الحد الأدنى من التوقف.",
        link: getLocalizedPath("/services/integration/migration-projects", language),
        icon: GitBranch
      },
      {
        id: "project-management",
        title: language === "en" ? "Project Management" : "إدارة المشاريع",
        description: language === "en"
          ? "Professional project management services using PMI and Agile methodologies to ensure successful delivery."
          : "خدمات إدارة مشاريع احترافية باستخدام منهجيات PMI وAgile لضمان التسليم الناجح.",
        link: getLocalizedPath("/services/integration/project-management", language),
        icon: Target
      },
      {
        id: "it-strategy",
        title: language === "en" ? "IT Strategy & Alignment" : "استراتيجية تكنولوجيا المعلومات",
        description: language === "en"
          ? "Strategic IT planning and alignment services to ensure technology investments support business objectives."
          : "خدمات التخطيط الاستراتيجي لتكنولوجيا المعلومات لضمان دعم استثمارات التكنولوجيا لأهداف العمل.",
        link: getLocalizedPath("/services/integration/it-strategy", language),
        icon: Lightbulb
      },
      {
        id: "testing-qa",
        title: language === "en" ? "Testing & QA" : "اختبار وضمان الجودة",
        description: language === "en"
          ? "Comprehensive testing and quality assurance services to ensure reliability, performance, and security."
          : "خدمات اختبار وضمان جودة شاملة لضمان الموثوقية والأداء والأمان.",
        link: getLocalizedPath("/services/integration/testing-qa", language),
        icon: TestTube
      }
    ]
  };

  return <ServicePageTemplate data={data} />;
}
