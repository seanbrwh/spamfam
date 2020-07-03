const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = (env) => ({
  entry: { "react-app": "./src/client/index.tsx" },
  output: {
    path: __dirname + "/dist/static/",
    filename: env.LOCAL === "true" ? "[name].js" : "[name].[hash].js",
    publicPath: env.PUBLIC_PATH || "./static/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: env.LOCAL ? "[path][name].[ext]" : "[contenthash].[ext]",
          publicPath: env.PUBLIC_PATH || "/dist/server/public/assets",
        },
      },
    ],
  },
  devtool: "sourcemap",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    index: "index.html",
    port: 3010,
    host: "0.0.0.0",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    writeToDisk: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: env && env.analyze ? "server" : "disabled",
    }),
    new ManifestPlugin(),
  ],
});
