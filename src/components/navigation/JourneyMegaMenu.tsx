import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Shield, Lock, Award, Trophy } from "lucide-react";
import { getLocalizedPath } from "@/constants/routes";

interface JourneyMegaMenuProps {
  isOpen: boolean;
  lang: "en" | "ar";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const JourneyMegaMenu = ({ isOpen, lang, onMouseEnter, onMouseLeave }: JourneyMegaMenuProps) => {
  const stages = [
    {
      id: "tamkeen",
      level: 1,
      name: "Tamkeen",
      nameAr: "تمكين",
      subtitle: lang === "en" ? "Foundation" : "التأسيس",
      icon: Flag,
      color: "from-nextstep-green to-nextstep-green-light",
      description: lang === "en" 
        ? "Establishing foundational digital infrastructure" 
        : "تأسيس البنية التحتية الرقمية الأساسية",
    },
    {
      id: "himaya",
      level: 2,
      name: "Himaya",
      nameAr: "حماية",
      subtitle: lang === "en" ? "Protection" : "الحماية",
      icon: Shield,
      color: "from-nextstep-green-light to-nextstep-gold",
      description: lang === "en"
        ? "Comprehensive security measures"
        : "إجراءات أمنية شاملة",
    },
    {
      id: "manaa",
      level: 3,
      name: "Mana'a",
      nameAr: "منعة",
      subtitle: lang === "en" ? "Resilience" : "المرونة",
      icon: Lock,
      color: "from-nextstep-gold to-nextstep-gold-light",
      description: lang === "en"
        ? "Building resilient systems"
        : "بناء أنظمة مرنة",
    },
    {
      id: "thiqah",
      level: 4,
      name: "Thiqah",
      nameAr: "ثقة",
      subtitle: lang === "en" ? "Trust" : "الثقة",
      icon: Award,
      color: "from-nextstep-gold-light to-nextstep-green",
      description: lang === "en"
        ? "Achieving compliance certifications"
        : "تحقيق شهادات الامتثال",
    },
    {
      id: "riyada",
      level: 5,
      name: "Riyada",
      nameAr: "ريادة",
      subtitle: lang === "en" ? "Leadership" : "الريادة",
      icon: Trophy,
      color: "from-nextstep-green via-nextstep-gold to-nextstep-green-light",
      description: lang === "en"
        ? "Becoming a digital leader"
        : "أن تصبح رائداً رقمياً",
    },
  ];

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
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {lang === "en" ? "Digital Maturity Journey" : "رحلة النضج الرقمي"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {lang === "en" 
                  ? "Navigate your path from foundation to digital leadership"
                  : "تنقل في مسارك من التأسيس إلى الريادة الرقمية"}
              </p>
            </div>

            <div className="grid grid-cols-5 gap-6">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <Link
                    key={stage.id}
                    to={getLocalizedPath(`/journey/${stage.id}`, lang)}
                    className="group block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-center"
                    >
                      <div className={`w-18 h-18 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-xl transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:icon-glow-green`}>
                        <Icon className="w-9 h-9 text-white drop-shadow-xl" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {lang === "en" ? stage.name : stage.nameAr}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {stage.subtitle}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {stage.description}
                      </div>
                      <div className="mt-3 w-6 h-6 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {stage.level}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <Link
                to={getLocalizedPath("/journey", lang)}
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
              >
                {lang === "en" ? "Explore Full Journey →" : "استكشف الرحلة الكاملة ←"}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JourneyMegaMenu;
