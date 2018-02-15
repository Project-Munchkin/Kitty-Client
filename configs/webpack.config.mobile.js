const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path");

module.exports = {
    entry: {
        'bundle.mobile': path.resolve(process.cwd(), './src/client/mobile/js/')
    },

    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist/mobile/js')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0','react']
                    }
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['./dist/mobile/'], {
            root: process.cwd(),
            allowExternal: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV) || '"production"'
            }
        }),
        new CopyWebpackPlugin([
            {
                from : path.join(process.cwd(), './src/client/mobile/'),
                to : path.join(process.cwd(), './dist/mobile/'),
                ignore: ['js/**']
            },
        ])
    ],
    devServer: {
        hot: true,
        inline: true,
        host: 'localhost',
        disableHostCheck: true,
        port: 3000,
        open: false,
        contentBase: path.resolve(process.cwd(), './src/client/mobile'),
        publicPath: "/js",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
        // proxy: {
        //     "/user": {
        //         target: "tbd",
        //         changeOrigin: true
        //     }
        // }
    },
    devtool : 'inline-source-map'
};