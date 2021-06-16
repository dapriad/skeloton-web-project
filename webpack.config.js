// Importamos .env para que sea accesible
require('dotenv').config();

const path = require('path');

module.exports = {
    mode: process.env.MODE,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        // SASS Rules
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        }
                    }
                ],
            },
        ],
        // CSS RULES
        // rules: [
        //     {
        //         test: /\.css$/i,
        //         use: ['style-loader', 'css-loader', 'sass-loader'],
        //     },
        // ],
    },
}
