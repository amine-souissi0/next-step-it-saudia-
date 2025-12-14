import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Map, Shield, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigation } from "@/contexts/NavigationContext";
import { useLanguage } from "@/contexts/LanguageContext";

export function BottomTabBar() {
  const location = useLocation();
  const { language } = useLanguage();
  const { 
    activeTab, 
    setActiveTab, 
    setServicesDrawerOpen, 
    setMoreMenuOpen,
    setSearchOpen 
  } = useNavigation();

  // Update active tab based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === `/${language}` || path === "/") {
      setActiveTab("home");
    } else if (path === `/${language}/journey` || path === "/journey") {
      setActiveTab("journey");
    } else if (path.includes("/services") || path.includes("/cybersecurity")) {
      setActiveTab("services");
    } else {
      setActiveTab("more");
    }
  }, [location.pathname, setActiveTab, language]);

  const navItems = [
    { 
      id: "home" as const, 
      icon: Home, 
      label: "Home", 
      path: `/${language}`,
      action: null,
    },
    { 
      id: "journey" as const, 
      icon: Map, 
      label: "Journey", 
      path: `/${language}/journey`,
      action: null,
    },
    { 
      id: "services" as const, 
      icon: Shield, 
      label: "Services", 
      path: null,
      action: () => setServicesDrawerOpen(true),
    },
    { 
      id: "search" as const, 
      icon: Search, 
      label: "Search", 
      path: null,
      action: () => setSearchOpen(true),
    },
    { 
      id: "more" as const, 
      icon: Menu, 
      label: "More", 
      path: null,
      action: () => setMoreMenuOpen(true),
    },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    setActiveTab(item.id);
    if (item.action) {
      item.action();
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
    >
      <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl card-elevated">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            const content = (
              <>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-xl transition-all ${
                    isActive ? "bg-primary/20" : "hover:bg-muted"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </motion.div>
                <span
                  className={`text-xs font-medium ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full glow-blue"
                  />
                )}
              </>
            );

            if (item.path) {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => handleItemClick(item)}
                  className="relative flex flex-col items-center space-y-1 p-2 rounded-xl transition-all"
                >
                  {content}
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="relative flex flex-col items-center space-y-1 p-2 rounded-xl transition-all"
              >
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
