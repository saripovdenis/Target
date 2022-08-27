import { htmlPlugin } from "./html";
import { hmrPlugin } from "./hmr";
import { miniCssPlugin } from "./miniCss";

export const generalPlugins: Array<any> = [htmlPlugin, miniCssPlugin];
export const prodPlugins: Array<any> = generalPlugins.concat([]);
export const devPlugins: Array<any> = generalPlugins.concat([hmrPlugin]);
