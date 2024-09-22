/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mgreen: {
          DEFAULT: "#57CB4C",
          50: "#DDF4DA",
          100: "#CEF0CA",
          200: "#B0E7AB",
          300: "#92DD8B",
          400: "#75D46C",
          500: "#57CB4C",
          600: "#3DAD32",
          700: "#2D8126",
          800: "#1E5619",
          900: "#0F2A0C",
          950: "#071506",
        },
      },
    },
  },
  plugins: [],
};
