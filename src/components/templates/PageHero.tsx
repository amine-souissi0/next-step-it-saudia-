import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundGradient?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  ctaText,
  ctaAction,
  backgroundGradient = "from-nextstep-blue/10 via-bright-teal/5 to-transparent"
}: PageHeroProps) {
  return (
    <section className={`relative py-20 md:py-32 bg-gradient-to-b ${backgroundGradient}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Badge variant="outline" className="text-sm px-4 py-2">
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-nextstep-blue via-bright-teal to-nextstep-blue-light bg-clip-text text-transparent">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {ctaText && ctaAction && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={ctaAction}
                className="group"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
