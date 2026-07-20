import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#08080A] px-4 text-center">
      <div className="space-y-6">
        <h1 className="font-display text-9xl font-bold tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-r from-[#1bb080] to-[#24d09b]">
          404
        </h1>
        <h2 className="font-sans text-2xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="max-w-md text-gray-400 mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1bb080] to-[#24d09b] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
