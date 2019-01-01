module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '首页',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '~assets/icon/iconfont.css',
    'element-ui/lib/theme-chalk/index.css',
    'mavon-editor/dist/css/index.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      '~/plugins/element-ui',
      '~/plugins/mavon-editor',
      '~/plugins/chart'
    ],
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    '~/plugins/element-ui',
    {
      src: '~/plugins/chart',
      ssr: false
    },
    // '~/plugins/chart',
    {
      src: '~/plugins/mavon-editor',
      ssr: false
    }
  ]
}
