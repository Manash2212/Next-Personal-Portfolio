/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--roboto)"],
        lemon: ["var(--lemon)"],
      },
    },
  },
  plugins: [],
};
