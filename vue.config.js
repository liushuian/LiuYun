const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8080,
  //   open: false,
  //   proxy: {
  //     [process.env.VUE_APP_BASE_API]: {
  //       target: `http://localhost:8080`,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         ['^' + process.env.VUE_APP_BASE_API]: ''
  //       }
  //     }
  //   }
  // }
}