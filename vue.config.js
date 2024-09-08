// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/psychological/'
    : '/',
    chainWebpack: config => {
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
    devServer: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8889", // 代理目标服务器
          changeOrigin: true, // 是否跨域
          // pathRewrite: { '^/api': '' }, // 重写路径
        },
      },
    },
  };
  