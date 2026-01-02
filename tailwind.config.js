/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        yiro: {
          dark: "#20201E",
          green: "#3AAA35",
          card: "#121212",
          text: "#FFFFFF",
          muted: "#B3B3B3",
          border: "rgba(255,255,255,0.08)"
        }
      }
    }
  },
  plugins: []
};
