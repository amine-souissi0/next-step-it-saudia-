import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceDomains } from "@/data/navigation";
import PageTransition from "@/components/PageTransition";
import CTASection from "@/components/templates/CTASection";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const domains = Object.values(serviceDomains);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nextstep-green/10 via-transparent to-nextstep-gold/10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
              >
                <span className="text-sm text-primary font-medium">
                  Complete Service Portfolio
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                All <span className="text-gradient">Services</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive digital transformation solutions covering cloud infrastructure, cybersecurity, 
                managed services, and enterprise collaboration — all compliant with Saudi national frameworks
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Service Domains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">35+</div>
                  <div className="text-sm text-muted-foreground">Specialized Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">NCA Compliant</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Domains Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {domains.map((domain, domainIndex) => {
                const Icon = domain.icon;
                return (
                  <motion.div
                    key={domain.path}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: domainIndex * 0.1 }}
                  >
                    {/* Domain Header */}
                    <div className="mb-8">
                      <Link to={domain.path} className="group inline-block">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:icon-glow-green transition-all`}>
                            <Icon className="w-9 h-9 text-white drop-shadow-lg" strokeWidth={2} />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                              {domain.title.en}
                            </h2>
                            <p className="text-muted-foreground mt-1">
                              {domain.subpages.length} specialized services available
                            </p>
                          </div>
                          <ArrowRight className="ml-auto w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                        </div>
                      </Link>
                    </div>

                    {/* Subservices Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {domain.subpages.map((subpage, subIndex) => (
                        <motion.div
                          key={subpage.path}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: subIndex * 0.05 }}
                        >
                          <Link to={subpage.path}>
                            <Card className="h-full border-border hover:border-primary/50 transition-all group cursor-pointer">
                              <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${domain.gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:icon-glow-green transition-all`}>
                                    <CheckCircle2 className="w-6 h-6 text-white drop-shadow-lg" strokeWidth={2} />
                                  </div>
                                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                  {subpage.title.en}
                                </CardTitle>
                                {subpage.description && (
                                  <CardDescription className="text-sm">
                                    {subpage.description.en}
                                  </CardDescription>
                                )}
                              </CardHeader>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* View More Link */}
                    <div className="mt-6 text-center">
                      <Link to={domain.path}>
                        <Button variant="outline" className="group">
                          View All {domain.title.en} Services
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-nextstep-green/5 to-nextstep-gold/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="text-gradient">Our Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade solutions built for Saudi Arabia
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Saudi Data Sovereignty",
                  description: "100% local data residency and compliance with national regulations",
                },
                {
                  title: "24/7 Local Support",
                  description: "Arabic and English speaking experts available around the clock",
                },
                {
                  title: "NCA ECC Certified",
                  description: "Full compliance with National Cybersecurity Authority standards",
                },
                {
                  title: "Vision 2030 Aligned",
                  description: "Services designed to support Saudi Arabia's digital transformation",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-border group hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nextstep-green to-nextstep-gold flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:icon-glow-green transition-all">
                        <CheckCircle2 className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Digital Infrastructure?"
          description="Speak with our experts to discuss your specific requirements and get a customized solution"
          ctaText="Schedule Consultation"
          ctaAction={() => navigate("/contact")}
          backgroundGradient="from-nextstep-green via-nextstep-gold to-nextstep-green-light"
        />
      </div>
    </PageTransition>
  );
};

export default Services;
