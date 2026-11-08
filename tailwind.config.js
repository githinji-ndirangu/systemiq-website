export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#0B0B0C', paper: '#F4F4F1', line: '#E4E4DF', accent: '#FF5B1F', mute: '#8A8A85' },
    fontFamily: { sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'] },
    letterSpacing: { tightest: '-0.045em' },
  } },
  plugins: [],
}
