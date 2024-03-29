/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#357266',
        'dark-primary': "#1e4039",
        'light-primary': '#53b3a0',
        'accent': '#53dd6c',
        'p-black': '#040f0f',
        'cloud-white': '#f4f4f9',
        'lime': '#53dd6c',
        'dark-green': '#1e4039',
        'border-gray': '#cac4d0'

      }
    },
  },
  plugins: [],
}

