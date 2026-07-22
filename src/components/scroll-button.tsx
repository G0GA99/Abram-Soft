"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            const progress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(progress);
          }

          if (window.scrollY > 200) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (showScrollTop) {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll down to the next section (first section below hero)
      const firstSection = document.querySelector("section")?.getBoundingClientRect().height || window.innerHeight;
      window.scrollTo({
        top: firstSection,
        behavior: "smooth",
      });
    }
  };

  // SVG parameters for progress circle
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        <motion.button
          id="global-scroll-action"
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 15 }}
          whileHover={{ 
            scale: 1.1, 
            y: -3,
            boxShadow: "0 8px 20px rgba(27, 176, 128, 0.25)"
          }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 450, damping: 24, mass: 0.7 }}
          onClick={handleScrollAction}
          className="relative h-[35px] w-[35px] rounded-full bg-white/80 dark:bg-[#0B0B0E]/80 backdrop-blur-md hover:bg-[#F5F5F7] dark:hover:bg-[#121216] flex items-center justify-center cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-emerald-brand/60 dark:hover:border-emerald-brand/60 group focus:outline-none focus:ring-2 focus:ring-emerald-brand/50 shadow-md transition-all duration-300"
          aria-label={showScrollTop ? "Scroll to top" : "Scroll to next section"}
        >
          {/* Circular Scroll Progress Track */}
          <svg className="absolute -rotate-90 w-full h-full p-0 z-20 pointer-events-none">
            <circle
              cx="17.5"
              cy="17.5"
              r={radius}
              className="stroke-neutral-100 dark:stroke-neutral-900"
              strokeWidth="1"
              fill="transparent"
            />
            <motion.circle
              cx="17.5"
              cy="17.5"
              r={radius}
              className="stroke-emerald-brand"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </svg>

          {/* Icon (Up/Down) */}
          <div className="relative z-10 text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-brand transition-colors duration-300">
            {showScrollTop ? (
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            ) : (
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </div>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
