import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LucideIcon } from "lucide-react";
import PageHero from "./PageHero";
import ServiceCard from "./ServiceCard";
import CTASection from "./CTASection";
import Breadcrumb from "../Breadcrumb";

interface Subservice {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
}

interface ServicePageData {
  hero: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  overview: string;
  benefits: string[];
  subservices: Subservice[];
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
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
      
      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.overview}
            </p>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border/50"
                >
                  <div className="w-2 h-2 rounded-full bg-nextstep-blue mt-2 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Subservices Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subservices.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Transform Your Infrastructure?"
        description="Let's discuss how our solutions can help your organization achieve its goals."
        ctaText={t("common.contactUs")}
        ctaAction={() => navigate("/contact")}
      />
    </div>
  );
}
