import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = resolve(projectRoot, "hostinger-static");
const clientDir = resolve(projectRoot, "dist/client");
const workerPath = new URL("../dist/server/index.js", import.meta.url);
const siteOrigin = "https://johnspurling.co.uk";
const routes = [
  "/",
  "/about",
  "/behaviour",
  "/leadership",
  "/ai-tech",
  "/tools",
  "/maths-resources",
  "/videos",
  "/media",
  "/blog",
  "/contact",
];

async function renderRoute(pathname) {
  workerPath.searchParams.set("static", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerPath.href);

  const response = await worker.fetch(
    new Request(new URL(pathname, siteOrigin), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (request) => {
          const url = new URL(request.url);
          try {
            const file = await readFile(resolve(clientDir, `.${url.pathname}`));
            return new Response(file);
          } catch {
            return new Response("Not found", { status: 404 });
          }
        },
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static render for ${pathname} failed with HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!/^text\/html\b/i.test(contentType)) {
    throw new Error(`Static render returned ${contentType || "no content type"}`);
  }

  return response.text();
}

async function writeRoute(pathname, html) {
  const routeDir = pathname === "/" ? outputDir : resolve(outputDir, `.${pathname}`);
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, "index.html"), html);
}

async function writeHostingerFallback() {
  await writeFile(
    resolve(outputDir, ".htaccess"),
    [
      "DirectoryIndex index.html",
      "",
      "<IfModule mod_rewrite.c>",
      "  RewriteEngine On",
      "  RewriteCond %{REQUEST_FILENAME} !-f",
      "  RewriteCond %{REQUEST_FILENAME} !-d",
      "  RewriteRule ^ index.html [L]",
      "</IfModule>",
      "",
      "<IfModule mod_headers.c>",
      "  <FilesMatch \"\\.(css|js|woff2|png|svg)$\">",
      "    Header set Cache-Control \"public, max-age=31536000, immutable\"",
      "  </FilesMatch>",
      "  <Files \"index.html\">",
      "    Header set Cache-Control \"no-cache\"",
      "  </Files>",
      "</IfModule>",
      "",
    ].join("\n"),
  );
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

for (const route of routes) {
  const html = await renderRoute(route);
  await writeRoute(route, html);
}

await writeHostingerFallback();

console.log(`Static website exported to ${outputDir}`);
console.log(`Rendered routes: ${routes.join(", ")}`);
