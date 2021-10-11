const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';// https://webpack.docschina.org/api/cli/#node-env

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
      }),
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
const getStyleFileLoaders = (preprocessor) => {
  const styleFileLoaders = [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader', // css生产环境抽离
    'css-loader',
  ];

  preprocessor && styleFileLoaders.push(preprocessor);// 预处理器

  return styleFileLoaders.concat({
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [['postcss-preset-env']],
      },
    },
  },
  {
    loader: 'px2rem-loader',
    options: {
      remUnit: 75,
      remPrecision: 5,
      exclude: /node_modules/,
    },
  });
};

module.exports = {
  getMPA,
  getStyleFileLoaders,
  isProd,
};
