import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: {
          DEFAULT: "#ffc300",
          dark: "#ffd71c",
        },
        customBlue: "#ebf9ff",
        customYellow: "#fff6e7",
        customPurple: "#eff0ff",
        customPink: "#fef2ff",
        customBlack: "#3a3a3a"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
