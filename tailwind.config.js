/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "414px",
        sm: "640px",
        md: "800px",
        lg: "1000px",
        bg: "1150px",
        xlg: "1300px",
        xxl: "1500px",
        xxxl: "1585px",
        vlg: "1900px",
        "lg-max": { max: "960px" },
        xl: "1140px",
        "2xl": "1440px",
        "3xl": "1441px",
      },
      colors: {
        primary: {
          DEFAULT: "#0e162a",
          // 50: "#E9FFFF",
          // 75: "#C5F2F2",
          // 100: "#82C9C9",
          // 200: "#59B8B8",
          // 300: "#2FA6A6",
          400: "#0e162a",
          // 500: "#057B7B",
          // 600: "#046363",
          // 700: "#034A4A",
          // 800: "#023131",
          // 900: "#011E1E",
        },
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      addUtilities({
        ".title": {"@apply text-2xl font-bold pt-4": {}},
        ".sub-title": {"@apply text-xl": {}}
      })
    }
  ],
}

