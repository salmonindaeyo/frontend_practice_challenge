export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuttawat dev',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/aos@next/dist/aos.css',
        integrity: 'sha384-NwyCcPvM+yW8RnOfLMX9BYTtTvjUrSvOxSbO+ZdmzAdgnm4Dszv4Qpr4Rmwcl9Q2',
        crossorigin: 'anonymous'
      }
  
    ]
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vueD3.js', ssr: false },
  { src: '@/plugins/vue-apexchart.js', ssr: false },
  { src:  '@/plugins/aos.js', ssr: false }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-lodash",'nuxt-material-design-icons-iconfont'
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
    'material-icons/iconfont/material-icons.css',
    'material-symbols/index.css',
  ],
  server: {
    port: 8000 // default: 3000
  }
}
