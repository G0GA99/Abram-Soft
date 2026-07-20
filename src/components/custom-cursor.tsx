"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    // Check if the device has a mouse/fine pointer
    const mediaQuery = window.matchMedia("(any-hover: hover)");
    
    // Defer setting state to avoid synchronous state triggers during component mount
    const frameId = requestAnimationFrame(() => {
      setIsMobile(!mediaQuery.matches);
    });

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Mouse events
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

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

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

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
  }, [mouseX, mouseY, isVisible]);

  // Hide on mobile or before mouse moves
  if (isMobile || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Inner Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.6 : isClicked ? 0.7 : 1,
          backgroundColor: isHovered ? "var(--secondary)" : "var(--primary)",
          boxShadow: isHovered
            ? "0 0 16px var(--secondary)"
            : "0 0 8px var(--primary)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="absolute w-2 h-2 rounded-full pointer-events-none"
      />

      {/* Click Pulse Ripple (instant burst) */}
      {isClicked && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.6, opacity: 0.8 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute w-8 h-8 rounded-full border-2 border-[var(--primary)] pointer-events-none"
        />
      )}
    </div>
  );
}
