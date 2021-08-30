module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  },
  NODE_ENV: process.env.NODE_ENV
}
