const path = require('path');

// const mod = process.env.NODE_ENV || "development";
/*
  if (process.env.NODE_ENV === "production") {
    mode = "production";
    // Temporary workaround for 'browserslist' bug that is being patched in the near future
    target = "browserslist";
  }
*/
/*
if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    })
  );
}
*/

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/'),
  },

  devtool: 'inline-source-map',

  devServer: {
    static: { directory: './dist' }, // It was contentBase: './dist' previously.
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // will use .babelrc
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.mjs',
      '.cjs',
      '.json',
      '.scss',
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
