import { useNavigate } from "react-router-dom";
import { Shield, Eye, AlertTriangle, Lock, Search, Zap, CheckCircle, FileText } from "lucide-react";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

export default function CybersecurityService() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const data = {
    hero: {
      title: language === "en" ? "Cybersecurity & SOC Solutions" : "حلول الأمن السيبراني ومركز العمليات الأمنية",
      subtitle: language === "en" 
        ? "Comprehensive security solutions to protect your digital assets and maintain business continuity" 
        : "حلول أمنية شاملة لحماية أصولك الرقمية والحفاظ على استمرارية الأعمال",
      badge: language === "en" ? "Cybersecurity" : "الأمن السيبراني"
    },
    overview: language === "en"
      ? "Protect your organization with our advanced cybersecurity solutions powered by our 24/7 Security Operations Center (SOC). We combine cutting-edge technology, threat intelligence, and expert security professionals to detect, prevent, and respond to cyber threats in real-time. Our comprehensive approach ensures your business stays secure and compliant with industry standards including NCA ECC, ISO 27001, and SAMA regulations."
      : "احمِ مؤسستك بحلولنا المتقدمة للأمن السيبراني المدعومة من مركز العمليات الأمنية (SOC) الذي يعمل على مدار الساعة. نجمع بين التكنولوجيا المتطورة واستخبارات التهديدات والمحترفين الأمنيين لاكتشاف التهديدات السيبرانية ومنعها والاستجابة لها في الوقت الفعلي.",
    benefits: language === "en" 
      ? [
          "24/7 Security Operations Center with expert analysts",
          "Advanced threat detection using AI and machine learning",
          "Compliance with NCA ECC, ISO 27001, SAMA, and CITC",
          "Real-time incident response and forensics",
          "Proactive threat hunting and intelligence",
          "Regular security assessments and penetration testing",
          "Comprehensive security awareness training",
          "Zero Trust architecture implementation"
        ]
      : [
          "مركز عمليات أمنية على مدار الساعة مع محللين خبراء",
          "كشف متقدم للتهديدات باستخدام الذكاء الاصطناعي",
          "الامتثال لـ NCA ECC وISO 27001 وSAMA وCITC",
          "استجابة فورية للحوادث والطب الشرعي",
          "البحث الاستباقي عن التهديدات والاستخبارات",
          "تقييمات أمنية واختبارات اختراق منتظمة",
          "تدريب شامل على الوعي الأمني",
          "تنفيذ بنية الثقة الصفرية"
        ],
    subservices: [
      {
        id: "managed-soc",
        title: language === "en" ? "Managed SOC (24/7)" : "مركز عمليات أمنية مُدار (24/7)",
        description: language === "en"
          ? "Round-the-clock monitoring, threat detection, and incident response from our expert security operations center with dedicated analysts."
          : "مراقبة على مدار الساعة واكتشاف التهديدات والاستجابة للحوادث من مركز العمليات الأمنية مع محللين متخصصين.",
        link: getLocalizedPath("/services/cybersecurity/managed-soc", language),
        icon: Shield
      },
      {
        id: "threat-intelligence",
        title: language === "en" ? "Threat Intelligence" : "استخبارات التهديدات",
        description: language === "en"
          ? "Advanced threat intelligence gathering and analysis to stay ahead of emerging cyber threats and vulnerabilities."
          : "جمع وتحليل استخبارات التهديدات المتقدمة للبقاء في صدارة التهديدات السيبرانية والثغرات الناشئة.",
        link: getLocalizedPath("/services/cybersecurity/threat-intelligence", language),
        icon: Eye
      },
      {
        id: "incident-response",
        title: language === "en" ? "Incident Response" : "الاستجابة للحوادث",
        description: language === "en"
          ? "Rapid incident response and digital forensics to contain, investigate, and recover from security breaches with minimal impact."
          : "استجابة سريعة للحوادث والطب الشرعي الرقمي لاحتواء الخروقات الأمنية والتحقيق فيها والتعافي منها.",
        link: getLocalizedPath("/services/cybersecurity/incident-response", language),
        icon: AlertTriangle
      },
      {
        id: "identity-access",
        title: language === "en" ? "Identity & Access Management" : "إدارة الهوية والوصول",
        description: language === "en"
          ? "Comprehensive IAM solutions to control user access, enforce policies, and protect sensitive data across your organization."
          : "حلول IAM شاملة للتحكم في وصول المستخدمين وتطبيق السياسات وحماية البيانات الحساسة.",
        link: getLocalizedPath("/services/cybersecurity/identity-access", language),
        icon: Lock
      },
      {
        id: "vulnerability-management",
        title: language === "en" ? "Vulnerability Management" : "إدارة الثغرات الأمنية",
        description: language === "en"
          ? "Continuous vulnerability scanning, assessment, and remediation to identify and fix security weaknesses before exploitation."
          : "فحص وتقييم ومعالجة الثغرات المستمرة لتحديد نقاط الضعف الأمنية وإصلاحها قبل استغلالها.",
        link: getLocalizedPath("/services/cybersecurity/vulnerability", language),
        icon: Search
      },
      {
        id: "zero-trust",
        title: language === "en" ? "Zero Trust Implementation" : "تطبيق الثقة الصفرية",
        description: language === "en"
          ? "Implement Zero Trust architecture with continuous verification, least privilege access, and microsegmentation strategies."
          : "تطبيق بنية الثقة الصفرية مع التحقق المستمر والوصول بأقل امتيازات واستراتيجيات التجزئة الدقيقة.",
        link: getLocalizedPath("/services/cybersecurity/zero-trust", language),
        icon: Zap
      },
      {
        id: "risk-compliance",
        title: language === "en" ? "Risk & Compliance" : "إدارة المخاطر والامتثال",
        description: language === "en"
          ? "Comprehensive risk assessment and compliance management to meet regulatory requirements including NCA ECC, ISO, and SAMA."
          : "تقييم شامل للمخاطر وإدارة الامتثال للوفاء بالمتطلبات التنظيمية بما في ذلك NCA ECC وISO وSAMA.",
        link: getLocalizedPath("/services/cybersecurity/risk-compliance", language),
        icon: CheckCircle
      },
      {
        id: "grc",
        title: language === "en" ? "GRC & Compliance" : "حوكمة وإدارة الامتثال",
        description: language === "en"
          ? "Governance, Risk, and Compliance framework implementation to align security with business objectives and regulations."
          : "تنفيذ إطار عمل الحوكمة والمخاطر والامتثال لمواءمة الأمن مع أهداف العمل واللوائح.",
        link: getLocalizedPath("/services/cybersecurity/grc", language),
        icon: FileText
      }
    ]
  };

  return <ServicePageTemplate data={data} />;
}
