/** @type {import('tailwindcss').Config} */
export default {
  content: ["./cypress/support/component-index.html", "./spec/auto/shadcn-defaults/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
