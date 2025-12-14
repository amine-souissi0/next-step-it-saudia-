import { motion } from "framer-motion";
import { Shield, Eye, Lock, AlertTriangle, Users, Zap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatsCounter from "@/components/StatsCounter";

const Cybersecurity = () => {
  const services = [
    {
      icon: Eye,
      title: "Managed SOC Services",
      description: "24/7 security operations center with SIEM, SOAR, and real-time threat monitoring",
      features: ["Real-time monitoring", "Threat intelligence", "Incident response", "Compliance reporting"],
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Zero-trust architecture with advanced authentication and authorization",
      features: ["Single Sign-On (SSO)", "Multi-factor authentication", "Privileged access management", "Identity governance"],
    },
    {
      icon: AlertTriangle,
      title: "Risk & Compliance",
      description: "Comprehensive risk assessment aligned with NCA ECC, ISO 27001, and CITC",
      features: ["Security audits", "Compliance frameworks", "Risk assessment", "Policy development"],
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid containment, forensics, and recovery from security incidents",
      features: ["24/7 response team", "Forensic analysis", "Threat containment", "Recovery planning"],
    },
    {
      icon: Users,
      title: "Security Awareness",
      description: "Training programs and GRC platforms to build security culture",
      features: ["Employee training", "Phishing simulations", "Security policies", "Awareness campaigns"],
    },
    {
      icon: Shield,
      title: "Zero Trust Implementation",
      description: "Modern security architecture with micro-segmentation and continuous verification",
      features: ["Network segmentation", "Device trust", "Conditional access", "Security posture validation"],
    },
  ];

  const certifications = [
    "ISO 27001",
    "ISO 22301",
    "NCA ECC",
    "CCC Compliance",
    "CITC Framework",
    "SOC 2 Type II",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-saudi-green/30 bg-saudi-green/10 text-saudi-green mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">ISO 27001 Certified | NCA Compliant</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Cybersecurity & SOC</span>
              <br />
              <span className="text-foreground">Compliant, Proactive, Intelligent</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Protecting Saudi enterprises with 24/7 managed SOC services, threat intelligence,
              and compliance aligned with NCA ECC, ISO 27001, and CITC frameworks.
            </p>

            <Button size="lg" className="glow-green bg-gradient-to-r from-saudi-green to-saudi-green-light">
              Schedule Assessment
            </Button>
          </motion.div>

          {/* Live SOC Metrics Simulation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <StatsCounter value={24} label="Hours Monitoring" suffix="/7" />
            <StatsCounter value={15} label="Avg Response Time" suffix="min" />
            <StatsCounter value={99.9} label="Threat Detection" suffix="%" />
            <StatsCounter value={150} label="Security Experts" suffix="+" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Comprehensive <span className="text-gradient">Security Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end cybersecurity solutions designed for Saudi enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-primary/50 transition-all card-elevated group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        index === 0 || index === 5 
                          ? 'from-saudi-green to-saudi-green-light' 
                          : index % 3 === 0 
                            ? 'from-nextstep-blue to-nextstep-blue-light'
                            : index % 3 === 1
                              ? 'from-nextstep-blue-light to-bright-teal'
                              : 'from-bright-teal to-nextstep-blue'
                      } flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 ${
                        index === 0 || index === 5 ? 'group-hover:glow-green' : 'group-hover:glow-blue'
                      } transition-all`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              Certified & <span className="text-gradient">Compliant</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="px-6 py-3 rounded-lg border border-border bg-secondary hover:border-primary/50 transition-all"
                >
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-nextstep-blue/10 to-bright-teal/10 p-12 rounded-2xl border border-border text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Secure Your <span className="text-gradient">Digital Assets</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free cybersecurity maturity assessment and personalized roadmap
            </p>
            <Button size="lg" className="glow-green bg-gradient-to-r from-saudi-green to-saudi-green-light">
              Schedule Security Assessment
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
