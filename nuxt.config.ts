// https://nuxt.com/docs/api/configuration/nuxt-config

import Locales from "./locales";

const NUXT_PUBLIC_API_BASE = process.env.NUXT_PUBLIC_API_BASE;

export default defineNuxtConfig({
  ssr: true,
  spaLoadingTemplate: false,
  // devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: NUXT_PUBLIC_API_BASE,
    },
  },

  extends: ["./auth"],

  css: [
    "vue3-toastify/dist/index.css",
    "@/assets/css/main.css",
    "@/assets/css/calendar.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],

  i18n: {
    langDir: "locales/",
    locales: Locales,
    defaultLocale: "es",
    lazy: true,
  },

  imports: {
    dirs: ["./auth/stores"],
  },

  sourcemap: { server: true, client: true },

  nitro: {
    debug: true,
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
});
