/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #00CC99, #6600FF)",
        "about-custom": "linear-gradient(to right, #c9c4e6, #3dfcf1)",
      },
    },
  },
  plugins: [],
};
