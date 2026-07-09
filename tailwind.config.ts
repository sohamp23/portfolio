import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#08060C",
          soft: "#0D0A14",
        },
        panel: "#130F1E",
        paper: "#F6F4FB",
        mist: "#9C94B3",
        signal: {
          50: "#F4F0FF",
          100: "#E6DBFF",
          200: "#CBB3FF",
          300: "#AE87FF",
          400: "#9B6BFF",
          500: "#8752F0",
          600: "#6E3ED6",
          700: "#4C2A85",
          800: "#3A2066",
          900: "#241340",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(135deg, #4C2A85 0%, #8752F0 45%, #CBB3FF 100%)",
        "signal-radial": "radial-gradient(circle, rgba(155,107,255,0.35) 0%, rgba(155,107,255,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(155,107,255,0.45)",
        "glow-sm": "0 0 20px -6px rgba(155,107,255,0.4)",
        "card-hover": "0 8px 40px -12px rgba(155,107,255,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(18px) translateX(-16px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float-slow 13s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
