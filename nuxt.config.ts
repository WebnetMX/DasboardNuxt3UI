// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@webnet-mx/ui-layer-admin"],
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },

  routeRules: {
    '/admin/**': { isr: true },
  }
})
