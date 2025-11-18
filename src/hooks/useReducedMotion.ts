"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);

      // Check if mobile
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  // Default to false during SSR to prevent hydration issues
  if (!mounted) {
    return { prefersReducedMotion: false, isMobile: false, shouldReduceMotion: false };
  }

  return { prefersReducedMotion, isMobile, shouldReduceMotion: prefersReducedMotion || isMobile };
}

