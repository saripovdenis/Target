import HtmlWebpackPlugin from "html-webpack-plugin";
import { HTML_NAME, PUBLIC_PATH } from "../const/paths";

export const htmlPlugin = new HtmlWebpackPlugin({
  template: `${PUBLIC_PATH}/${HTML_NAME}`,
});
