import { babelLoader } from "./babel";
import { tsLoader } from "./typescript";
import { miniCssLoader } from "./miniCss";

export const rules: Array<any> = [babelLoader, tsLoader, miniCssLoader];
