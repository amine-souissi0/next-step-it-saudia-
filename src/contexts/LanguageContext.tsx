import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Language, extractLangFromPath, isValidLanguage, getLocalizedPath, getPathWithoutLang } from "@/constants/routes";

interface LanguageContextType {
  language: Language;
  switchLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  
  // Initialize language from URL or localStorage or browser
  const getInitialLanguage = (): Language => {
    const urlLang = extractLangFromPath(location.pathname);
    if (urlLang) return urlLang;
    
    const storedLang = localStorage.getItem("language");
    if (storedLang && isValidLanguage(storedLang)) return storedLang;
    
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "ar" ? "ar" : "en";
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const isRTL = language === "ar";

  // Sync i18n and document direction
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language, isRTL, i18n]);

  // Update language when URL changes
  useEffect(() => {
    const urlLang = extractLangFromPath(location.pathname);
    if (urlLang && urlLang !== language) {
      setLanguage(urlLang);
    }
  }, [location.pathname]);

  const switchLanguage = (newLang: Language) => {
    if (newLang === language) return;
    
    const currentPath = getPathWithoutLang(location.pathname);
    const newPath = getLocalizedPath(currentPath, newLang);
    
    setLanguage(newLang);
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
