import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingProgress = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-full bg-gradient-to-r from-nextstep-blue via-bright-teal to-nextstep-blue-light shadow-lg"
        style={{
          boxShadow: "0 0 10px hsl(var(--nextstep-blue) / 0.5)",
        }}
      />
    </div>
  );
};

export default LoadingProgress;
