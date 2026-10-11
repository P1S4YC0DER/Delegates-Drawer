/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode tokens
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        mint: 'var(--mint)',
        gold: 'var(--gold)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        // Dark mode helpers
        'surface-2': 'var(--surface-2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
