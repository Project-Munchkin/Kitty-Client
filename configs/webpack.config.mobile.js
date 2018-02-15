const webpack = require("webpack");
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV) || '"production"'
            }
        })
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