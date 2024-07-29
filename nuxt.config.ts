// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/style/main.css'],
  modules: [
    "vuetify-nuxt-module",
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': { target: 'http://localhost:3001', pathRewrite: {'^/api/': ''} }
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}