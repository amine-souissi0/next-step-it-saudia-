import { 
  Cloud, 
  Network, 
  Shield, 
  Settings, 
  Users, 
  Building2,
  Landmark,
  Phone,
  Droplet,
  Heart,
  ShoppingBag,
  GraduationCap,
  Bus,
  LucideIcon
} from "lucide-react";

export interface SubPage {
  title: { en: string; ar: string };
  path: string;
  description?: { en: string; ar: string };
}

export interface ServiceDomain {
  title: { en: string; ar: string };
  icon: LucideIcon;
  gradient: string;
  emoji: string;
  path: string;
  subpages: SubPage[];
}

export interface Industry {
  title: { en: string; ar: string };
  path: string;
  icon: LucideIcon;
  gradient: string;
}

export const serviceDomains: Record<string, ServiceDomain> = {
  cloud: {
    title: { en: "Cloud & Datacenter", ar: "الحوسبة السحابية" },
    icon: Cloud,
    gradient: "from-nextstep-green to-nextstep-green-light",
    emoji: "☁️",
    path: "/services/cloud",
    subpages: [
      { title: { en: "Private Cloud", ar: "السحابة الخاصة" }, path: "/services/cloud/private-cloud" },
      { title: { en: "Public Cloud", ar: "السحابة العامة" }, path: "/services/cloud/public-cloud" },
      { title: { en: "Hybrid Cloud", ar: "السحابة الهجينة" }, path: "/services/cloud/hybrid-cloud" },
      { title: { en: "Backup & Storage", ar: "النسخ الاحتياطي والتخزين" }, path: "/services/cloud/backup-storage" },
      { title: { en: "Virtualization", ar: "المحاكاة الافتراضية" }, path: "/services/cloud/virtualization" },
      { title: { en: "Container Platform", ar: "منصة الحاويات" }, path: "/services/cloud/container-platform" },
      { title: { en: "Disaster Recovery", ar: "التعافي من الكوارث" }, path: "/services/cloud/disaster-recovery" },
      { title: { en: "Cloud Migration", ar: "الهجرة السحابية" }, path: "/services/cloud/cloud-migration" },
    ],
  },
  integration: {
    title: { en: "Integration & Pro Services", ar: "التكامل والخدمات المهنية" },
    icon: Network,
    gradient: "from-nextstep-green-light to-nextstep-gold",
    emoji: "🔗",
    path: "/services/integration",
    subpages: [
      { title: { en: "Network & Security Design", ar: "تصميم الشبكات والأمن" }, path: "/services/integration/network-security-design" },
      { title: { en: "System Integration", ar: "تكامل الأنظمة" }, path: "/services/integration/system-integration" },
      { title: { en: "Migration Projects", ar: "مشاريع الترحيل" }, path: "/services/integration/migration-projects" },
      { title: { en: "Project Management", ar: "إدارة المشاريع" }, path: "/services/integration/project-management" },
      { title: { en: "IT Strategy & Alignment", ar: "استراتيجية تكنولوجيا المعلومات" }, path: "/services/integration/it-strategy" },
      { title: { en: "Testing & QA", ar: "اختبار وضمان الجودة" }, path: "/services/integration/testing-qa" },
    ],
  },
  cybersecurity: {
    title: { en: "Cybersecurity & SOC", ar: "الأمن السيبراني" },
    icon: Shield,
    gradient: "from-nextstep-green to-nextstep-gold",
    emoji: "🛡️",
    path: "/services/cybersecurity",
    subpages: [
      { title: { en: "Managed SOC (24/7)", ar: "مركز عمليات أمنية مدار" }, path: "/services/cybersecurity/managed-soc" },
      { title: { en: "Risk & Compliance", ar: "إدارة المخاطر والامتثال" }, path: "/services/cybersecurity/risk-compliance" },
      { title: { en: "Threat Intelligence", ar: "استخبارات التهديدات" }, path: "/services/cybersecurity/threat-intelligence" },
      { title: { en: "Identity & Access Mgmt", ar: "إدارة الهوية والوصول" }, path: "/services/cybersecurity/identity-access" },
      { title: { en: "Vulnerability Management", ar: "إدارة الثغرات الأمنية" }, path: "/services/cybersecurity/vulnerability" },
      { title: { en: "Incident Response", ar: "الاستجابة للحوادث" }, path: "/services/cybersecurity/incident-response" },
      { title: { en: "Zero Trust Implementation", ar: "تطبيق الثقة الصفرية" }, path: "/services/cybersecurity/zero-trust" },
      { title: { en: "GRC & Compliance", ar: "حوكمة وإدارة الامتثال" }, path: "/services/cybersecurity/grc" },
    ],
  },
  managed: {
    title: { en: "Managed Services", ar: "الخدمات المُدارة" },
    icon: Settings,
    gradient: "from-nextstep-gold to-nextstep-green",
    emoji: "⚙️",
    path: "/services/managed",
    subpages: [
      { title: { en: "Infrastructure Management", ar: "إدارة البنية التحتية" }, path: "/services/managed/infrastructure" },
      { title: { en: "NOC Services", ar: "خدمات مركز العمليات" }, path: "/services/managed/noc" },
      { title: { en: "Application Management", ar: "إدارة التطبيقات" }, path: "/services/managed/application" },
      { title: { en: "Database Management", ar: "إدارة قواعد البيانات" }, path: "/services/managed/database" },
      { title: { en: "Service Desk", ar: "مكتب الخدمة" }, path: "/services/managed/service-desk" },
      { title: { en: "SLA Performance", ar: "مراقبة مستوى الخدمة" }, path: "/services/managed/sla" },
    ],
  },
  collaboration: {
    title: { en: "Collaboration & Digital", ar: "التعاون الرقمي" },
    icon: Users,
    gradient: "from-nextstep-green via-nextstep-gold to-nextstep-green-light",
    emoji: "✨",
    path: "/services/collaboration",
    subpages: [
      { title: { en: "Unified Communications", ar: "الاتصالات الموحدة" }, path: "/services/collaboration/unified-comms" },
      { title: { en: "Virtual Desktop (VDI)", ar: "سطح المكتب الافتراضي" }, path: "/services/collaboration/vdi" },
      { title: { en: "Power Platform", ar: "أتمتة منصة باور" }, path: "/services/collaboration/power-platform" },
      { title: { en: "AI Copilot Enablement", ar: "تمكين المساعد الذكي" }, path: "/services/collaboration/ai-copilot" },
      { title: { en: "Change Management", ar: "إدارة التغيير" }, path: "/services/collaboration/change-management" },
    ],
  },
};

