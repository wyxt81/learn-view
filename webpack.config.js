const htmlWepackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const { HotModuleReplacementPlugin } = require('webpack');

const result = fs.readdirSync(path.resolve(__dirname, 'src')).filter(item => item !== '.DS_Store');

const entry = {};

result.forEach(item => {
    entry[item] = `./src/${item}/index.ts`;
});

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: entry,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        ...result.map(item => new htmlWepackPlugin({
            filename: `./${item}.html`,
            template: `./src/${item}/index.html`,
            chunks: [item]
        })),
        new HotModuleReplacementPlugin({
            // Options...
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts|\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/env'],
                            ['@babel/preset-typescript']
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'utils': path.resolve(__dirname, "utils"),
        }
    },
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true
    }
}