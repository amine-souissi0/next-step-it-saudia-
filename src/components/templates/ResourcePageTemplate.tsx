import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import Breadcrumb from "../Breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2, Calendar, Clock } from "lucide-react";

interface ResourcePageData {
  hero: {
    title: string;
    subtitle: string;
    badge?: string;
  };
  content: string;
  meta: {
    author?: string;
    date?: string;
    readTime?: string;
    category?: string;
  };
  downloadUrl?: string;
  relatedResources?: {
    title: string;
    link: string;
    type: string;
  }[];
}

interface ResourcePageTemplateProps {
  data: ResourcePageData;
}

export default function ResourcePageTemplate({ data }: ResourcePageTemplateProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: data.hero.title,
        text: data.hero.subtitle,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Breadcrumb />
      
      <PageHero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        badge={data.hero.badge}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
              {data.meta.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {data.meta.date}
                </div>
              )}
              {data.meta.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {data.meta.readTime}
                </div>
              )}
              {data.meta.author && (
                <div className="flex items-center gap-2">
                  By {data.meta.author}
                </div>
              )}
            </div>
            
            {/* Content Body */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 mt-12 pt-8 border-t border-border">
              {data.downloadUrl && (
                <Button variant="default">
                  <Download className="mr-2 h-4 w-4" />
                  {t("common.download")}
                </Button>
              )}
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Related Resources */}
              {data.relatedResources && data.relatedResources.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Related Resources</h3>
                  <div className="space-y-3">
                    {data.relatedResources.map((resource, index) => (
                      <motion.button
                        key={index}
                        onClick={() => navigate(resource.link)}
                        className="w-full text-left p-3 rounded-lg border border-border hover:border-nextstep-blue hover:bg-nextstep-blue/5 transition-all"
                        whileHover={{ x: 4 }}
                      >
                        <div className="text-xs text-muted-foreground mb-1">
                          {resource.type}
                        </div>
                        <div className="text-sm font-medium">
                          {resource.title}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </Card>
              )}
              
              {/* CTA Card */}
              <Card className="p-6 bg-gradient-to-br from-nextstep-blue/10 to-bright-teal/10">
                <h3 className="font-semibold mb-2">Need Expert Guidance?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our team is here to help you implement these solutions.
                </p>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => navigate("/contact")}
                >
                  {t("common.contactUs")}
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection
        title="Explore More Resources"
        description="Discover more insights, case studies, and thought leadership content."
        ctaText={t("common.viewAll")}
        ctaAction={() => navigate("/resources")}
      />
    </div>
  );
}
