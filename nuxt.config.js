export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mill',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png",
        rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png",
        rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png",
        rel: "manifest", href: "/site.webmanifest"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/_variables.scss',
    '~assets/scss/_globals.scss',
    '~assets/scss/_fonts.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/aos.client.js",
    "@/plugins/bem-classnames.js",
    "@/plugins/map.js",
    "@/plugins/vee-validate.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ["vue-toastification/nuxt", {
      timeout: 2000,
      transitionDuration: {
        enter: 1000,
        leave: 3000
      },
      draggable: false,
      pauseOnHover: true,
    }],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            name: 'Ru',
            code: 'ru',
            file: 'ru.json',
          },
          {
            name: 'En',
            code: 'en',
            file: 'en.json',
          },
        ],
        defaultLocale: 'ru',
        langDir: 'locales/',
        lazy: true,
        detectBrowserLanguage: false
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vue2-google-maps",
      "vee-validate"
    ]
  }
}
