import { ReactElement } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

const root = createRoot(container);

export const renderApp = (el: ReactElement) => root.render(el);
