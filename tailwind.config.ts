import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061234",
          900: "#081B49",
          800: "#0C2764",
          700: "#133A91"
        },
        brand: {
          blue: "#1457D9",
          purple: "#4F3B88",
          purpleDark: "#352468",
          lavender: "#F3F0FF",
          soft: "#EEF4FF",
          line: "#DDE6F8"
        },
        gold: {
          50: "#FFF8E6",
          100: "#F8E7AE",
          300: "#E7C85A",
          500: "#C8941D",
          700: "#8B5E10"
        },
        ink: "#121826",
        muted: "#667085"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(8, 27, 73, 0.12)",
        card: "0 14px 34px rgba(8, 27, 73, 0.08)",
        glow: "0 20px 70px rgba(79, 59, 136, 0.18)",
        gold: "0 18px 50px rgba(200, 148, 29, 0.28)"
      },
      borderRadius: {
        card: "1.4rem"
      }
    }
  },
  plugins: []
};

export default config;
