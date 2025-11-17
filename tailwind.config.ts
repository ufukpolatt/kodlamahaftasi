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
        background: "#F5F6FB",
        foreground: "#0F172A",
        codeweek: {
          primary: "#232f60", // Koyu mavi - Eyüboğlu mavisi
          secondary: "#de1e18", // Kırmızı - Eyüboğlu kırmızısı
          accent: "#ff4444", // Parlak kırmızı vurgu
          light: "#eef1ff", // Açık mavi
          muted: "#f9f2f2", // Açık kırmızı ton
          dark: "#151c3f", // Çok koyu mavi
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#de1e18", // Ana kırmızı
            600: "#c91a15",
            700: "#a81512",
            800: "#87100e",
            900: "#660b0a",
          },
          blue: {
            50: "#eef1ff",
            100: "#e0e5ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#232f60", // Ana mavi
            700: "#1e2751",
            800: "#151c3f",
            900: "#0f1428",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 35px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;

