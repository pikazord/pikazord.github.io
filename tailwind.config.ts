import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./views/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem"
      }
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "#9EFF00",
          60: '#B1FF33',
          70: "#C5FF66",
          80: "#D8FF99",
          90: "#ECFFCC",
          95: "#F5FFE5",
          97: "#F9FFF0",
          99: "#FDFFFA",
        },
        secondary: {
          DEFAULT: "#E6E6E6",
          60: "#98989A",
          40: "#656567",
          35: "#59595A",
          30: "#4C4C4D",
          20: "#333333",
          15: "#262626",
          10: "#191919"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      animation: {
        "slide-in-up": "fadeInSlideUp 1s cubic-bezier(0,0,0,1) forwards"
      },
      keyframes: {
        fadeInSlideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;
