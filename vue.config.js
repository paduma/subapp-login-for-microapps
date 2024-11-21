// const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9001;

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    hot: true,
    // disableHostCheck: true,
    port,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Koa 后端地址
        changeOrigin: true, // 修改源
        pathRewrite: { "^/api": "" }, // 重写路径
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      // jsonpFunction: `webpackJsonp_${name}`
    },
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      return definitions;
    });
  },
};
