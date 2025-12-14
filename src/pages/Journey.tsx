import { useState } from "react";
import { motion } from "framer-motion";
import { Flag, Shield, Lock, Award, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/constants/routes";

const Journey = () => {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const stages = [
    {
      id: 1,
      name: "Tamkeen",
      nameAr: "تمكين",
      subtitle: "Foundation",
      subtitleAr: "التأسيس",
      slug: "tamkeen",
      icon: Flag,
      color: "from-nextstep-green to-nextstep-green-light",
      description: "Establishing the foundational digital infrastructure and basic security measures.",
      services: [
        "Basic cloud infrastructure setup",
        "Essential cybersecurity framework",
        "Network architecture design",
        "Initial compliance assessment",
      ],
      outcomes: "Core infrastructure established, basic security controls in place",
    },
    {
      id: 2,
      name: "Himaya",
      nameAr: "حماية",
      subtitle: "Protection",
      subtitleAr: "الحماية",
      slug: "himaya",
      icon: Shield,
      color: "from-nextstep-green-light to-nextstep-gold",
      description: "Implementing comprehensive security measures and protection mechanisms.",
      services: [
        "Managed SOC services (24/7)",
        "Advanced threat detection",
        "Identity & access management",
        "Data encryption & backup",
      ],
      outcomes: "Enhanced security posture, continuous monitoring, threat mitigation",
    },
    {
      id: 3,
      name: "Mana'a",
      nameAr: "منعة",
      subtitle: "Resilience",
      subtitleAr: "المرونة",
      slug: "manaa",
      icon: Lock,
      color: "from-nextstep-gold to-nextstep-gold-light",
      description: "Building resilient systems with disaster recovery and business continuity.",
      services: [
        "Disaster recovery planning",
        "Business continuity management",
        "Redundant infrastructure",
        "Incident response capabilities",
      ],
      outcomes: "Zero-downtime architecture, rapid recovery capabilities",
    },
    {
      id: 4,
      name: "Thiqah",
      nameAr: "ثقة",
      subtitle: "Trust",
      subtitleAr: "الثقة",
      slug: "thiqah",
      icon: Award,
      color: "from-nextstep-gold-light to-nextstep-green",
      description: "Achieving compliance certifications and establishing stakeholder trust.",
      services: [
        "ISO 27001 compliance",
        "NCA ECC certification",
        "Regular security audits",
        "Governance framework",
      ],
      outcomes: "Full regulatory compliance, certified security posture",
    },
    {
      id: 5,
      name: "Riyada",
      nameAr: "ريادة",
      subtitle: "Leadership",
      subtitleAr: "الريادة",
      slug: "riyada",
      icon: Trophy,
      color: "from-nextstep-green via-nextstep-gold to-nextstep-green-light",
      description: "Becoming a digital leader with innovation and AI-driven transformation.",
      services: [
        "AI-powered automation",
        "Advanced analytics & insights",
        "Innovation labs",
        "Digital transformation strategy",
      ],
      outcomes: "Industry-leading digital capabilities, competitive advantage",
    },
  ];

  const handleStageClick = (stage: typeof stages[0]) => {
    navigate(getLocalizedPath(`/journey/${stage.slug}`, language));
  };

  const handleRequestAssessment = () => {
    navigate(getLocalizedPath("/contact", language));
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your <span className="text-gradient">Digital Maturity</span> Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate your path from foundational infrastructure to digital leadership.
            Each stage builds upon the previous, ensuring sustainable transformation.
          </p>
        </motion.div>

        {/* Journey Path Visualization */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-nextstep-green/30 via-nextstep-gold/50 to-nextstep-green/30" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isSelected = selectedStage === stage.id;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStageClick(stage)}
                    className={`cursor-pointer ${isSelected ? "z-10" : ""}`}
                  >
                    <Card className={`border-2 transition-all ${
                      isSelected
                        ? "border-primary shadow-2xl card-elevated"
                        : "border-border hover:border-primary/50"
                    }`}>
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg ${
                          isSelected ? "icon-glow-green scale-110 shadow-2xl" : ""
                        } transition-all`}>
                          <Icon className="w-10 h-10 text-white drop-shadow-xl" strokeWidth={2.5} />
                        </div>
                        <div className="text-2xl font-bold mb-1">{stage.name}</div>
                        <div className="text-sm text-primary mb-2">{stage.nameAr}</div>
                        <div className="text-sm text-muted-foreground">{stage.subtitle}</div>
                        <div className="text-xs text-muted-foreground">{stage.subtitleAr}</div>
                        
                        {/* Stage Number Badge */}
                        <div className="mt-4 w-8 h-8 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                          {stage.id}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Details */}
        {selectedStage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Card className="border-2 border-primary card-elevated">
              <CardHeader>
                <CardTitle className="text-3xl">
                  Stage {selectedStage}: {stages[selectedStage - 1].name} - {stages[selectedStage - 1].subtitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  {stages[selectedStage - 1].description}
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Key Services
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {stages[selectedStage - 1].services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-2 p-3 rounded-lg bg-secondary/50">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <h4 className="font-semibold mb-2 text-primary">Expected Outcomes</h4>
                  <p className="text-sm">{stages[selectedStage - 1].outcomes}</p>
                </div>

                <Button 
                  onClick={handleRequestAssessment}
                  className="icon-glow-green bg-gradient-to-r from-nextstep-green to-nextstep-green-light hover:from-nextstep-green-light hover:to-nextstep-gold transition-all"
                >
                  Request Assessment for This Stage
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-nextstep-blue/10 to-bright-teal/10 p-12 rounded-2xl border border-border"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-gradient">Discover Your Stage?</span>
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our 60-second digital maturity assessment and receive a personalized roadmap
          </p>
          <Button 
            size="lg" 
            onClick={handleRequestAssessment}
            className="icon-glow-green bg-gradient-to-r from-nextstep-green to-nextstep-green-light hover:from-nextstep-green-light hover:to-nextstep-gold transition-all"
          >
            Start Assessment
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;
