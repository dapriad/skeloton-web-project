// Importamos .env para que sea accesible
require('dotenv').config();

const path = require('path');

module.exports = {
    mode: process.env.MODE,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
