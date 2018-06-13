const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
 css:[
  '@/node_modules/uikit/dist/css/uikit.min.css',
  '@/node_modules/ag-grid/dist/styles/ag-grid.css',
  '@/node_modules/ag-grid/dist/styles/ag-theme-balham.css'
],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  { src: '~/plugins/agGrid.js', ssr: false},
  { src: '~/plugins/uikit.js', ssr: false }
],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    cssSourceMap: false,
    vendor: [
      '~/plugins/agGrid.js',
      '~/plugins/uikit.js'
    ],
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }

}
