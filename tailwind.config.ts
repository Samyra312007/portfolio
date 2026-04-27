import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a8ffe1",
        "primary-dim": "#00eabb",
        "primary-container": "#00fcca",
        secondary: "#ff51fa",
        "secondary-dim": "#ff51fa",
        "secondary-container": "#a900a9",
        tertiary: "#af88ff",
        surface: "#0e0e13",
        "surface-container-low": "#131319",
        "surface-container": "#19191f",
        "surface-container-high": "#1f1f26",
        "surface-container-highest": "#25252d",
        "on-surface": "#f9f5fd",
        "on-surface-variant": "#acaab1",
        outline: "#76747b",
        "outline-variant": "#48474d",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        scan: "scan 8s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        scan: {
          "0%": { top: "-10%" },
          "100%": { top: "110%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;