let webpackHtmlPlugin = require("html-webpack-plugin");
let path = require("path");

module.export = {
    entry: "src/index.js",
    output: {
        path : path.resolve(__dirname, dist),
        filename: "main.js",
        clean: true
    },
    module: {
        rules:[
            {
            test: /\.css/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.html/i,
            loader: "html-loader"
        },
        {
            test: /\.(png|jpeg|svg|webp)/i,
            type: "asset/resource"
        }
    ] 
    },
    plugins: [new webpackHtmlPlugin({template: "./src/template.html"})],
}

