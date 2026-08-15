# AGENTS.md

## Project Overview

This repository is the personal website for John Spurling. Keep the site concise, polished, and easy to evolve as real biography, project, writing, and contact details are added.

## Stack

- Vinext app with React, TypeScript, Tailwind CSS, and the OpenAI Sites Vite plugin.
- Source lives primarily in `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`.
- Hosting configuration lives in `.openai/hosting.json`.

## Local Commands

Use the bundled Codex runtime when the default shell does not expose Node:

```bash
env PATH="/Users/johnspurling/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/johnspurling/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:/Users/johnspurling/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override:$PATH" pnpm run dev
```

Common checks:

```bash
pnpm run build
pnpm test
pnpm run lint
```

## Site Direction

- Treat "John Spurling" as the primary brand signal in the first viewport.
- Do not invent detailed biography, credentials, employers, publications, or social links.
- Prefer precise placeholder language that is easy to replace with John's real copy.
- Keep the visual language quiet, editorial, and practical rather than generic SaaS or decorative portfolio chrome.
- Use responsive layouts that preserve readable text and stable spacing on mobile.

## Coding Notes

- Prefer small, focused edits over framework changes.
- Keep public-facing metadata aligned with the visible page.
- Run `pnpm run build` after meaningful source edits.
