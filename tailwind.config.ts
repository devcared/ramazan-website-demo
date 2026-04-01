import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep blue — from logo outer ring / hand
        primary: {
          DEFAULT: "#1B5C90",
          50:  "#E8F2FA",
          100: "#C5DCF0",
          200: "#8BBBE0",
          300: "#5199D1",
          400: "#2878BD",
          500: "#1B5C90",
          600: "#154A75",
          700: "#103858",
          800: "#0A263C",
          900: "#05131E",
        },
        // Teal green — from logo figures / heart fill
        accent: {
          DEFAULT: "#3EA898",
          hover:   "#309989",
          muted:   "#8DCFC6",
          light:   "#E6F6F4",
        },
        // Light blue-grey — section backgrounds
        surface: {
          DEFAULT: "#EBF5FD",
          dark:    "#D6EAF8",
        },
        // Very dark blue — footer
        deep: "#0C2E52",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card:      "0 4px 24px 0 rgba(27,92,144,0.08)",
        "card-lg": "0 8px 48px 0 rgba(27,92,144,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
