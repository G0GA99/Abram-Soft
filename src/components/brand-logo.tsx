import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
  light?: boolean;
  isHeader?: boolean;
}

/**
 * AbramSoft's modular A is built from three connected paths: craft, code and growth.
 * The detached lime node references a connected system / AI signal.
 */
export function BrandLogo({ className, compact = false, light = false, isHeader = false }: BrandLogoProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-label="AbramSoft"
      style={isHeader ? { width: "180.844px", height: "52px", marginRight: "0px" } : undefined}
    >
      <svg
        aria-hidden="true"
        className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 filter drop-shadow-[0_4px_12px_rgba(27,176,128,0.25)] transition-all duration-500 hover:scale-110"
        style={isHeader ? { height: "62px", marginLeft: "0px", marginTop: "12px" } : undefined}
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

        {/* Glossy White Reflection Highlight on Outer Arch for realistic 3D Glassy Tube effect */}
        <path
          d="M 31 66 L 50 29.5 L 69 66"
          stroke="url(#whiteHighlight)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />

        {/* Glossy White Reflection Highlight on Crossbar */}
        <path
          d="M 41.5 50 L 58.5 50"
          stroke="url(#whiteHighlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Central tech hub core - adding a modern, glowing software element */}
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
        <div className="flex flex-col select-none">
          <span className="flex items-baseline font-display leading-none tracking-[0.05em]">
            <span className={cn("text-base sm:text-lg font-black tracking-wider transition-colors duration-300", light ? "text-white" : "text-[var(--foreground)]")}>ABRAM</span>
            <span className="text-base sm:text-lg font-black text-[var(--primary)] ml-0.5 tracking-wider">SOFT</span>
          </span>
          <span className={cn(
            isHeader
              ? "pl-0 -mt-[5px] text-[8.2px] leading-[8.2px] -ml-[3px] mr-0 mb-[3px] h-0 font-mono tracking-[0.025em] uppercase sm:pl-0 sm:-mt-[5px] sm:text-[8.2px] sm:leading-[8.2px] sm:-ml-[3px] sm:mr-0 sm:mb-[3px] sm:h-0"
              : "text-[5.5px] sm:text-[6.2px] font-mono tracking-[0.025em] uppercase mt-1 leading-none",
            light ? "text-white/50" : "text-[var(--foreground)]/50"
          )}>
            CRAFTING DIGITAL EXCELLENCE
          </span>
        </div>
      )}
    </div>
  );
}
