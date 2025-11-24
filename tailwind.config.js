/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#8ec1fa',

        light:{
          100: '#878788',
          200: '#9e9e9e',
        }
      },
      fontFamily: {
        // font-<key>
        'caveat': ['Caveat'],
        'dancing-script': ['Dancing Script'],
        system: ['ui-sans-serif'],
      },
    },
  },
  plugins: [],
}