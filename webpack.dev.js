const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.export = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    watchFiles: ["./src/template.html"]
})