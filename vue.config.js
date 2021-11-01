module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://ljudio-ame.netlify.app',
        ws: true,
        changeOrigin: true
      }
    }
  }
}