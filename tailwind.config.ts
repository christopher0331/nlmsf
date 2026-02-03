import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "report-display": ["var(--font-report-display)", "Fraunces", "Georgia", "serif"],
      },
      keyframes: {
        "hero-bounce": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-5px)" },
        },
        "report-2023-float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        heroGlow: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(180deg) scale(1.1)" },
        },
      },
      animation: {
        "hero-bounce": "hero-bounce 1.5s ease-in-out infinite",
        "report-2023-float": "report-2023-float 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "hero-glow": "heroGlow 8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
} satisfies Config;
