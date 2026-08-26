/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: '#C2185B', // Dark Pink/Magenta
          blue: '#0D47A1',    // Dark Blue
          green: '#004D40',   // Deep Green
          cream: '#FDFBF7',   // Background Cream color
        }
      },
    },
  },
  plugins: [],
};