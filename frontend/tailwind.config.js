/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Uses Tailwind's dark mode system
  theme: {
    extend: {
      screens: {
        smx: { min: "540px", max: "700px" }, // Custom breakpoint
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
    base: true,
  },
}