import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1920px",
        "cxl": "1325px",
        "clg": "1063px",
        "mb": "512px",
        "hb": { raw: "(max-height: 760px) and (min-height:550px) and (min-width:768px) and (max-width:1300px)" },
      },
    },
  },
  plugins: [],
};
export default config;
