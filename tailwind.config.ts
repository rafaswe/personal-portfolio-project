/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "22px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "32px",
      "5xl": "40px",
      "6xl": "48px",
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
    extend: {
      fontFamily: {
        murecho: ["var(--font-murecho)"],
        poppins: ["var(--font-poppins)"],
        mono: ["var(--font-share-tech-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Moved colors into extend
        primary: "#1f2428",
        secondary: "#24292e",
        quaternary: "#049D70",
        tertiary: "#f9826c",
        disabled: "#C1C1C1",
        background: "#FAFAFA",
        "green-dark": "#52D794",
        green: "#d7f484",
        white: "#ffffff",
        "price-bg": "#EFDBFF",
        "details-top": "#FFEBF2",
        "text-dark": "#4D4D4D",
      },
      screens: {
        xs: "350px",
        sm: "400px",
        md: "750px",
        lg: "950px",
        xl: "1140px",
        "2xl": "1536px",
      },
      zIndex: {
        100: "100",
      },
      container: {
        center: true,
        screens: {
          xs: "350px",
          sm: "380px",
          md: "750px",
          lg: "950px",
          xl: "1140px",
        },
      },
      keyframes: {
        shake: {
          "0%": { "margin-left": "0rem" },
          "25%": { "margin-left": "0.5rem " },
          "75%": { "margin-left": "-0.5rem" },
          "100%": { "margin-left": "0rem" },
        },
        inAnimation: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        shake: "shake 0.2s ease-in-out 0s 2",
        inAnimation: "inAnimation .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
