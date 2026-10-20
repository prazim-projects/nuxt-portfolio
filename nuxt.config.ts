export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/bitmoji.svg' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages'
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  // Add '@nuxt/scripts' to your active modules array here
  modules: ['@nuxtjs/tailwindcss', '@nuxt/scripts'],
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-61WJGN61YF',
        trigger: 'onNuxtReady'
      }
    }
  }
})