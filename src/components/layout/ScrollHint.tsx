"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={handleClick}
          className="fixed bottom-10 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/50 bg-white/60 px-6 py-3 text-sm font-semibold text-primary shadow-soft backdrop-blur-lg"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex items-center gap-2">
            <span>Scroll to explore</span>
            <ChevronDown className="h-4 w-4 animate-scroll-hint" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

