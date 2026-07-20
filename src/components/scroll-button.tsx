"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }

      // Show scroll to top button after 200px of scrolling
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        <motion.button
          id="global-scroll-action"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollAction}
          className="relative h-12 w-12 rounded-full glass flex items-center justify-center cursor-pointer shadow-[0_8px_32px_rgba(27,176,128,0.15)] border border-[var(--glass-border)] group focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
          aria-label={showScrollTop ? "Scroll to top" : "Scroll to next section"}
        >
          {/* Circular Scroll Progress Track */}
          <svg className="absolute -rotate-90 w-full h-full p-0.5">
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-white/5"
              strokeWidth="2"
              fill="transparent"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-[var(--primary)]"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </svg>

          {/* Icon (Up/Down) */}
          <div className="relative z-10 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
            {showScrollTop ? (
              <ArrowUp className="h-5 w-5 animate-bounce-slow" />
            ) : (
              <ArrowDown className="h-5 w-5 animate-bounce-slow" />
            )}
          </div>

          {/* Floating dynamic hover indicator */}
          <span className="absolute right-14 bg-[var(--background-secondary)] text-xs font-semibold py-1 px-2.5 rounded-lg border border-[var(--glass-border)] text-[var(--foreground)] whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 origin-right transition-all duration-300 pointer-events-none shadow-md">
            {showScrollTop ? "Scroll to Top" : "Scroll Down"}
          </span>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
