const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production'; // https://webpack.docschina.org/api/cli/#node-env

const getPageName = (filePath) => {
    const match = filePath.match(/src\/pages\/([^/]*)/);

    return match ? match[1] : null;
};

/**
 * 获取多页面打包的入口及htmlPlugin
 */
const getMPA = () => {
    const entryFiles = glob.sync(path.resolve(__dirname, '../src/pages/*/index.{ts,tsx}'));
    const entry = {};
    const htmlWebpackPlugins = [];

    entryFiles.forEach((filePath) => {
        const pageName = getPageName(filePath);

        if (!pageName) {
            throw new Error('多页的文件组织按“/src/pages/*/index.tsx”约定');
        }

        entry[pageName] = filePath;
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `../src/pages/${pageName}/index.html`),
                filename: `${pageName}.html`,
                inject: 'body',
                chunks: [pageName],
                minify: {
                    // html5:true,
                    minifyJS: true,
                },
            })
        );
    });

    return {
        entry,
        htmlWebpackPlugins,
    };
};

/**
 * 获取样式文件的loaders
 * @param {*} preprocessor 采用何种预处理器
 */
const getStyleFileLoaders = (preprocessor, module = false) => {
    const styleLoader = isProd ? MiniCssExtractPlugin.loader : 'style-loader';
    const cssLoader = module
        ? {
              loader: 'css-loader',
              options: {
                  modules: { localIdentName: '[hash:base64:6]' },
              },
          }
        : 'css-loader';
    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: ['postcss-preset-env'],
            },
        },
    };
    const styleFileLoaders = [
        styleLoader, // css生产环境抽离
        cssLoader,
        postcssLoader,
    ];

    preprocessor && styleFileLoaders.push(preprocessor); // 预处理器

    return styleFileLoaders;
};

module.exports = {
    getMPA,
    getStyleFileLoaders,
    isProd,
};
