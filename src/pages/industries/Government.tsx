import { Shield, Cloud, Lock, FileCheck, Network, Eye } from "lucide-react";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function Government() {
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Government & Public Sector Solutions" : "حلول القطاع الحكومي والعام",
      subtitle: language === "en"
        ? "Secure, compliant, and efficient digital transformation solutions for government entities and public organizations"
        : "حلول تحول رقمي آمنة ومتوافقة وفعالة للجهات الحكومية والمؤسسات العامة",
      badge: language === "en" ? "Public Sector" : "القطاع العام"
    },
    challenges: [
      {
        title: language === "en" ? "Data Security & Privacy" : "أمن البيانات والخصوصية",
        description: language === "en"
          ? "Protecting sensitive citizen data while maintaining accessibility and transparency in public services"
          : "حماية بيانات المواطنين الحساسة مع الحفاظ على إمكانية الوصول والشفافية"
      },
      {
        title: language === "en" ? "Digital Transformation" : "التحول الرقمي",
        description: language === "en"
          ? "Modernizing legacy systems and processes to improve citizen services and operational efficiency"
          : "تحديث الأنظمة والعمليات القديمة لتحسين خدمات المواطنين والكفاءة التشغيلية"
      },
      {
        title: language === "en" ? "Regulatory Compliance" : "الامتثال التنظيمي",
        description: language === "en"
          ? "Meeting strict government regulations including NCA ECC, CITC, and Saudi Cloud Computing Framework"
          : "الالتزام باللوائح الحكومية الصارمة بما في ذلك NCA ECC وCITC وإطار الحوسبة السحابية السعودي"
      },
      {
        title: language === "en" ? "Interoperability" : "التشغيل البيني",
        description: language === "en"
          ? "Ensuring seamless data exchange and communication between different government entities"
          : "ضمان تبادل البيانات والتواصل السلس بين الجهات الحكومية المختلفة"
      },
      {
        title: language === "en" ? "Budget Constraints" : "قيود الميزانية",
        description: language === "en"
          ? "Achieving digital transformation goals within limited budgets and maximizing ROI"
          : "تحقيق أهداف التحول الرقمي ضمن ميزانيات محدودة وتعظيم العائد على الاستثمار"
      },
      {
        title: language === "en" ? "Cybersecurity Threats" : "التهديدات السيبرانية",
        description: language === "en"
          ? "Defending against sophisticated nation-state and criminal cyber attacks targeting critical infrastructure"
          : "الدفاع ضد الهجمات السيبرانية المتطورة التي تستهدف البنية التحتية الحرجة"
      }
    ],
    solutions: [
      {
        id: "managed-soc",
        title: language === "en" ? "Managed SOC (24/7)" : "مركز عمليات أمنية مُدار",
        description: language === "en"
          ? "Round-the-clock security monitoring and threat detection to protect government systems and data"
          : "مراقبة أمنية على مدار الساعة وكشف التهديدات لحماية الأنظمة والبيانات الحكومية",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "private-cloud",
        title: language === "en" ? "Private Cloud" : "السحابة الخاصة",
        description: language === "en"
          ? "Sovereign cloud infrastructure ensuring data residency and compliance with local regulations"
          : "بنية تحتية سحابية سيادية تضمن إقامة البيانات والامتثال للوائح المحلية",
        link: getLocalizedPath("/services/cloud/private-cloud", language),
        icon: Cloud
      },
      {
        id: "identity-access",
        title: language === "en" ? "Identity & Access Management" : "إدارة الهوية والوصول",
        description: language === "en"
          ? "Secure access control and identity management for government employees and citizens"
          : "التحكم الآمن في الوصول وإدارة الهوية للموظفين الحكوميين والمواطنين",
        link: getLocalizedPath("/services/cybersecurity/identity-access", language),
        icon: Lock
      },
      {
        id: "risk-compliance",
        title: language === "en" ? "Risk & Compliance" : "إدارة المخاطر والامتثال",
        description: language === "en"
          ? "Comprehensive compliance management aligned with NCA ECC and CITC requirements"
          : "إدارة امتثال شاملة متوافقة مع متطلبات NCA ECC وCITC",
        link: getLocalizedPath("/services/cybersecurity/risk-compliance", language),
        icon: FileCheck
      },
      {
        id: "network-design",
        title: language === "en" ? "Network & Security Design" : "تصميم الشبكات والأمن",
        description: language === "en"
          ? "Secure network architecture design for government facilities and inter-agency connectivity"
          : "تصميم بنية شبكة آمنة للمرافق الحكومية والاتصال بين الوكالات",
        link: getLocalizedPath("/services/integration/network-security-design", language),
        icon: Network
      },
      {
        id: "threat-intelligence",
        title: language === "en" ? "Threat Intelligence" : "استخبارات التهديدات",
        description: language === "en"
          ? "Advanced threat intelligence to stay ahead of nation-state and APT attacks"
          : "استخبارات تهديدات متقدمة للبقاء في صدارة الهجمات المتقدمة المستمرة",
        link: getLocalizedPath("/services/cybersecurity/threat-intelligence", language),
        icon: Eye
      }
    ],
    caseStudies: [
      {
        title: language === "en" ? "Ministry Digital Transformation" : "التحول الرقمي لوزارة",
        description: language === "en"
          ? "Implemented comprehensive cloud infrastructure and cybersecurity solutions for a major government ministry, enabling digital services for over 2 million citizens."
          : "تنفيذ بنية تحتية سحابية شاملة وحلول أمن سيبراني لوزارة حكومية كبرى، مما مكّن الخدمات الرقمية لأكثر من 2 مليون مواطن.",
        results: language === "en" ? "99.9% uptime, 70% reduction in operational costs" : "وقت تشغيل 99.9٪، تخفيض 70٪ في التكاليف التشغيلية"
      },
      {
        title: language === "en" ? "Smart City Security Operations" : "عمليات أمن المدينة الذكية",
        description: language === "en"
          ? "Established 24/7 SOC for a smart city project, monitoring critical infrastructure and protecting against cyber threats."
          : "إنشاء مركز عمليات أمنية على مدار الساعة لمشروع مدينة ذكية، مع مراقبة البنية التحتية الحرجة والحماية من التهديدات السيبرانية.",
        results: language === "en" ? "Zero security breaches, 50% faster incident response" : "صفر خروقات أمنية، استجابة أسرع بنسبة 50٪ للحوادث"
      }
    ],
    certifications: [
      "NCA ECC-1 Certified",
      "ISO 27001:2013",
      "ISO 27701:2019",
      "CITC Compliant",
      "Saudi Cloud Computing Framework",
      "NIST Cybersecurity Framework"
    ]
  };

  return <IndustryPageTemplate data={data} />;
}
