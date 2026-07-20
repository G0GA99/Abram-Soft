"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Code, Brain, Search, Megaphone } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { BrandLogo } from "./brand-logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Web Development",
        description: "Custom websites, WordPress, Shopify & e-commerce solutions",
        href: "/web-development",
        icon: Code,
      },
      {
        name: "AI/ML Development",
        description: "AI automation, NLP chatbots, computer vision & generative AI",
        href: "/ai-ml-development",
        icon: Brain,
      },
      {
        name: "Search Engine Optimization",
        description: "On-page, off-page, technical & local SEO strategies",
        href: "/search-engine-optimization",
        icon: Search,
      },
      {
        name: "Digital Marketing",
        description: "Social media, email, content marketing & PPC advertising",
        href: "/digital-marketing-services",
        icon: Megaphone,
      },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "pt-1.5 sm:pt-2" : "pt-2.5 sm:pt-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              "flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-5",
              isScrolled
                ? "glass shadow-xl py-1.5 border border-[var(--glass-border)]"
                : "py-2 bg-transparent border border-transparent"
            )}
          >
            {/* Logo */}
            <Link href="/" className="group rounded-2xl focus-visible:outline-offset-4" aria-label="AbramSoft home">
              <BrandLogo className="transition-transform duration-300 group-hover:scale-[1.01]" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors relative group rounded-full"
                    )}
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-brand group-hover:w-1/2 transition-all duration-300" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="glass-card p-3 w-[450px] grid grid-cols-2 gap-1.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[var(--card-hover)] transition-all group/item border border-transparent hover:border-[var(--glass-border)]"
                            >
                              <div className="h-8.5 w-8.5 rounded-lg bg-gradient-brand/10 flex items-center justify-center shrink-0 group-hover/item:bg-gradient-brand/20 transition-colors">
                                <child.icon className="h-4.5 w-4.5 text-[var(--primary)]" />
                              </div>
                              <div>
                                <p className="font-semibold text-[var(--foreground)] text-xs sm:text-xs">
                                  {child.name}
                                </p>
                                <p className="text-[10px] text-[var(--muted)] mt-0.5 line-clamp-2 leading-relaxed">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                asChild
                size="default"
                className="hidden sm:flex rounded-full text-xs font-semibold px-4 py-1.5 h-8.5 bg-gradient-brand hover:shadow-[0_4px_14px_rgba(132,218,37,0.3)] transition-all duration-300 border-0 active:scale-95"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden h-8.5 w-8.5 rounded-full glass flex items-center justify-center border border-[var(--glass-border)]"
                aria-label="Open menu"
              >
                <Menu className="h-4.5 w-4.5 text-[var(--foreground)]" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[280px] sm:max-w-xs glass border-l border-[var(--glass-border)] p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <BrandLogo compact />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-8 w-8 rounded-full glass flex items-center justify-center border border-[var(--glass-border)]"
                  >
                    <X className="h-4 w-4 text-[var(--foreground)]" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-base font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors border-b border-white/5"
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="pl-3 mt-1.5 mb-2 space-y-1.5 border-l border-[var(--primary)]/20">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <Button asChild className="w-full rounded-full bg-gradient-brand py-2 h-10 text-xs font-semibold">
                  <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
