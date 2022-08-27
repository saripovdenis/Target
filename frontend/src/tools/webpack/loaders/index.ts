import { babelLoader } from "./babel";
import { tsLoader } from "./typescript";

export const rules: Array<any> = [babelLoader, tsLoader];
