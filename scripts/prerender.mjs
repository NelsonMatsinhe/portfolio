import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";

const vite = await createServer({
  configFile: resolve("vite.config.ts"),
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false, ws: false },
});

try {
  const { renderPortfolio } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const htmlPath = resolve("dist/index.html");
  const html = await readFile(htmlPath, "utf8");
  const root = /<div id="root"><\/div>/;

  if (!root.test(html)) throw new Error("Não foi encontrado o elemento #root vazio no HTML do build.");

  const markup = renderPortfolio().replace(/<link rel="preload"[^>]*\/>/g, "");
  await writeFile(htmlPath, html.replace(root, `<div id="root">${markup}</div>`));
} finally {
  await vite.close();
}
