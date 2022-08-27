// Mode
export const PRODUCTION = "production";
export const DEVELOPMENT = "development";
export const isDev = globalThis.process?.env?.NODE_ENV === DEVELOPMENT;
export const MODE: "production" | "development" | "none" = isDev
  ? DEVELOPMENT
  : PRODUCTION;
