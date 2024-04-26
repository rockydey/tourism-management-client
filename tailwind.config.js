/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color1: "#F3F4F6",
      color2: "#004080",
      color3: "#FFD700",
      color4: "#FF7F50",
      color5: "#121212",
      color6: "#0F172A",
      color7: "#334155",
      color8: "#E5E7EB",
    },
    fontFamily: {
      gothic: '"Gothic A1", sans-serif',
      raleway: '"Raleway", sans-serif',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
