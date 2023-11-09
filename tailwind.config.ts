import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/images/header/header-bg.png')",
      },

      colors: {
        green: "#39B508",
        greenlight: "rgba(57, 181, 8, 0.28)",
        greened: "#C8F3B6",
      },
    },
  },
  plugins: [],
};
export default config;
