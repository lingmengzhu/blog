const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { getMPA, getStyleFileLoaders } = require('./webpack.utils');

// 配置多页
const { entry, htmlWebpackPlugins } = getMPA();
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry,
    output: {
        publicPath: '/',
        filename: 'js/[name]_[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true, // 相当于CleanWebpackPlugin的作用
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.less'],
    },
    cache: {
        // 开启构建结果缓存
        type: isProd ? 'filesystem' : 'memory',
    },
    module: {
        rules: [
            // 使用babel-loader解析ts、js、tsx、jsx文件
            {
                test: /\.(jsx?|tsx?)$/,
                use: ['thread-loader', 'babel-loader'],
                exclude: /node_modules/,
            },
            // 解析css文件
            {
                test: /\.css$/,
                use: getStyleFileLoaders(),
            },
            {
                test: /\.scss$/,
                use: getStyleFileLoaders('sass-loader'),
            },
            {
                test: lessRegex,
                exclude: lessModuleRegex,
                use: getStyleFileLoaders('less-loader'),
            },
            {
                test: lessModuleRegex,
                use: getStyleFileLoaders('less-loader', true),
            },

            // 解析图片资源
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 10kb
                    },
                },
                generator: {
                    filename: 'img/[name][hash][ext][query]',
                },
            },
            // 解析图标资源
            {
                test: /\.svg$/,
                exclude: /^node_modules$/,
                include: [path.join(__dirname, '../src/assets/icons')],
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: 'icon-[name]',
                            extract: false,
                            spriteFilename: (svgPath) => `sprite${svgPath.substr(-4)}`,
                        },
                    },
                    {
                        loader: 'svgo-loader',
                        options: {},
                    },
                ],
            },
            // 解析字体资源
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        ...htmlWebpackPlugins,
        process.env.bundleReport === 'true' && new BundleAnalyzerPlugin(),
        new FriendlyErrorsPlugin(),
        new ESLintPlugin({
            extensions: ['ts', 'tsx', 'js'],
            failOnError: false,
        }),
    ].filter(Boolean),
    optimization: {
        splitChunks: {
            minSize: 5000,
            cacheGroups: {
                // react技术栈相关的
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                    name: 'reactVendor',
                    chunks: 'all',
                    priority: 1,
                },
                // node_modules
                defaultVendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'defaultVendor',
                    chunks: 'all',
                    // minChunks: 1,
                    priority: 0,
                },
            },
        },
    },
};
