"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth springs for cursor follower ring
  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    // Check if the device has a mouse/fine pointer
    const mediaQuery = window.matchMedia("(any-hover: hover)");
    
    const frameId = requestAnimationFrame(() => {
      setIsMobile(!mediaQuery.matches);
    });

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Mouse events
    const moveMouse = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Global delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".glass-card") ||
        target.closest(".glass-panel") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.style.cursor === "pointer";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveMouse, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [rawX, rawY, isVisible]);

  // Hide on mobile or before mouse moves
  if (isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Single Smooth Precision Dot */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.6 : isClicked ? 0.75 : 1,
          backgroundColor: isHovered ? "var(--secondary)" : "var(--primary)",
          boxShadow: isHovered
            ? "0 0 6px var(--secondary)"
            : "0 0 3px var(--primary)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute w-2.5 h-2.5 rounded-full pointer-events-none"
      />
    </div>
  );
}
