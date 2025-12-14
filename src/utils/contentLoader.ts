import { Language } from "@/constants/routes";

// Type definitions for content structures
export interface BilingualText {
  en: string;
  ar: string;
}

export interface ServiceContent {
  meta: {
    id: string;
    slug: string;
  };
  hero: {
    title: BilingualText;
    subtitle: BilingualText;
    badge?: BilingualText;
  };
  overview: BilingualText;
  benefits: string[];
}

export interface IndustryContent {
  meta: {
    id: string;
    slug: string;
  };
  hero: {
    title: BilingualText;
    subtitle: BilingualText;
    badge?: BilingualText;
  };
  challenges: Array<{
    title: string;
    description: string;
  }>;
  certifications?: string[];
}

export interface JourneyStage {
  id: string;
  name: BilingualText;
  description: BilingualText;
  level: number;
  color: string;
  objectives: string[];
  services: string[];
}

// Content loader functions
export async function getServiceContent(serviceId: string): Promise<ServiceContent | null> {
  try {
    const content = await import(`@/data/services/${serviceId}.json`);
    return content.default || content;
  } catch (error) {
    console.error(`Failed to load service content for ${serviceId}:`, error);
    return null;
  }
}

export async function getIndustryContent(industryId: string): Promise<IndustryContent | null> {
  try {
    const content = await import(`@/data/industries/${industryId}.json`);
    return content.default || content;
  } catch (error) {
    console.error(`Failed to load industry content for ${industryId}:`, error);
    return null;
  }
}

export async function getJourneyStages(): Promise<JourneyStage[]> {
  try {
    const content = await import(`@/data/journey/stages.json`);
    return (content.default || content).stages;
  } catch (error) {
    console.error("Failed to load journey stages:", error);
    return [];
  }
}

// Helper to get localized text
export function getLocalizedText(bilingualText: BilingualText, lang: Language): string {
  return bilingualText[lang] || bilingualText.en;
}

// Helper to get all available services
export function getAllServiceIds(): string[] {
  return ["cloud", "integration", "cybersecurity", "managed", "collaboration"];
}

// Helper to get all available industries
export function getAllIndustryIds(): string[] {
  return ["government", "banking", "telecom", "oil-gas", "healthcare", "retail", "education", "smart-cities"];
}
