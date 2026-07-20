"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, Globe2, Laptop, Rocket, Shield, Zap, Target } from "lucide-react";

const clients = [
  { name: "MAQTechs", icon: Rocket },
  { name: "PUEHS", icon: Building2 },
  { name: "QuarterTonez", icon: Target },
  { name: "TechVision", icon: Laptop },
  { name: "GlobalCorp", icon: Globe2 },
  { name: "SecureNet", icon: Shield },
  { name: "FastTrack", icon: Zap },
  { name: "BusinessPro", icon: Briefcase },
];

function LogoItem({ client, index }: { client: typeof clients[0]; index: number }) {
  return (
    <motion.div
      className="flex items-center gap-2.5 px-6 py-3 glass rounded-xl mx-3 group cursor-pointer shrink-0"
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-9 w-9 rounded-lg bg-gradient-brand/10 flex items-center justify-center group-hover:bg-gradient-brand/20 transition-colors">
        <client.icon className="h-4.5 w-4.5 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors" />
      </div>
      <span className="font-display font-medium text-base text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors whitespace-nowrap">
        {client.name}
      </span>
    </motion.div>
  );
}

export function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-1">
            Trusted By Teams At
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First set */}
          <div className="flex shrink-0">
            {clients.map((client, idx) => (
              <LogoItem key={`a-${idx}`} client={client} index={idx} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0">
            {clients.map((client, idx) => (
              <LogoItem key={`b-${idx}`} client={client} index={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
