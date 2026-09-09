# oppfolgingsplan-lps-demo

```sh
pnpm dev
pnpm lint
pnpm build
```

No test script is defined. Open `/oppfolgingsplan-lps` on the local server.

- This LPS showcase uses synthetic data and deploys only through
  `nais-demo.yaml`; its test-token flow is not production authentication.
- `/api/submit` obtains a test token from `lps-oppfolgingsplan-mottak` using
  server-only `username`/`password` environment variables, then submits the
  plan to that backend.
- The development redirect to `/kvittering` does not stop the subsequent
  POST. Local form submission still requires the reachable demo backend;
  it is not a mocked success path.
