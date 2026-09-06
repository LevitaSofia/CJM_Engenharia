<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Base44 development environment

- Run the app with `docker compose -f docker-compose.base44.yml up -d`.
- The source is bind-mounted and served by the Next.js development server on port 3000.
- `BASE44_PUBLIC_HOST_SUFFIX` is used to permit the changing preview origin for Next.js development assets and HMR.
- No external services, migrations, seeds, or credentials are required.
- Verify locally with `curl http://localhost:3000/` and externally with a non-localhost `Host` header.
