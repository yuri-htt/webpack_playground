const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    pageOne: './src/pageOne.js',
    pageTwo: './src/pageTwo.js'
  },

  devServer: {
    openPage: "index.html",
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename:'main.[contenthash].css' }),
    new VueLoaderPlugin()
  ],

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }, {
      test: /.(scss|css)$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: "style-loader"
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
    }
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false
    }
  }
}