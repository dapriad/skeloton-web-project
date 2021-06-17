// Importamos .env para que sea accesible
require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.MODE,
    entry: {
        index: {
            import: './src/index.js'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    devtool: 'inline-source-map', // For debug mode
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: ['style-loader', 'css-loader', {
                    loader: "sass-loader",
                    options: {
                        // Prefer `dart-sass`
                        implementation: require.resolve("sass"),
                    }
                }],
            },
        ],
    }
}
