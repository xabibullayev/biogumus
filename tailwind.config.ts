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
        headerBg: "url('/images/header/header-bg.png')",
        bannerBg: "url('/images/banner.png')",
      },

      backgroundColor: {
        bannerBgAlpa: "rgba(0,0,0, 0.5)",
        bgGray: "#D9D9D9",
      },

      colors: {
        green: "#39B508",
        greenlight: "rgba(57, 181, 8, 0.28)",
        greened: "#C8F3B6",
        gray: "#EBEBEB",
      },

      boxShadow: {
        navbar: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};
export default config;
