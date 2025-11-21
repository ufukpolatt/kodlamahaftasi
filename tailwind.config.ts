import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#ffffff",
        codeweek: {
          primary: "#6366f1",
          secondary: "#a855f7",
          accent: "#ec4899",
          light: "#f8fafc",
          muted: "#1e293b",
          dark: "#0a0a0f",
          ai: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
          },
          pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
        display: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 35px rgba(99, 102, 241, 0.15)",
        glow: "0 0 20px rgba(168, 85, 247, 0.3)",
        "glow-lg": "0 0 40px rgba(168, 85, 247, 0.4)",
        "neon-purple": "0 0 15px rgba(168, 85, 247, 0.8)",
        "neon-pink": "0 0 15px rgba(236, 72, 153, 0.8)",
        "neon-blue": "0 0 15px rgba(99, 102, 241, 0.8)",
      },
      backgroundImage: {
        "ai-gradient": "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
        "ai-gradient-alt": "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, #6366f1 0px, transparent 50%), radial-gradient(at 80% 0%, #a855f7 0px, transparent 50%), radial-gradient(at 0% 50%, #ec4899 0px, transparent 50%)",
        "mesh-gradient-alt": "radial-gradient(at 20% 80%, #0ea5e9 0px, transparent 50%), radial-gradient(at 80% 20%, #6366f1 0px, transparent 50%), radial-gradient(at 40% 40%, #a855f7 0px, transparent 50%)",
        "grid-light":
          "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "neural-network": "radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "neural-pulse": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "scale(1)"
          },
          "50%": { 
            opacity: "0.8",
            transform: "scale(1.05)"
          },
        },
        "data-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        glitch: {
          "0%, 100%": { 
            transform: "translate(0)",
            filter: "hue-rotate(0deg)"
          },
          "20%": { 
            transform: "translate(-1px, 1px)",
            filter: "hue-rotate(90deg)"
          },
          "40%": { 
            transform: "translate(-1px, -1px)",
            filter: "hue-rotate(180deg)"
          },
          "60%": { 
            transform: "translate(1px, 1px)",
            filter: "hue-rotate(270deg)"
          },
          "80%": { 
            transform: "translate(1px, -1px)",
            filter: "hue-rotate(360deg)"
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "neural-pulse": "neural-pulse 4s ease-in-out infinite",
        "data-flow": "data-flow 15s linear infinite",
        glitch: "glitch 5s infinite",
      },
      backgroundSize: {
        "300%": "300%",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
