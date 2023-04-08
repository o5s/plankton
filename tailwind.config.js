/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        move: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          primary: "#001dac",
        },
      },
    ],
  },
};
