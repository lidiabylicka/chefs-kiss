import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "540px" },
      sm: { max: "980px" },
      standard: { max: "1366px" },
      xl: "1367px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        aqua: "#097969",
        yellow: "#E4D00A",
        pink: "#dbbebb",
        grey: "#f5f5f5",
      },
      boxShadow: {
        "purple-shadow": "8px 2px 4px rgba(9, 121, 105, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      before: ["hover", "focus"],
      after: ["hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-pseudo-elements")],
};
export default config;
