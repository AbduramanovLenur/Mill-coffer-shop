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
    '@/plugins/bem-classnames.js',
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
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
