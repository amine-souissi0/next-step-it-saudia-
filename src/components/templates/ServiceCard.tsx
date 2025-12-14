import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  gradient = "from-nextstep-green to-nextstep-gold",
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link to={link}>
        <Card className="group relative h-full p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-nextstep-green/5 to-nextstep-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className={cn(
              "w-16 h-16 rounded-xl mb-4 flex items-center justify-center",
              "bg-gradient-to-br shadow-lg",
              gradient,
              "group-hover:scale-110 group-hover:icon-glow-green transition-all duration-300"
            )}>
              <Icon className="h-8 w-8 text-white drop-shadow-lg" strokeWidth={2} />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {description}
            </p>
            
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
