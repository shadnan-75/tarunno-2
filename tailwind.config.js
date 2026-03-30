/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tks-blue': '#2D3192',    // লোগোর নীল
        'tks-magenta': '#92278F', // লোগোর ম্যাজেন্টা
        'tks-red': '#ED1C24',     // লোগোর লাল
        'tks-orange': '#F7941D',  // লোগোর কমলা
        'tks-dark': '#1a1c4b',    // ব্যাকগ্রাউন্ডের জন্য ডার্ক ব্লু
      },
    },
  },
  plugins: [],
}