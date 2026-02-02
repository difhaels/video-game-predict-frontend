/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#5A9CB5",
        "brand-yellow": "#FACE68",
        "brand-orange": "#FAAC68",
        "brand-red": "#FA6868",
      },
    },
  },
  plugins: [],
};
