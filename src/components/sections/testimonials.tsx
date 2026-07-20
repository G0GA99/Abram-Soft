"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ayesha was an exceptional support throughout the entire project, demonstrating consistent professionalism and commitment. Her dedication, communication, and efficiency greatly contributed to successful results overall.",
    name: "Ayesha's Client",
    role: "Web Development Project",
    rating: 5,
  },
  {
    quote: "I had the privilege of collaborating with Maryam as my lead generation mentor, and she truly excels in this domain. Her knowledge is exceptional, offering impactful direction and valuable support throughout the workflow.",
    name: "Maryam's Client",
    role: "Lead Generation",
    rating: 5,
  },
  {
    quote: "Great experience working with Ahmad. Very cooperative, clear in communication, and easy to work with. The project went smoothly, and I appreciate the opportunity to collaborate. Would be happy to work together again in the future.",
    name: "Ahmad's Client",
    role: "Digital Marketing",
    rating: 5,
  },
  {
    quote: "Fast, reliable, and very professional service. We required exact replicas of multiple landing pages, and they were delivered precisely as promised. Highly recommend working with Ayesha.",
    name: "Landing Page Client",
    role: "UI/UX Design",
    rating: 5,
  },
  {
    quote: "She was professional, responsive, and highly skilled. I will definitely hire her again for future projects and highly recommend them to anyone looking for WordPress design work.",
    name: "WordPress Client",
    role: "WordPress Development",
    rating: 5,
  },
  {
    quote: "Excellent work delivered on time with consistent professionalism and attention to detail. The entire collaboration process was smooth, communication was clear, and expectations were fully met. Truly appreciated the effort and would gladly work together again.",
    name: "Satisfied Client",
    role: "Full-Stack Development",
    rating: 5,
  },
  {
    quote: "I have had a fantastic experience working with Ayesha. She is patient and reliable, and I would definitely love to work with her again in the future. She was always available to help with her positive energy. I highly recommend her for Projects.",
    name: "Return Client",
    role: "Project Management",
    rating: 5,
  },
  {
    quote: "Ayesha is truly outstanding and consistently goes above and beyond expectations. She delivers work quickly while maintaining strong attention to detail and clear communication throughout the entire process. Her collaboration is smooth and productive.",
    name: "Long-term Client",
    role: "Digital Solutions",
    rating: 5,
  },
  {
    quote: "I had the pleasure of working with Maryam Naz on a data entry project involving the transfer of information from an Excel sheet to my website. From beginning to end, she demonstrated strong professionalism, efficiency, and remarkable attention to detail.",
    name: "Data Project Client",
    role: "Data Management",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={ref} className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="subheading-luxury text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)]"
          >
            Hear from our <span className="text-gradient">happy clients</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 h-16 w-16 text-[var(--primary)]/10" />

            {/* Content */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl text-[var(--foreground)] leading-relaxed mb-8 max-w-3xl mx-auto">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-brand flex items-center justify-center text-white font-display font-bold text-xl">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-display font-semibold text-[var(--foreground)]">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{currentTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-[var(--primary)]/30 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-[var(--foreground)]" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-6 bg-gradient-brand"
                        : "w-2 bg-[var(--muted)]/30 hover:bg-[var(--muted)]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-[var(--primary)]/30 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-[var(--foreground)]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
