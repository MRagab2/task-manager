/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        accent: '#ab8bff',
        secondary: '#8ec1fa',

        light:{
          100: '#D6C6FF',
          200: '#9e9e9eff',
          300: '#878788ff',
        },
        dark: {
          100: '#221F3D',
          200:' #0F0D23'
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