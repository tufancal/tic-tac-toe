const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
 mode: "development",
 entry: {
  bundle: path.resolve(__dirname, "src/js/index.js"),
 },
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "[name].[contenthash].js",
  clean: true,
 },
 devtool: "source-map",
 devServer: {
  static: {
   directory: path.resolve(__dirname, "dist"),
  },
  port: 3000,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
 },
 module: {
  rules: [
   {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
   },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
     options: {
      presets: ["@babel/preset-env"],
     },
    },
   },
   {
    test: /\.(png|svg|jpe?g|gif)$/i,
    use: [
     {
      loader: "file-loader",
      options: {
       outputPath: "images",
      },
     },
    ],
   },
   {
    test: /\.(woff|woff2|ttf|otf|eot)$/i,
    use: [
     {
      loader: "file-loader",
      options: {
       outputPath: "fonts",
      },
     },
    ],
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   title: "Tic-Tac-Toe | Tufan Calisir",
   filename: "index.html",
   template: "src/template.html",
  }),
 ],
};
