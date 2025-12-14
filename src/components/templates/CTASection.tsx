import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaAction: () => void;
  backgroundGradient?: string;
}

export default function CTASection({
  title,
  description,
  ctaText,
  ctaAction,
  backgroundGradient = "from-nextstep-green via-nextstep-green-light to-nextstep-gold"
}: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${backgroundGradient} opacity-10`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
          )}
          
          <Button
            size="lg"
            onClick={ctaAction}
            className="group"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
