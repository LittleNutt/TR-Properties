import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#080808",
        ink: "#171717",
        ember: "#C8A84B",
        goldDeep: "#7A5914",
        mist: "#F4F4F2"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0, 0, 0, 0.14)",
        lift: "0 24px 70px rgba(200, 168, 75, 0.2)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
