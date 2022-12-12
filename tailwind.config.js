/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "active": "#8FCF8F",
         "bookmark-red": "#FA5959",
       }
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
      varela: ["Varela , sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}
