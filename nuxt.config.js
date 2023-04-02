export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nut',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vueD3.js', ssr: false },
  { src: '@/plugins/vue-apexchart.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-lodash"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
       postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  } ,
   buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  css: [
    '@/assets/main.css',
  ],
}
