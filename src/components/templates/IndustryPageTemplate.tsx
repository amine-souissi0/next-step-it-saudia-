import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import ServiceCard from "./ServiceCard";
import CTASection from "./CTASection";
import Breadcrumb from "../Breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

interface CaseStudy {
  title: string;
  description: string;
  results: string;
}

interface IndustryPageData {
  hero: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  challenges: Challenge[];
  solutions: Solution[];
  caseStudies?: CaseStudy[];
  certifications?: string[];
}

interface IndustryPageTemplateProps {
  data: IndustryPageData;
}

export default function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      
      <PageHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        badge={data.hero.badge}
        ctaText={t("common.contactUs")}
        ctaAction={() => navigate("/contact")}
      />
      
      {/* Challenges Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-l-4 border-l-nextstep-green">
                  <h3 className="font-semibold mb-3 text-lg">{challenge.title}</h3>
                  <p className="text-muted-foreground text-sm">{challenge.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.solutions.map((solution, index) => (
              <ServiceCard
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                link={solution.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      {data.caseStudies && data.caseStudies.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {data.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 h-full">
                    <h3 className="font-semibold mb-3 text-xl">{caseStudy.title}</h3>
                    <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-nextstep-green">{caseStudy.results}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Certifications Section */}
      {data.certifications && data.certifications.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Compliance</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {data.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CTASection
        title="Ready to Transform Your Organization?"
        description="Let's discuss how our industry-specific solutions can address your unique challenges."
        ctaText={t("common.contactUs")}
        ctaAction={() => navigate("/contact")}
      />
    </div>
  );
}
