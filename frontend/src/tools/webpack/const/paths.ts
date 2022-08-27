import * as path from "path";

// Names
export const SRC_NAME = "src";
export const PUBLIC_NAME = "public";
export const HTML_NAME = "index.html";
export const TOOLS_NAME = "tools";
export const CONTAINERS_NAME = "containers";
export const STYLES_NAME = "styles";

// Alias
export const ROOT_PATH = path.resolve(__dirname, "../../../../.././");
export const FRONTEND_PATH = path.join(ROOT_PATH, "frontend");

export const SRC_PATH = path.join(FRONTEND_PATH, SRC_NAME);
export const PUBLIC_PATH = path.join(FRONTEND_PATH, PUBLIC_NAME);

export const TOOLS_PATH = path.join(SRC_PATH, TOOLS_NAME);
export const CONTAINERS_PATH = path.join(SRC_PATH, CONTAINERS_NAME);
export const STYLES_PATH = path.join(SRC_PATH, STYLES_NAME);

export const MODULES_NAME = "node_modules";
export const MODULES_PATH = path.join(ROOT_PATH, MODULES_NAME);

// Entry
export const ENTRY_NAME = "index.tsx";
export const ENTRY_PATH = `${SRC_PATH}/${ENTRY_NAME}`;

// Output
export const OUTPUT_NAME = "main.bundle.js";
export const OUTPUT_DIR_NAME = "build";
export const OUTPUT_PATH = path.resolve(FRONTEND_PATH, OUTPUT_DIR_NAME);
