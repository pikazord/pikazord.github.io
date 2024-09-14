import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#012340"
        },
        primary: {
          DEFAULT: "#025959",
        },
        secondary: {
          DEFAULT: "#027333"
        },
        tirtiary: {
          DEFAULT: "#03A63C"
        },
        quaternary: {
          DEFAULT: "#04D939"
        },
      },
    },
  },
  plugins: [],
};
export default config;
