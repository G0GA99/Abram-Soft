"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    setTimeout(() => {
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      }
      setMounted(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full glass flex items-center justify-center">
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full glass flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-[var(--foreground)]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? -180 : 0,
          scale: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-[var(--foreground)]" />
      </motion.div>
    </motion.button>
  );
}
