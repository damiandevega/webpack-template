const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "hello-world": "./src/hello-world.js",
        "kauai": "./src/kauai.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: ""
    },
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 9000,
            automaticNameDelimiter: "_"
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/env" ],
                        plugins: [ "transform-class-properties" ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    "handlebars-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CleanWebpackPlugin("dist"),
        new HtmlWebpackPlugin({
            filename: "hello-world.html",
            chunks: ["hello-world", "vendors~hello-world~kauai"],
            title: "Webpack Template",
            description: "webpack starting template code",
            template: "src/page-template.hbs",
        }),
        new HtmlWebpackPlugin({
            filename: "kauai.html",
            chunks: ["kauai", "vendors~hello-world~kauai"],
            title: "Kauai",
            description: "Kauai page",
            template: "src/page-template.hbs",
        })
    ]
}
