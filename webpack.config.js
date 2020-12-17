var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://')
const publicUrl = `3000-${host}`

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        public: publicUrl
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html', base: publicUrl, publicPath: '/' })]
};