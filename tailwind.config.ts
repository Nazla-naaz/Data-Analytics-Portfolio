import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        panel: "#111318",
        panel2: "#151822",
        border: "#22262F",
        accent: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          dim: "#1D4ED8"
        },
        mint: "#34D399",
        amber: "#FBBF24"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.35)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
export default config;
