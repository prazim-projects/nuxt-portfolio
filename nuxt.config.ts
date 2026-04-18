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
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],

})
