import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ArrowLeft, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageHero from "./PageHero";

interface JourneyStage {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  level: number;
  color: string;
  objectives: string[];
  services: string[];
}

interface JourneyStageTemplateProps {
  currentStage: JourneyStage;
  allStages: JourneyStage[];
}

export default function JourneyStageTemplate({ currentStage, allStages }: JourneyStageTemplateProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const currentIndex = allStages.findIndex(s => s.id === currentStage.id);
  const previousStage = currentIndex > 0 ? allStages[currentIndex - 1] : null;
  const nextStage = currentIndex < allStages.length - 1 ? allStages[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={currentStage.name[language]}
        subtitle={currentStage.description[language]}
        badge={`${language === "en" ? "Stage" : "المرحلة"} ${currentStage.level} ${language === "en" ? "of" : "من"} 5`}
      />

      {/* Journey Progress Visualization */}
      <section className="py-16 bg-gradient-to-b from-background via-background/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              {language === "en" ? "Your Cybersecurity Journey" : "رحلتك في الأمن السيبراني"}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "Progress through five stages of cybersecurity maturity" 
                : "التقدم عبر خمس مراحل من النضج في الأمن السيبراني"}
            </p>
          </motion.div>

          {/* Progress Bar with Stages */}
          <div className="relative max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              {allStages.map((stage, index) => (
                <div key={stage.id} className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link to={`/${language}/journey/${stage.id}`}>
                      <div
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center
                          transition-all duration-300 cursor-pointer
                          ${stage.id === currentStage.id
                            ? `bg-gradient-to-br ${stage.color} text-white shadow-2xl scale-110 ring-4 ring-primary/20`
                            : index < currentIndex
                            ? "bg-primary/20 text-primary border-2 border-primary hover:scale-105"
                            : "bg-muted text-muted-foreground border-2 border-border hover:scale-105"
                          }
                        `}
                      >
                        {index < currentIndex ? (
                          <CheckCircle2 className="w-8 h-8" />
                        ) : (
                          <span className="text-2xl font-bold">{stage.level}</span>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="mt-3 text-center"
                  >
                    <div className={`font-semibold ${stage.id === currentStage.id ? "text-primary" : ""}`}>
                      {stage.name[language]}
                    </div>
                  </motion.div>
                  
                  {index < allStages.length - 1 && (
                    <div
                      className={`
                        absolute top-8 h-0.5 transition-all duration-500
                        ${index < currentIndex ? "bg-primary" : "bg-border"}
                      `}
                      style={{
                        left: `${(100 / allStages.length) * (index + 0.5)}%`,
                        width: `${100 / allStages.length}%`,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stage Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full border-2 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${currentStage.color} flex items-center justify-center`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {language === "en" ? "Objectives" : "الأهداف"}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {currentStage.objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full border-2 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${currentStage.color} flex items-center justify-center`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {language === "en" ? "Key Services" : "الخدمات الرئيسية"}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {currentStage.services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between items-center pt-8 border-t"
          >
            {previousStage ? (
              <Link to={`/${language}/journey/${previousStage.id}`}>
                <Button variant="outline" size="lg" className="gap-2">
                  {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                  <div className={`text-${isRTL ? "right" : "left"}`}>
                    <div className="text-xs text-muted-foreground">
                      {language === "en" ? "Previous Stage" : "المرحلة السابقة"}
                    </div>
                    <div className="font-semibold">{previousStage.name[language]}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {nextStage ? (
              <Link to={`/${language}/journey/${nextStage.id}`}>
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/80">
                  <div className={`text-${isRTL ? "left" : "right"}`}>
                    <div className="text-xs text-primary-foreground/80">
                      {language === "en" ? "Next Stage" : "المرحلة التالية"}
                    </div>
                    <div className="font-semibold">{nextStage.name[language]}</div>
                  </div>
                  {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${currentStage.color}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === "en" 
                ? "Ready to Begin Your Journey?" 
                : "هل أنت مستعد لبدء رحلتك؟"}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === "en"
                ? "Let's assess your current maturity level and create a roadmap for success"
                : "دعنا نقيم مستوى نضجك الحالي ونضع خريطة طريق للنجاح"}
            </p>
            <Link to={`/${language}/contact`}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {language === "en" ? "Start Your Assessment" : "ابدأ التقييم"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
