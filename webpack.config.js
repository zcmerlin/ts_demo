const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, 'dist'),
    environment: {
      arrowFunction: false,
      // const: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    "corejs": "3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  // mode: "development"
  mode: "production",
  devServer: {
    contentBase: './dist/',
    compress: true,
    hot: true
  }
}