import { htmlPlugin } from "./html";
import { hmrPlugin } from "./hmr";

export const generalPlugins: Array<any> = [htmlPlugin];
export const prodPlugins: Array<any> = generalPlugins.concat([]);
export const devPlugins: Array<any> = generalPlugins.concat([hmrPlugin]);
