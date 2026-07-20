"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Search, Lightbulb, Palette, Code2, TestTube, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery & Requirement Gathering",
    description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultations and research.",
    icon: Search,
  },
  {
    number: "02",
    title: "Feasibility & Strategic Planning",
    description: "We analyze technical feasibility, create project roadmaps, and define milestones to ensure successful delivery.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Solution Design",
    description: "Our design team creates wireframes, mockups, and prototypes that align with your brand identity and user expectations.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Agile Development",
    description: "We follow agile methodologies with regular sprints, ensuring transparency and flexibility throughout the development process.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers ensures your product is bug-free and performs optimally.",
    icon: TestTube,
  },
  {
    number: "06",
    title: "Deployment & Delivery",
    description: "We handle seamless deployment, provide documentation, and offer ongoing support for your success.",
    icon: Rocket,
  },
];

function StepCard({ step, index, isOpen, onToggle }: { 
  step: typeof steps[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < steps.length - 1 && (
        <motion.div
          className="absolute left-[35px] sm:left-[41px] top-[76px] w-0.5 h-[calc(100%-1rem)] bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]/20 hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          style={{ originY: 0 }}
        />
      )}

      <motion.div
        onClick={onToggle}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        animate={{
          borderColor: isOpen
            ? "color-mix(in srgb, var(--primary) 45%, var(--glass-border))"
            : "var(--glass-border)",
        }}
        className={cn(
          "glass-panel cursor-pointer p-5 sm:p-6 select-none relative overflow-hidden",
          isOpen && "glow-subtle"
        )}
      >
        {/* Active accent glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/8 to-transparent pointer-events-none"
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative flex items-start gap-4">
          {/* Number/Icon */}
          <div className="shrink-0">
            <motion.div
              animate={{
                rotate: isOpen ? [0, -8, 8, 0] : 0,
                scale: isOpen ? 1.05 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-brand flex items-center justify-center"
            >
              <step.icon className="h-6 w-6 text-[var(--primary-foreground)]" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">
                  Step {step.number}
                </span>
                <h3 className="subheading-luxury text-lg sm:text-xl text-[var(--foreground)] mt-1">
                  {step.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "h-9 w-9 rounded-full flex items-center justify-center shrink-0 transition-colors",
                  isOpen ? "bg-[var(--primary)]/15" : "glass"
                )}
              >
                <ChevronDown className="h-5 w-5 text-[var(--primary)]" />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="text-[var(--muted)] mt-4 leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                  {/* Animated progress underline drawing in on open */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0 }}
                    className="mt-4 h-0.5 rounded-full bg-gradient-brand"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Methodology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section id="methodology" ref={ref} className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] mb-4"
          >
            Our methodology for <span className="text-gradient">success</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isOpen={openStep === index}
              onToggle={() => setOpenStep(openStep === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
