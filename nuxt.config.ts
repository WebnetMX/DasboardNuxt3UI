// https://nuxt.com/docs/api/configuration/nuxt-config
import { pwa } from './config/pwa'
export default defineNuxtConfig({
  ssr: false,
  extends: ["@webnet-mx/ui-layer-admin"],
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],

  pwa,
})
