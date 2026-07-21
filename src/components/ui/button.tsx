import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "btn-gradient text-[var(--primary-foreground)] glow-subtle hover:glow-brand", 
        swipe: "btn-swipe-3d text-[var(--primary-foreground)]",
        swipeOutline: "btn-swipe-3d-outline text-[var(--foreground)]",
        secondary:
          "bg-[var(--glass)] border border-[var(--glass-border)] text-[var(--foreground)] hover:bg-[var(--card-hover)] hover:border-[var(--primary)]/30",
        ghost: "hover:bg-[var(--glass)] text-[var(--foreground)]",
        outline:
          "border-2 border-[var(--glass-border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--glass)] hover:border-[var(--primary)]/50",
        glassy: "btn-glassy-hover-theme text-[var(--foreground)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
