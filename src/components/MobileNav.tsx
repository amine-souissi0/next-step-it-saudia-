import { Link, useLocation } from "react-router-dom";
import { Home, Map, Shield, Mail } from "lucide-react";
import { motion } from "framer-motion";

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: Map, path: "/journey", label: "Journey" },
    { icon: Shield, path: "/cybersecurity", label: "Security" },
    { icon: Mail, path: "/contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
    >
      <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl card-elevated">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center space-y-1 p-2 rounded-xl transition-all"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl ${
                    isActive ? "bg-primary/20" : "hover:bg-secondary"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </motion.div>
                <span
                  className={`text-xs ${
                    isActive ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full glow-cyan"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
