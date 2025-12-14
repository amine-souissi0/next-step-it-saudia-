import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ServicesMegaMenu from "@/components/navigation/ServicesMegaMenu";
import IndustriesMegaMenu from "@/components/navigation/IndustriesMegaMenu";
import JourneyMegaMenu from "@/components/navigation/JourneyMegaMenu";
import { useNavigation } from "@/contexts/NavigationContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesMegaMenuOpen, setServicesMegaMenuOpen] = useState(false);
  const [industriesMegaMenuOpen, setIndustriesMegaMenuOpen] = useState(false);
  const [journeyMegaMenuOpen, setJourneyMegaMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchOpen } = useNavigation();
  const { language, switchLanguage } = useLanguage();
  const { t } = useTranslation();

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), path: "/", key: "home" },
    { label: t("nav.journey"), path: "/journey", key: "journey", hasMegaMenu: "journey" },
    { label: t("nav.services"), path: "/services", key: "services", hasMegaMenu: "services" },
    { label: t("nav.industries"), path: "/industries", key: "industries", hasMegaMenu: "industries" },
    { label: t("nav.about"), path: "/about", key: "about" },
    { label: t("nav.contact"), path: "/contact", key: "contact" },
  ];

  const toggleLang = () => {
    switchLanguage(language === "en" ? "ar" : "en");
  };

  const isPathActive = (path: string) => {
    const currentPathWithoutLang = location.pathname.replace(/^\/(en|ar)/, "");
    return currentPathWithoutLang === path || currentPathWithoutLang.startsWith(path + "/");
  };

  const handleGetStarted = () => {
    navigate(getLocalizedPath("/contact", language));
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 backdrop-blur-lg border-b transition-all duration-300",
        isScrolled 
          ? "h-14 bg-background/95 border-border shadow-lg" 
          : "h-16 bg-background/80 border-border/50"
      )}
    >
      <div className="container mx-auto px-2 md:px-3 lg:px-4 h-full max-w-full overflow-hidden">
        <div className="flex items-center justify-between h-full gap-1 lg:gap-2">
          {/* Logo */}
          <Link to={getLocalizedPath("/", language)} className="flex items-center space-x-1 lg:space-x-2 rtl:space-x-reverse shrink-0">
            <img 
              src={logo} 
              alt="Next Step Middle East" 
              className={cn("transition-all", isScrolled ? "h-5 lg:h-8" : "h-6 lg:h-10")}
            />
            <span className={cn("font-bold text-foreground transition-all hidden md:inline whitespace-nowrap", isScrolled ? "text-[10px] lg:text-sm" : "text-xs lg:text-base")}>
              Next Step Middle East
            </span>
          </Link>

          {/* Desktop/Tablet Navigation */}
          <div className="hidden md:flex items-center flex-shrink min-w-0">
            <div className="flex items-center space-x-0">
              {navItems.map((item) => (
                item.hasMegaMenu ? (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasMegaMenu === "services") setServicesMegaMenuOpen(true);
                      if (item.hasMegaMenu === "industries") setIndustriesMegaMenuOpen(true);
                      if (item.hasMegaMenu === "journey") setJourneyMegaMenuOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.hasMegaMenu === "services") setServicesMegaMenuOpen(false);
                      if (item.hasMegaMenu === "industries") setIndustriesMegaMenuOpen(false);
                      if (item.hasMegaMenu === "journey") setJourneyMegaMenuOpen(false);
                    }}
                  >
                    <button
                      className={cn(
                        "px-1.5 lg:px-3 py-1 lg:py-2 rounded-lg transition-all flex items-center gap-0.5 text-xs lg:text-base whitespace-nowrap",
                        isPathActive(item.path)
                          ? "bg-primary/20 text-primary"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4" strokeWidth={2} />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    to={getLocalizedPath(item.path, language)}
                    className={cn(
                      "px-1.5 lg:px-3 py-1 lg:py-2 rounded-lg transition-all text-xs lg:text-base whitespace-nowrap",
                      isPathActive(item.path)
                        ? "bg-primary/20 text-primary"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
            <div className="flex items-center shrink-0 ml-1 lg:ml-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLang}
                className="text-foreground hover:text-primary h-7 w-7 lg:h-9 lg:w-9"
                aria-label="Switch language"
              >
                <Globe className="w-3.5 h-3.5 lg:w-5 lg:h-5" strokeWidth={2.5} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="text-foreground hover:text-primary h-7 w-7 lg:h-9 lg:w-9"
                aria-label="Open search"
              >
                <Search className="w-3.5 h-3.5 lg:w-5 lg:h-5" strokeWidth={2.5} />
              </Button>
              <Button
                onClick={handleGetStarted}
                size="sm"
                className="ml-1 lg:ml-2 icon-glow-green bg-gradient-to-r from-nextstep-green to-nextstep-green-light hover:from-nextstep-green-light hover:to-nextstep-gold transition-all text-[10px] lg:text-sm px-1.5 lg:px-4 h-7 lg:h-9"
              >
                <span className="hidden lg:inline">{t("nav.getStarted")}</span>
                <span className="lg:hidden">Start</span>
              </Button>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleLang} className="text-foreground hover:text-primary">
              <Globe className="w-5 h-5" strokeWidth={2.5} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

          {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="py-4 space-y-2 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    to={getLocalizedPath(item.path, language)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg transition-all text-base font-medium",
                      isPathActive(item.path)
                        ? "bg-primary/20 text-primary"
                        : "text-foreground hover:bg-secondary bg-card"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    handleGetStarted();
                  }}
                  className="w-full mt-4 icon-glow-green bg-gradient-to-r from-nextstep-green to-nextstep-green-light"
                >
                  {t("nav.getStarted")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Mega Menus */}
      <JourneyMegaMenu
        isOpen={journeyMegaMenuOpen}
        lang={language}
        onMouseEnter={() => setJourneyMegaMenuOpen(true)}
        onMouseLeave={() => setJourneyMegaMenuOpen(false)}
      />
      <ServicesMegaMenu 
        isOpen={servicesMegaMenuOpen} 
        lang={language}
        onMouseEnter={() => setServicesMegaMenuOpen(true)}
        onMouseLeave={() => setServicesMegaMenuOpen(false)}
      />
      <IndustriesMegaMenu 
        isOpen={industriesMegaMenuOpen} 
        lang={language}
        onMouseEnter={() => setIndustriesMegaMenuOpen(true)}
        onMouseLeave={() => setIndustriesMegaMenuOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
