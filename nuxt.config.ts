// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // modules: ["vuetify-nuxt-module"],
  css: ["vuetify-nuxt-module", '@/assets/style/main.css'],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:3001', // Sizning API serveringiz URL manzili
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // localhost o'rniga barcha interfeyslardan kirish
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
})
