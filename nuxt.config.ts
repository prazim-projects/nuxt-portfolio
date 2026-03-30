// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/main.css',
  ],
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: '/'
  }
})
