const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {

    let mode = 'development';
    if (env.mode === 'production') {
        mode = 'production'
    }

    return {
        mode,
        entry: './src/index.tsx',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        output: {
            filename: '[name].[chunkhash].js',
            assetModuleFilename: 'assets/[hash].[ext].[query]',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath: '/',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new MiniCssExtractPlugin(),
        ],
        devServer: {
            static: './dist',
            hot: true,
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
    }
};
