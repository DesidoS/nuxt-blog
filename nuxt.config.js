module.exports = {
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#409EFF' },

  css: ['element-ui/lib/theme-chalk/index.css', '@/theme/index.scss'],

  plugins: ['@/plugins/globals', '@/plugins/axios'],

  components: true,
  buildDir: 'server/nuxt',

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  env: {
    appName: 'Blog',
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
  },
}
