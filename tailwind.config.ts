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
        cocoa: "#2f1b13",
        raspberry: "#8b344d",
        champagne: "#d8b48a",
        accent: "#b46a32",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5c2417",
          foreground: "#fff9f3",
        },
        secondary: {
          DEFAULT: "#ead3be",
          foreground: "#463026",
        },
        muted: {
          DEFAULT: "#efe4da",
          foreground: "#5a4439",
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

