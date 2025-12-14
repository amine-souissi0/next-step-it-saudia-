import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatCounter = ({ value, label, suffix = "", prefix = "" }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all card-elevated"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default StatCounter;
