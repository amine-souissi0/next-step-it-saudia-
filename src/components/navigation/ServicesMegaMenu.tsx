import { Link } from "react-router-dom";
import { serviceDomains } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getLocalizedPath } from "@/constants/routes";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  lang: "en" | "ar";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServicesMegaMenu = ({ isOpen, lang, onMouseEnter, onMouseLeave }: ServicesMegaMenuProps) => {
  const domains = Object.values(serviceDomains);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-full mt-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-8">
              {domains.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div key={domain.path} className="space-y-3">
                    <Link
                      to={getLocalizedPath(domain.path, lang)}
                      className="group flex items-center gap-3 mb-4"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-lg transition-all group-hover:scale-110 group-hover:icon-glow-green`}>
                        <Icon className="w-6 h-6 text-white drop-shadow-md" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {domain.title[lang]}
                        </h3>
                      </div>
                    </Link>
                    
                    <div className="space-y-2 pl-2">
                      {domain.subpages.slice(0, 4).map((subpage) => (
                        <Link
                          key={subpage.path}
                          to={getLocalizedPath(subpage.path, lang)}
                          className="block text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all"
                        >
                          {subpage.title[lang]}
                        </Link>
                      ))}
                      {domain.subpages.length > 4 && (
                        <Link
                          to={getLocalizedPath(domain.path, lang)}
                          className="block text-sm text-primary font-medium hover:translate-x-1 transition-all"
                        >
                          → {lang === "en" ? `View all (${domain.subpages.length})` : `عرض الكل (${domain.subpages.length})`}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesMegaMenu;
