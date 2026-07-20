"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "Laravel", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "Figma", category: "Design" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Semrush", category: "SEO" },
  { name: "React", category: "Frontend" },
  { name: "Node JS", category: "Backend" },
  { name: "ASP .NET", category: "Backend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next JS", category: "Frontend" },
  { name: "Adobe Ps", category: "Design" },
  { name: "MS Office", category: "Productivity" },
];

const toolLogos: Record<string, React.ReactNode> = {
  "Laravel": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <path d="M12 12v10" />
      <path d="M2 7v10" />
      <path d="M22 7v10" />
    </svg>
  ),
  "WordPress": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M20.5 8.5L16 19.5L12 8.5L8 19.5L3.5 8.5" />
    </svg>
  ),
  "Figma": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="6" r="3" />
      <path d="M15 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <circle cx="9" cy="12" r="3" />
      <circle cx="15" cy="12" r="3" />
      <path d="M9 15v3a3 3 0 0 0 3 3v-3a3 3 0 0 0-3-3z" />
    </svg>
  ),
  "Shopify": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
      <path d="M12 12c1.5-1.5 3-1.5 3-3s-1.5-3-3-3" />
    </svg>
  ),
  "Semrush": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="4" opacity="0.4" />
    </svg>
  ),
  "React": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="3.8" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  "Node JS": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
      <path d="M12 2v20" opacity="0.3" />
      <path d="M12 12L3.34 7" opacity="0.3" />
      <path d="M12 12l8.66-5" opacity="0.3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  "ASP .NET": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" opacity="0.2" />
      <path d="M16 8h-4a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4" />
      <path d="M12 8v8" />
    </svg>
  ),
  "Angular": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 22,5 19,19 12,22 5,19 2,5" />
      <path d="M12 6l5 11h-3l-2-5-2 5H7l5-11z" />
    </svg>
  ),
  "Next JS": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 16V8l8 8V8" />
    </svg>
  ),
  "Adobe Ps": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 8h3a2 2 0 1 1 0 4H7v4" />
      <path d="M14 11.5c1-1 3 0 2 2s-3 1-2 3" />
    </svg>
  ),
  "MS Office": (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 6l9 4 9-4-9-4zm-9 6.5V17.5l9 4.5v-12l-9-4zm18 0l-9 4v12l9-4.5v-11.5z" />
      <line x1="12" y1="12" x2="12" y2="22" />
    </svg>
  ),
};

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const LogoSvg = toolLogos[tool.name] || (
    <span className="font-display font-bold text-xl text-[var(--primary)]">
      {tool.name.charAt(0)}
    </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative"
    >
      <div className="glass-card p-4 text-center group-hover:border-[var(--primary)]/30 transition-colors">
        <motion.div
          className="h-16 w-16 mx-auto rounded-2xl bg-gradient-brand/10 flex items-center justify-center mb-3 group-hover:bg-gradient-brand/20 transition-colors"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        >
          {LogoSvg}
        </motion.div>
        <h4 className="font-medium text-[var(--foreground)] text-sm mb-1">{tool.name}</h4>
        <p className="text-xs text-[var(--muted)]">{tool.category}</p>
      </div>
    </motion.div>
  );
}

export function Toolkit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="toolkit" ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Creative Toolkit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)]"
          >
            Our toolbox for <span className="text-gradient">innovation</span>
          </motion.h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
