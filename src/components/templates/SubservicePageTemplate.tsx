import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import Breadcrumb from "../Breadcrumb";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface SubservicePageData {
  hero: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  description: string;
  features: Feature[];
  technicalSpecs?: {
    title: string;
    items: string[];
  };
  relatedServices?: {
    title: string;
    link: string;
  }[];
}

interface SubservicePageTemplateProps {
  data: SubservicePageData;
}

export default function SubservicePageTemplate({ data }: SubservicePageTemplateProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      
      <PageHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        badge={data.hero.badge}
        ctaText={t("common.getQuote")}
        ctaAction={() => navigate("/contact")}
      />
      
      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full group hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-nextstep-green/15 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Check className="h-5 w-5 text-nextstep-green" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Specs Section */}
      {data.technicalSpecs && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">{data.technicalSpecs.title}</h2>
              <div className="space-y-4">
                {data.technicalSpecs.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-bright-teal mt-2 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Related Services */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.relatedServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => navigate(service.link)}
                  className="px-6 py-3 rounded-lg border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <CTASection
        title="Let's Build Something Great Together"
        description="Contact us to learn more about how this service can benefit your organization."
        ctaText={t("common.contactUs")}
        ctaAction={() => navigate("/contact")}
      />
    </div>
  );
}
