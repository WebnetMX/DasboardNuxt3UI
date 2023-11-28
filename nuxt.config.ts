// https://nuxt.com/docs/api/configuration/nuxt-config
import { pwa } from './config/pwa'
export default defineNuxtConfig({
  ssr: false,
  extends: ["@webnet-mx/ui-layer-admin"],
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',
    classPrefix: '',
  },

  pwa,
  app: {
    head: {
      htmlAttrs: {
        lang: "es-MX",
      },
      titleTemplate: "%s - Webnet",
      title: "Admin UI Layer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
    },
  }
})
