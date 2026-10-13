import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export function renderPortfolio() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
