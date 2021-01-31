const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.dev.js',
      'vue3$': 'vue3/dist/vue.esm-browser.js',
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
