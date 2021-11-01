module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'https://ljudio-backend-ame.herokuapp.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}