export const industries: Industry[] = [
  {
    title: { en: "Government", ar: "الحكومة" },
    path: "/industries/government",
    icon: Landmark,
    gradient: "from-nextstep-green to-nextstep-green-light",
  },
  {
    title: { en: "Banking & Finance", ar: "البنوك والمالية" },
    path: "/industries/banking",
    icon: Building2,
    gradient: "from-nextstep-green-light to-nextstep-gold",
  },
  {
    title: { en: "Telecommunications", ar: "الاتصالات" },
    path: "/industries/telecom",
    icon: Phone,
    gradient: "from-nextstep-gold to-nextstep-gold-light",
  },
  {
    title: { en: "Oil & Gas", ar: "النفط والغاز" },
    path: "/industries/oil-gas",
    icon: Droplet,
    gradient: "from-nextstep-gold-light to-nextstep-green",
  },
  {
    title: { en: "Healthcare", ar: "الرعاية الصحية" },
    path: "/industries/healthcare",
    icon: Heart,
    gradient: "from-nextstep-green to-nextstep-gold",
  },
  {
    title: { en: "Retail & E-commerce", ar: "التجزئة والتجارة" },
    path: "/industries/retail",
    icon: ShoppingBag,
    gradient: "from-nextstep-green-light to-nextstep-gold-light",
  },
  {
    title: { en: "Education", ar: "التعليم" },
    path: "/industries/education",
    icon: GraduationCap,
    gradient: "from-nextstep-green via-nextstep-gold to-nextstep-green-light",
  },
  {
    title: { en: "Smart Cities", ar: "المدن الذكية" },
    path: "/industries/smart-cities",
    icon: Bus,
    gradient: "from-nextstep-gold to-nextstep-green",
  },
];
