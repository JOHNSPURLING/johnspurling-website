import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /<title>John Spurling \| Education, Behaviour, AI, Tools and Media<\/title>/i);
  assert.match(html, /John Spurling/);
  assert.match(html, /Education/);
  assert.match(html, /Classroom behaviour/);
  assert.match(html, /AI &amp; Tech|AI & Tech/);
  assert.match(html, /Tools &amp; Resources|Tools & Resources/);
  assert.match(html, /YouTube/);
  assert.match(html, /Spotify/);
  assert.match(html, /johnspurling\.co\.uk/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /johnspurling\.com|hello@johnspurling/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps the homepage data-driven and starter preview removed", async () => {
  const [page, layout, data, packageJson, agents] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/site-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../AGENTS.md", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.match(page, /ToolGrid/);
  assert.match(data, /toolCards/);
  assert.match(data, /featuredVideos/);
  assert.match(data, /mediaChannels/);
  assert.match(data, /johnspurling\.co\.uk/);
  assert.doesNotMatch(data, /johnspurling\.com|hello@johnspurling/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(agents, /John Spurling/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
