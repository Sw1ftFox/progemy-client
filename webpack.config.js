const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  let mode = "development";
  if (env.mode === "production") {
    mode = "production";
  }

  return {
    mode,
    entry: "./src/index.tsx",
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, "src/assets/"),
        AssetsFonts: path.resolve(__dirname, "src/assets/fonts/"),
        AssetsIcons: path.resolve(__dirname, "src/assets/icons/"),
        AssetsImages: path.resolve(__dirname, "src/assets/images/"),
        Pages: path.resolve(__dirname, "src/pages/"),
        Shared: path.resolve(__dirname, "src/shared/"),
        SharedModel: path.resolve(__dirname, "src/shared/model/"),
        SharedUi: path.resolve(__dirname, "src/shared/ui/"),
        Widgets: path.resolve(__dirname, "src/widgets/"),
      },
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    },
    output: {
      filename: "[name].[chunkhash].js",
      assetModuleFilename: "assets/[hash].[ext].[query]",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      static: "./dist",
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          type: "asset/resource",
          generator: {
            filename: "assets/[hash][ext][query]",
          },
        },
      ],
    },
  };
};
