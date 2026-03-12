/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      /* ... your existing fontSize ... */
    },
    fontWeight: {
      /* ... your existing fontWeight ... */
    },
    extend: {
      fontFamily: {
        /* ... your existing fontFamily ... */
      },
      backgroundImage: {
        /* ... your existing backgroundImage ... */
      },
      colors: {
        // Your existing colors
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

        // ✅ Add these — maps CSS variables to Tailwind utility classes
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
      },
      // ... rest of your config
    },
  },
  plugins: [],
};
