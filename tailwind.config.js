/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      none: "0px",
      DEFAULT: "0px",
      sm: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "0px"
    },
    boxShadow: {
      none: "none",
      DEFAULT: "none",
      sm: "none",
      md: "none",
      lg: "none",
      xl: "none",
      "2xl": "none",
      inner: "none"
    },
    extend: {
      colors: {
        surface: {
          primary: "var(--surface-bg-primary)",
          secondary: "var(--surface-card-secondary)"
        },
        brand: {
          primary: "var(--brand-primary-default)",
          accent: "var(--brand-accent-highlight)",
          sub: "var(--brand-accent-secondary)"
        },
        content: {
          primary: "var(--text-primary-body)",
          inverse: "var(--text-on-brand-inverse)"
        },
        option1: {
          bg: "#F6F0E4",
          brand: "#8F2929",
          accent: "#C29A50",
          dark: "#292723",
          light: "#E5DCCB"
        },
        option2: {
          bg: "#F1F0E5",
          brand: "#566447",
          accent: "#B9A16A",
          dark: "#292E27",
          light: "#DADCCF"
        },
        option3: {
          bg: "#F3F7FA",
          brand: "#356B91",
          accent: "#D7AD45",
          sub: "#B9574B",
          dark: "#263541",
          light: "#DCE6ED"
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Be Vietnam Pro", "Merriweather", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};
