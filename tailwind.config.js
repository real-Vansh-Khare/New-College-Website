/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightbg':'#D9E3F2',
        'bluegray':'#4F6483',
        'bluel':'#375F9B',
        'bluedark':'#1B2E4B',
      }
    },
  },
  plugins: [],
}

