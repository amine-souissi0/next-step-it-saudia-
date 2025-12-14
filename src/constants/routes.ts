export type Language = "en" | "ar";

// Base routes
export const ROUTES = {
  HOME: "/",
  JOURNEY: "/journey",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES_ALL: "/services",
  
  // Services - Main domains
  SERVICES: {
    CLOUD: "/services/cloud",
    INTEGRATION: "/services/integration",
    CYBERSECURITY: "/services/cybersecurity",
    MANAGED: "/services/managed",
    COLLABORATION: "/services/collaboration",
  },
  
  // Cloud & Datacenter subservices
  CLOUD_SERVICES: {
    PRIVATE_CLOUD: "/services/cloud/private-cloud",
    PUBLIC_CLOUD: "/services/cloud/public-cloud",
    HYBRID_CLOUD: "/services/cloud/hybrid-cloud",
    DATACENTER: "/services/cloud/datacenter",
    DISASTER_RECOVERY: "/services/cloud/disaster-recovery",
    BACKUP: "/services/cloud/backup",
  },
  
  // Integration & Pro Services subservices
  INTEGRATION_SERVICES: {
    CONSULTING: "/services/integration/consulting",
    IMPLEMENTATION: "/services/integration/implementation",
    MIGRATION: "/services/integration/migration",
    OPTIMIZATION: "/services/integration/optimization",
  },
  
  // Cybersecurity & SOC subservices
  CYBERSECURITY_SERVICES: {
    SOC: "/services/cybersecurity/soc",
    PENETRATION_TESTING: "/services/cybersecurity/penetration-testing",
    VULNERABILITY_ASSESSMENT: "/services/cybersecurity/vulnerability-assessment",
    SECURITY_AUDIT: "/services/cybersecurity/security-audit",
    INCIDENT_RESPONSE: "/services/cybersecurity/incident-response",
    COMPLIANCE: "/services/cybersecurity/compliance",
  },
  
  // Managed Services subservices
  MANAGED_SERVICES: {
    INFRASTRUCTURE: "/services/managed/infrastructure",
    NETWORK: "/services/managed/network",
    SECURITY: "/services/managed/security",
    APPLICATION: "/services/managed/application",
  },
  
  // Collaboration & Digital subservices
  COLLABORATION_SERVICES: {
    UNIFIED_COMMUNICATIONS: "/services/collaboration/unified-communications",
    VIDEO_CONFERENCING: "/services/collaboration/video-conferencing",
    COLLABORATION_TOOLS: "/services/collaboration/collaboration-tools",
    DIGITAL_WORKPLACE: "/services/collaboration/digital-workplace",
  },
  
  // Industries
  INDUSTRIES: {
    GOVERNMENT: "/industries/government",
    BANKING: "/industries/banking",
    TELECOM: "/industries/telecom",
    OIL_GAS: "/industries/oil-gas",
    HEALTHCARE: "/industries/healthcare",
    RETAIL: "/industries/retail",
    EDUCATION: "/industries/education",
    SMART_CITIES: "/industries/smart-cities",
  },
  
  // Journey stages
  JOURNEY_STAGES: {
    TAMKEEN: "/journey/tamkeen",
    HIMAYA: "/journey/himaya",
    MANAA: "/journey/manaa",
    THIQAH: "/journey/thiqah",
    RIYADA: "/journey/riyada",
  },
  
  // Resources
  RESOURCES: {
    CASE_STUDIES: "/resources/case-studies",
    BLOGS: "/resources/blogs",
    WHITEPAPERS: "/resources/whitepapers",
    WEBINARS: "/resources/webinars",
  },
} as const;

// Helper functions
export const getLocalizedPath = (path: string, lang: Language): string => {
  return `/${lang}${path}`;
};

export const getPathWithoutLang = (path: string): string => {
  const match = path.match(/^\/(en|ar)(\/.*)?$/);
  return match ? match[2] || "/" : path;
};

export const extractLangFromPath = (path: string): Language | null => {
  const match = path.match(/^\/(en|ar)/);
  return match ? (match[1] as Language) : null;
};

export const isValidLanguage = (lang: string): lang is Language => {
  return lang === "en" || lang === "ar";
};
