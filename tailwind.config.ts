import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#3b82f6",
              textDecoration: "underline",
              "&:hover": {
                color: "#2563eb",
              },
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
            },
            pre: {
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            blockquote: {
              borderLeftColor: "#3b82f6",
              fontStyle: "italic",
              color: "#475569",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
