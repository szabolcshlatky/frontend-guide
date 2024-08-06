const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // entry not required if using `src/index.js` default
  // output not required if using `dist/main.js` default
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets/'),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.STATS || "disabled",
    }),
    new CleanWebpackPlugin(),
  ],

  devtool: 'inline-source-map',

  devServer: {
    static: { directory: './dist' }, // It was contentBase: './dist' previously.
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /**
         * The `type` setting replaces the need for "url-loader"
         * and "file-loader" in Webpack 5.
         *
         * setting `type` to "asset" will automatically pick between
         * outputing images to a file, or inlining them in the bundle as base64
         * with a default max inline size of 8kb
         */
        type: "asset",

        /**
         * If you want to inline larger images, you can set
         * a custom `maxSize` for inline like so:
         */
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
    ],
  },

  resolve: {
    extensions: [
      '.js',
      '.mjs',
      '.cjs',
      '.json',
      '.html',
      '.css',
      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.ico',
      '.svg',
    ],
  },
};
