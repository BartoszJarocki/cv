const role = (name) => `oklch(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        border: role("rule"),
        input: role("rule"),
        ring: role("ink"),
        background: role("bg"),
        foreground: role("ink"),
        body: role("body"),
        primary: {
          DEFAULT: role("ink"),
          foreground: role("bg"),
        },
        secondary: {
          DEFAULT: role("wash"),
          foreground: role("ink"),
        },
        muted: {
          DEFAULT: role("wash"),
          foreground: role("faint"),
        },
        accent: {
          DEFAULT: role("wash"),
          foreground: role("ink"),
        },
        popover: {
          DEFAULT: role("bg"),
          foreground: role("ink"),
        },
        card: {
          DEFAULT: role("bg"),
          foreground: role("ink"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}