const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      publicPath: '/',
      template: './public/index.html',
      filename: './index.html',
      inject: false,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      'crypto-browserify': require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|webp)$/,
        // use: ['file-loader'],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
    ],
  },
  target: 'web',
}

// const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports = {
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'index.bundle.js',
//   },
//   devServer: {
//     port: 3010,
//     watchContentBase: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
// }
