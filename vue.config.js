// vue.config.js
module.exports = {
  // 设置公共路径
  publicPath: process.env.NODE_ENV === 'production' ? '/psychological/' : '/',
  
  // 配置 webpack
  chainWebpack: config => {
    // 支持 .mjs 文件
    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include
      .add(/node_modules/)
      .end()
      .type('javascript/auto')
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: ['@babel/preset-env'],
      });
  },

  // 配置开发服务器
  devServer: {
    // host: 'localhost', // 主机名
    port: 8080, // 端口号
    open: true, // 启动后自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://162.14.111.211:8091/', // 代理目标服务器
        changeOrigin: true, // 是否跨域
        pathRewrite: { '^/api': '' }, // 重写路径
      },
    },
  },
};
