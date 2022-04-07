
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
        './src/index.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ],
              }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: true,
          })
        ],
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js'
    }

};
