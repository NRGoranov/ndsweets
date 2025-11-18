import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        cream: {
          50: "#fefbf7",
          100: "#fbf4eb",
          200: "#f7e7d3",
        },
        cocoa: "#3b241c",
        raspberry: "#a7435d",
        champagne: "#e3c7a5",
        accent: "#c17f4b",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7e3b2b",
          foreground: "#fefaf4",
        },
        secondary: {
          DEFAULT: "#f3e6d9",
          foreground: "#5a433a",
        },
        muted: {
          DEFAULT: "#f4ede5",
          foreground: "#6f5a4f",
        },
        destructive: {
          DEFAULT: "#a13636",
          foreground: "#fff8f6",
        },
        card: {
          DEFAULT: "#fffdf8",
          foreground: "#3a2b1f",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.65rem",
        sm: "0.5rem",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 40px rgba(59, 36, 28, 0.08)",
      },
      keyframes: {
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;

