"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Calendar, Heart } from "lucide-react";

const milestones = [
  { year: "2019 – 2020", title: "Foundation", description: "AbramSoft was founded with a vision to deliver exceptional digital solutions." },
  { year: "2020 – 2021", title: "First Major Clients", description: "Secured our first enterprise clients and expanded the team." },
  { year: "2021 – 2022", title: "Service Expansion", description: "Added AI/ML development and digital marketing to our service portfolio." },
  { year: "2022 – 2023", title: "International Growth", description: "Started serving clients globally and opened new offices." },
  { year: "2023 – 2024", title: "Innovation Focus", description: "Launched proprietary AI solutions and automation platforms." },
  { year: "2024 – 2025", title: "Market Leadership", description: "Recognized as a leading digital agency in the region." },
];

const stats = [
  { icon: Briefcase, value: 147, suffix: "+", label: "Project Completed" },
  { icon: Calendar, value: 6, suffix: "+", label: "Years Of Experience" },
  { icon: Heart, value: 99, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl text-gradient">
      {displayValue}{suffix}
    </span>
  );
}

function MilestoneCard({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center gap-4 sm:gap-8 pl-10 md:pl-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 w-full ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-5 sm:p-6 inline-block w-full md:max-w-sm text-left"
        >
          <span className="text-sm font-semibold text-[var(--primary)]">{milestone.year}</span>
          <h3 className="subheading-luxury text-xl sm:text-2xl text-[var(--foreground)] mt-2">
            {milestone.title}
          </h3>
          <p className="text-[var(--muted)] mt-2 text-sm">{milestone.description}</p>
        </motion.div>
      </div>

      {/* Center dot (mobile: left aligned) */}
      <div className="absolute left-3 md:static md:relative shrink-0">
        <div className="h-4 w-4 rounded-full bg-gradient-brand relative z-10" />
        <div className="absolute inset-0 h-4 w-4 rounded-full bg-gradient-brand animate-ping opacity-50" />
      </div>

      {/* Spacer (desktop only) */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Our Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] mb-4"
          >
            Proud moments & <span className="text-gradient">milestones</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--muted)] max-w-2xl mx-auto"
          >
            As a full-service digital agency, we craft high-performance websites, strategic branding,
            and measurable marketing solutions that empower businesses to scale confidently in the digital world.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 sm:p-8 text-center"
            >
              <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-brand/10 flex items-center justify-center mb-4">
                <stat.icon className="h-7 w-7 text-[var(--primary)]" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-[var(--muted)] mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - left on mobile, center on desktop */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
