/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        discordprimary: '#7289da',
        discordsecondary: '#424549',
        discordtertiary: '#36393e',
        discordquaternary: '#282b30',
        discordquinary: '#1e2124',
    },
  },
  plugins: [],
}
}
