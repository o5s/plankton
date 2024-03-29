/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        move: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
          primary: "#001dac",
        },
      },
    ],
  },
};
