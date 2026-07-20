"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="font-display text-8xl font-bold tracking-tighter text-gradient">
          Oops
        </h1>
        <h2 className="font-sans text-2xl font-semibold text-[var(--foreground)]">
          Something went wrong!
        </h2>
        <p className="max-w-md text-[var(--muted)]">
          An unexpected error occurred. Please try resetting the page or contact support if the issue persists.
        </p>
        <div className="pt-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
          </button>
        </div>
      </motion.div>
    </div>
  );
}
