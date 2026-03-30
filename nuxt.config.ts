export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/'
  },
  nitro: {
    preset: 'github-pages'
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/public/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],

})
