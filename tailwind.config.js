/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#628ECB",
        secondary: "2E2E2E",
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem"
        }
      }
    },
  },
  plugins: [],
}

