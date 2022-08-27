import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const miniCssLoader = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};
