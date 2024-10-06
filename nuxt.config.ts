// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt'],
  colorMode: {
    preference: 'dark',
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      baseUrl: process.env.BASE_URL,
    },
  },
  routeRules: {
    '/cart': { ssr: false },
    '/admin/**': { ssr: false, appMiddleware: 'auth' },
    '/admin/manage': { redirect: '/admin/manage/product' },
  },
});
