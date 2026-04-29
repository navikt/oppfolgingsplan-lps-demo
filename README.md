# Oppfølgingsplan Lps demofrontendapp

[![Build and deploy](https://github.com/navikt/oppfolgingsplan-lps-demo/actions/workflows/build-and-deploy.yaml/badge.svg)](https://github.com/navikt/oppfolgingsplan-lps-demo/actions/workflows/build-and-deploy.yaml) [![Biome](https://img.shields.io/badge/Biome-2.4.13-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![NAIS](https://img.shields.io/badge/NAIS-GCP%20%7C%20Kubernetes-005B82?logo=googlecloud&logoColor=white)](https://doc.nais.io/) [![Aksel](https://img.shields.io/badge/Aksel-v8-1F66FF?logo=nav&logoColor=white)](https://aksel.nav.no/)

Dette repoet er et showcase for LPS-leverandører som vil forstå hvordan oppfølgingsplaner kan sendes til NAV i praksis.

## Miljø

🎬 [Demo](https://demo.ekstern.dev.nav.no/oppfolgingsplan-lps)

## Formålet med appen

Appen er en referanseimplementasjon for LPS-leverandører. Den viser dataflyten for oppfølgingsplaner fra behandlerens utfylling i et LPS-system til innsending til NAV via [lps-oppfolgingsplan-mottak](https://github.com/navikt/lps-oppfolgingsplan-mottak).

Målet er å gjøre det enklere å forstå hvilke data som sendes, hvordan innsendingen fungerer i praksis, og hva en integrasjon mot NAV innebærer. Appen er en demo, ikke en produksjonsapp.

```mermaid
graph LR
    A[Behandler fyller ut<br>oppfølgingsplan i LPS] --> B[LPS Demo<br>referansefrontend]
    B -->|POST oppfølgingsplan| C[lps-oppfolgingsplan-mottak]
    C --> D[NAV]
```

## Backend-API

Appen kommuniserer med:

**[lps-oppfolgingsplan-mottak](https://github.com/navikt/lps-oppfolgingsplan-mottak)** — mottar innsendte oppfølgingsplaner fra LPS-systemer

## Utvikling (kjøre lokalt)

For å komme i gang med å bygge og kjøre appen, se vår [Wiki for frontendapper](https://navikt.github.io/team-esyfo/utvikling/frontend/).

Når appen er startet, åpne http://localhost:3000/oppfolgingsplan-lps

## For Nav-ansatte

Interne henvendelser kan sendes via Slack i kanalen [#esyfo](https://nav-it.slack.com/archives/C012X796B4L).
