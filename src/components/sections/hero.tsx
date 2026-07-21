"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Users, Briefcase, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Floating particle component
function Particle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[var(--primary)]/60"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated gradient orb
function GradientOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Users, value: "57+", label: "Clients" },
    { icon: Briefcase, value: "147+", label: "Projects" },
    { icon: Star, value: "99%", label: "Satisfaction" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <GradientOrb className="w-[600px] h-[600px] bg-[var(--primary)] top-[-200px] left-[-200px]" />
        <GradientOrb className="w-[500px] h-[500px] bg-[var(--secondary)] bottom-[-150px] right-[-150px]" />
        <GradientOrb className="w-[400px] h-[400px] bg-[var(--accent)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        
        {/* Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <Particle
              key={i}
              delay={i * 0.2}
              x={`${((i * 73) % 90) + 5}%`}
              y={`${((i * 37) % 90) + 5}%`}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="h-4 w-4 text-[var(--primary)]" />
          <span className="text-sm text-[var(--muted)]">
            Full-Service Digital Solutions Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-[var(--foreground)]">Crafting</span>
          <br />
          <span className="text-gradient">Digital Excellence</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          id="hero-subheading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontWeight: "normal" }}
          className="font-luxury font-normal italic text-xl sm:text-2xl text-[var(--muted)]/95 max-w-3xl mx-auto mb-8 leading-relaxed px-2 tracking-wide"
        >
          We&apos;re a full-service digital solutions agency specializing in web development,
          SEO, social media marketing, and quality assurance to help businesses grow online.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Button asChild size="default" variant="swipe" className="group">
            <Link href="/portfolio">
              View Our Portfolio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="glassy" size="default" id="hero-contact-btn">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-8 sm:gap-12"
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-xl text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--muted)]">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* 3D Floating Shape */}
      <motion.div
        className="absolute right-[10%] top-1/3 w-64 h-64 hidden lg:block pointer-events-none"
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
          <div className="absolute inset-4 rounded-2xl glass border border-[var(--glass-border)] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20" />
            {/* Code-like decorations */}
            <div className="absolute top-6 left-6 right-6 space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-[var(--primary)]/30" />
              <div className="h-2 w-1/2 rounded-full bg-[var(--secondary)]/30" />
              <div className="h-2 w-2/3 rounded-full bg-[var(--accent)]/30" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-lg bg-[var(--primary)]/20" />
                <div className="h-8 w-8 rounded-lg bg-[var(--secondary)]/20" />
                <div className="h-8 flex-1 rounded-lg bg-[var(--glass)]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => {
          const nextSection = containerRef.current?.nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[var(--ring)] rounded-full p-1"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--glass-border)] group-hover:border-[var(--primary)]/50 flex justify-center pt-2 transition-colors duration-300"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
