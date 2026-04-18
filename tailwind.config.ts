import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue',
  ],
  corePlugins: {
    // Disable Tailwind's CSS reset (Preflight) to prevent conflicts with Bootstrap's reboot
    preflight: false,
  },
} satisfies Config
