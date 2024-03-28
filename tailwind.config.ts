import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
      },
      colors: {
        darkBg: "#212121",
        primary: "#0A4830",
        inputBg: "#B3B3B3"
      }
    },
  },
  plugins: [],
};
export default config;
