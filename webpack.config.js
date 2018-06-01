const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: {
    index: resolve(__dirname, "./simple_vue/index.js")
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: resolve(__dirname, "./simple_vue")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve(__dirname, "./simple_vue/index.tpl.html")
    }),
    // 实际的模块热加载，其实需要我们自己在前端写代码去定义的，这里 vue-loader 帮我们解决了
    new webpack.HotModuleReplacementPlugin(), // 模块热替换插件
    new webpack.NoEmitOnErrorsPlugin() // 编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段
  ],
  resolve: {
    extensions: [".js"],
    modules: [
      // 指定当前目录下的 node_modules 优先查找
      resolve(__dirname, "node_modules")
    ]
  },
  // 代码与编译代码，浏览器调试，定位错误；映射
  devtool: "#cheap-module-eval-source-map",
  // 本地服务
  devServer: {
    port: 8000, // 端口
    host: "0.0.0.0", // http://127.0.0.1 或者 内网本机IP，这样别人也能访问
    overlay: {
      // webpack 编译过程中出现错误都显示再网页上
      errors: true
    },
    // historyFallback: {}, // 访问地址不识别的时候，映射到 index
    open: true, // 打开浏览器窗口
    hot: true // 热更新， 组件修改，只更新组件
  }
};
