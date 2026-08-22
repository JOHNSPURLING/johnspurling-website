import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

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

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the John Spurling homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>John Spurling \| Maths, Behaviour, AI and Teacher Resources<\/title>/i);
  assert.match(html, /John Spurling/);
  assert.match(html, /Maths teacher, school leader and creator/);
  assert.match(html, /Practical support for the real work of teaching/);
  assert.match(html, /AI &amp; Tech|AI & Tech/);
  assert.match(html, /Maths Resources|Maths Resources/);
  assert.match(html, /href="\/leadership"/);
  assert.match(html, /href="\/blog"/);
  assert.match(html, /johnspurling\.co\.uk/);
  assert.match(html, /\/og\.png/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/behaviour"/);
  assert.match(html, /href="\/ai-tech"/);
  assert.match(html, /href="\/tools"/);
  assert.match(html, /href="\/maths-resources"/);
  assert.match(html, /href="\/media"/);
  assert.match(html, /href="\/contact"/);
  assert.doesNotMatch(html, /href="\/videos"/);
  assert.doesNotMatch(html, /Main pathways|Featured work|About John/);
  assert.doesNotMatch(html, /johnspurling\.com|hello@johnspurling/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders every static route", async () => {
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /John Spurling/, route);
    assert.match(html, /href="\/"/, route);
    assert.match(html, /href="\/tools"/, route);
    assert.doesNotMatch(html, /johnspurling\.com|hello@johnspurling/i);
  }
});

test("keeps the homepage data-driven and starter preview removed", async () => {
  const [page, layout, data, exportScript, packageJson, agents] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/site-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../scripts/export-static.mjs", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../AGENTS.md", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.match(page, /Practical support for the real work of teaching/);
  assert.doesNotMatch(page, /PathwayGrid|featured work|About John/i);
  assert.match(data, /toolCards/);
  assert.match(data, /featuredVideos/);
  assert.match(data, /mediaChannels/);
  assert.match(data, /href: "\/about"/);
  assert.match(data, /href: "\/behaviour"/);
  assert.match(data, /href: "\/leadership"/);
  assert.match(data, /johnspurling\.co\.uk/);
  assert.match(exportScript, /"\/about"/);
  assert.match(exportScript, /"\/leadership"/);
  assert.match(exportScript, /"\/maths-resources"/);
  assert.match(exportScript, /"\/blog"/);
  assert.match(exportScript, /"\/contact"/);
  assert.match(packageJson, /build:static/);
  assert.match(packageJson, /scripts\/export-static\.mjs/);
  assert.doesNotMatch(data, /johnspurling\.com|hello@johnspurling/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(agents, /John Spurling/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
