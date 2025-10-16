import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ondalis: {
          deep: "#02253b",
          navy: "#003755",
          ocean: "#007088",
          turquoise: "#00c5cb",
        },
      },
      fontFamily: {
        // Primary fonts
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],

        // Specific font families
        inter: ["Inter", "system-ui", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
        "source-sans": ["Source Sans 3", "system-ui", "sans-serif"],
        crimson: ["Crimson Text", "serif"],

        // Legacy support
        "dm-serif": ["DM Serif Display", "serif"],
      },
      fontSize: {
        // Modern typography scale
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],

        // Custom sizes for clinic branding
        hero: ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1" }],
        display: ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05" }],
        heading: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        subheading: ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.4" }],
        body: ["clamp(1rem, 1.5vw, 1.125rem)", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.4" }],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
