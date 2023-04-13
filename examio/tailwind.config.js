/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        examioshadow: "0px 0px 4px rgba(246, 72, 198, 0.707965)",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    colors: {
      examiopurple: "#2C2767",
      lightColor: "#FDFDFD",
      buttonColor: "#F648C6",
      textColor: "#373333",
      hoverColor: "#D02BA3",
      transparent: "transparent",
    },
  },
  plugins: [],
};
