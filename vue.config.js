const webpack = require('webpack')
 
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}