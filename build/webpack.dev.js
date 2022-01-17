const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const proxy = require('../proxyTable');
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: '../dist',
        open: true,
        compress: true,
        port: 3010,
        hot: true,
        proxy,
    },
    plugins: [
        new ReactRefreshPlugin(), // 基于react官方react-refresh实现的HMR插件，作用类似之前社区的解决方案:react-hot-loader
    ],
};
