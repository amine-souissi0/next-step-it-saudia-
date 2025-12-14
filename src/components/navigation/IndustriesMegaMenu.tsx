import { Link } from "react-router-dom";
import { industries } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getLocalizedPath } from "@/constants/routes";

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  lang: "en" | "ar";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const IndustriesMegaMenu = ({ isOpen, lang, onMouseEnter, onMouseLeave }: IndustriesMegaMenuProps) => {
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
            <div className="grid grid-cols-4 gap-6">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.path}
                    to={getLocalizedPath(industry.path, lang)}
                    className="group flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-all"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-xl transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:icon-glow-green flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {industry.title[lang]}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {lang === "en" 
                          ? "Tailored digital solutions for this sector"
                          : "حلول رقمية مصممة خصيصاً لهذا القطاع"
                        }
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IndustriesMegaMenu;
