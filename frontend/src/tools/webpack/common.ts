import { Configuration } from "webpack";

import {} from "webpack-dev-server";

import {
  ENTRY_PATH,
  OUTPUT_NAME,
  OUTPUT_PATH,
  MODULES_NAME,
} from "./const/paths";
import { MODE, isDev } from "./const/mode";

import { rules } from "./loaders";
import { prodPlugins, devPlugins } from "./plugins";
import { alias } from "./alias";

export const config: Configuration = {
  mode: MODE,
  entry: ENTRY_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: OUTPUT_NAME,
  },
  module: {
    rules,
  },
  devServer: {
    compress: true,
    port: 8080,
  },
  devtool: "inline-source-map",
  plugins: isDev ? devPlugins : prodPlugins,
  resolve: {
    modules: [MODULES_NAME],
    fallback: { path: require.resolve("path-browserify") },
    alias,
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
