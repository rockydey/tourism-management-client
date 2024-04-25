/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color1: "#fff",
      color2: "#818181",
      color3: "#151515",
      color4: "#495057",
      color5: "#ffcc05",
      color6: "#c3c3c3",
      color7: "#FFFFF5",
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
