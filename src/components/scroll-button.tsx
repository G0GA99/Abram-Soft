"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentY = window.scrollY;

          if (totalScroll > 0) {
            const progress = (currentY / totalScroll) * 100;
            setScrollProgress(progress);
          }

          // Show button when scrolled past 150px
          setIsVisible(currentY > 150);

          // Switch to "Back to Top" mode when scrolled past 500px
          setShowScrollTop(currentY > 500);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (showScrollTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Smoothly scroll down past the hero section
      const nextTarget = window.innerHeight * 0.9;
      window.scrollTo({
        top: nextTarget,
        behavior: "smooth",
      });
    }
  };

  // SVG parameters for progress circle
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            id="global-scroll-action"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ 
              scale: 1.08, 
              y: -2,
              boxShadow: "0 8px 24px rgba(27, 176, 128, 0.3)"
            }}
            whileTap={{ scale: 0.92, y: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={handleScrollAction}
            className="relative h-10 w-10 rounded-full bg-white/85 dark:bg-[#0E0E12]/85 backdrop-blur-md hover:bg-white dark:hover:bg-[#16161C] flex items-center justify-center cursor-pointer border border-neutral-200/80 dark:border-white/10 hover:border-emerald-brand/70 dark:hover:border-emerald-brand/70 group focus:outline-none focus:ring-2 focus:ring-emerald-brand/50 shadow-lg transition-colors duration-300"
            aria-label={showScrollTop ? "Scroll to top" : "Scroll down"}
            title={showScrollTop ? "Back to top" : "Scroll down"}
          >
            {/* Circular Scroll Progress Track */}
            <svg className="absolute -rotate-90 w-full h-full p-0 z-20 pointer-events-none">
              <circle
                cx="20"
                cy="20"
                r={radius}
                className="stroke-neutral-200/60 dark:stroke-white/10"
                strokeWidth="1.5"
                fill="transparent"
              />
              <motion.circle
                cx="20"
                cy="20"
                r={radius}
                className="stroke-emerald-brand"
                strokeWidth="2"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </svg>

            {/* Smoothly Rotating Icon (ArrowUp rotated 180deg when pointing down) */}
            <motion.div 
              className="relative z-10 text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-brand transition-colors duration-300"
              animate={{ rotate: showScrollTop ? 0 : 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

