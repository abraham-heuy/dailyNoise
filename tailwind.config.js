/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'serif': ['Times New Roman', 'Georgia', 'serif'],
          'newspaper': ['Times New Roman', 'serif'],
          'chaos': ['Comic Sans MS', 'cursive'], // for those chaotic moments
        },
        colors: {
          'newspaper': '#ffffff',
          'ink': '#111111',
          'chaos-yellow': '#ffd966',
          'chaos-pink': '#ffb3ba',
          'chaos-blue': '#bae1ff',
        }
      },
    },
    plugins: [],
  }