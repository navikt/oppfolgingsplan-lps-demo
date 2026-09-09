# oppfolgingsplan-lps-demo

Next.js App Router demo for LPS oppfølgingsplan. Owned by Team eSyfo (`navikt`).

## Source map

`src/app/` owns routes, `src/components/` UI, `src/server/` server-side requests, `src/dto/` contracts, and `src/text/` user-facing text. Deployment uses `nais-demo.yaml`; do not treat demo flows as production identity or access-control patterns.

## Commands

Use the pnpm version in `package.json` and the committed lockfile.
The scripts in `package.json` and existing CI define the build/test contract.

```sh
pnpm run dev
pnpm run lint
pnpm run build
# No test script is currently defined in package.json.
```

## Frontend conventions

- TypeScript and Aksel are the existing UI foundation; inspect package versions
  and nearby components before selecting APIs or patterns.
- Prefer Aksel components and semantic spacing/color tokens. Preserve responsive
  behavior, keyboard navigation, visible focus and accessible form errors.
- English code and comments; Norwegian user-facing text and established domain
  terms. Format numbers and dates with an explicit Norwegian locale.
- Cover changed application behavior, including loading, errors and empty
  states. Do not duplicate upstream Aksel component tests.
- Keep changes within the requested scope. New dependencies, custom layout
  conventions, and changes to authentication or data-fetching strategy need a
  resolved decision within the task.

## Runtime and data

The demo is deployed by `.github/workflows/build-and-deploy.yaml` using `nais-demo.yaml`. No application authentication package is declared in `package.json`; do not import assumptions from another frontend.
Never expose tokens, personal data or response payloads in logs, fixtures,
screenshots or committed documentation.

## Repository guidance

This repository owns its instructions, local specialists and issue/PR templates.
Update these files with verified repository facts when an authorized change
makes them stale. Shared agent roles and skills come from the selected
Grillmester plugin through nav-pilot; do not copy them into `.github/` or add a
file-sync workflow. Use the active client's catalog for exact callable IDs.

Keep temporary plans and scratch output out of version control. Put durable
repository documentation in the existing README or an appropriate `docs/`
page; preserve the established layout and keep current task state separate.
