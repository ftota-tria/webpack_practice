const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let devtoolOption = "source-map";


if (process.env.NODE_ENV === "production") {
  mode = "production";
  devtoolOption = false;
}

module.exports = {
  mode: mode,

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]"
  },

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devtool: devtoolOption, // development only

  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true, //enables route change through url
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
