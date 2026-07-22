import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
  light?: boolean;
  isHeader?: boolean;
}

/**
 * AbramSoft's modular logo: SVG monogram + wordmark + tagline.
 * Provides consistent rendering across header, footer, and mobile screens.
 */
export function BrandLogo({ className, compact = false, light = false, isHeader = false }: BrandLogoProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 shrink-0", className)}
      aria-label="AbramSoft"
    >
      {/* 3D Glassy "A" Monogram */}
      <svg
        aria-hidden="true"
        className="h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] md:h-[45px] md:w-[45px] mt-1.5 -mr-3 shrink-0 filter drop-shadow-[0_4px_12px_rgba(27,176,128,0.25)] transition-all duration-300 group-hover:scale-105"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sleek, Rounded Geometric "A" Arch Frame */}
        <path
          d="M 28 72 L 50 26 L 72 72"
          stroke="url(#glassyAFrame)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Floating Minimalist Rounded Crossbar */}
        <path
          d="M 39 52 L 61 52"
          stroke="url(#glassyCrossbar)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Glossy White Reflection Highlight on Outer Arch */}
        <path
          d="M 31 66 L 50 29.5 L 69 66"
          stroke="url(#whiteHighlight)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />

        {/* Glossy White Reflection Highlight on Crossbar */}
        <path
          d="M 41.5 50 L 58.5 50"
          stroke="url(#whiteHighlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Central tech hub core */}
        <circle
          cx="50"
          cy="42"
          r="3"
          fill="#ffffff"
          className="animate-pulse"
          style={{ transformOrigin: "center" }}
        />

        <defs>
          {/* Rich Electric-Emerald-to-Deep-Teal Glossy Gradient */}
          <linearGradient id="glassyAFrame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#24d09b" />
            <stop offset="40%" stopColor="#1bb080" />
            <stop offset="100%" stopColor="#0d6a4c" />
          </linearGradient>

          {/* Glowing Glossy Crossbar Gradient */}
          <linearGradient id="glassyCrossbar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2ee0a5" />
            <stop offset="100%" stopColor="#1bb080" />
          </linearGradient>

          {/* Premium White Light Reflection */}
          <linearGradient id="whiteHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {!compact && (
        <div className="flex flex-col select-none justify-center">
          <span className="flex items-baseline font-display leading-none tracking-[0.04em]">
            <span className={cn(
              "text-sm sm:text-base md:text-lg font-black tracking-wider transition-colors duration-300", 
              light ? "text-white" : "text-[var(--foreground)]"
            )}>
              ABRAM
            </span>
            <span className="text-sm sm:text-base md:text-lg font-black text-[var(--primary)] ml-0.5 tracking-wider">
              SOFT
            </span>
          </span>
          <span className={cn(
            "text-[7px] sm:text-[7.5px] md:text-[8px] font-mono tracking-[0.02em] sm:tracking-[0.04em] uppercase -mt-[5px] leading-none font-semibold whitespace-nowrap block",
            light ? "text-white/60" : "text-[var(--foreground)]/60"
          )}>
            CRAFTING DIGITAL EXCELLENCE
          </span>
        </div>
      )}
    </div>
  );
}

