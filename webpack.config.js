const htmlWepackPlugin = require('html-webpack-plugin');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        vec: './src/vec/index.ts',
        tree: './src/tree/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new htmlWepackPlugin({
            filename: './vec.html',
            template: './src/vec/index.html',
            chunks: ['vec']
        }),
        new htmlWepackPlugin({
            filename: './tree.html',
            template: './src/tree/index.html',
            chunks: ['tree']
        }),
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
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'utils': path.resolve(__dirname, "src/utils"),
        }
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true
    }
}