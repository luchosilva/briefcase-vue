export default defineNuxtConfig({
  runtimeConfig: {
    auth: {
      name: 'nuxt-session',
      password: process.env.NUXT_AUTH_PASSWORD ?? '',
    },
  },
  nitro: {
    storage: {
      '.data:auth': { driver: 'fs', base: './.data/auth' },
    },
  },
  imports: {
    dirs: ['./stores'],
  },
})
