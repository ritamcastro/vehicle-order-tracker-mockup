var HtmlWebPackPlugin = require("html-webpack-plugin")

var htmlWebPackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
    },
    plugins: [
        htmlWebPackPlugin
    ],
    devServer: {
        historyApiFallback: true,
        proxy: [{
            context: ["/auth", "/api", "/health"],
            target: "http://localhost:4000"
        }]
    }
}
