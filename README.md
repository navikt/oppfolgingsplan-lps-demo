# Oppfølgingsplan Lps demo frontendapp

[![Build and deploy](https://github.com/navikt/oppfolgingsplan-lps-demo/actions/workflows/build-and-deploy.yaml/badge.svg)](https://github.com/navikt/oppfolgingsplan-lps-demo/actions/workflows/build-and-deploy.yaml) [![Biome](https://img.shields.io/badge/Biome-2.4.13-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![NAIS](https://img.shields.io/badge/NAIS-GCP%20%7C%20Kubernetes-005B82?logo=googlecloud&logoColor=white)](https://doc.nais.io/) [![Aksel](https://img.shields.io/badge/Aksel-v8-1F66FF?logo=nav&logoColor=white)](https://aksel.nav.no/)

Demo-applikasjon som viser hvordan en oppfølgingsplan sendes inn fra et lege-/praksiskonsultasjonssystem (LPS) til NAV. Appen simulerer flyten der behandlere fyller ut en oppfølgingsplan med arbeidssituasjon, tilrettelegging og oppfølgingsinfo, og sender den videre.

## Formålet med appen

Appen er en interaktiv demo for **team-esyfo** som viser LPS-integrasjonen for oppfølgingsplaner. Den er ikke en produksjonsapp, men brukes til å demonstrere og teste innsendingsflyten mot [lps-oppfolgingsplan-mottak](https://github.com/navikt/lps-oppfolgingsplan-mottak).

## Teknologier

**App**
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**UI og styling**
[![Aksel](https://img.shields.io/badge/Aksel-v8-1F66FF?logo=nav&logoColor=white)](https://aksel.nav.no/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7-EC5990?logo=reacthookform&logoColor=white)](https://react-hook-form.com/)

**Verktøy**
[![Biome](https://img.shields.io/badge/Biome-2.4.13-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev/) [![Lefthook](https://img.shields.io/badge/Lefthook-2.1.6-FF1E56)](https://github.com/evilmartians/lefthook)

**Integrasjon og plattform**
[![Axios](https://img.shields.io/badge/Axios-1.15.2-5A29E4)](https://axios-http.com/) [![@navikt/next-logger](https://img.shields.io/badge/next--logger-Pino-2F855A)](https://github.com/navikt/next-logger) [![NAIS](https://img.shields.io/badge/NAIS-GCP%20%7C%20Kubernetes-005B82?logo=googlecloud&logoColor=white)](https://doc.nais.io/)

## Kom i gang

### Forutsetninger

- [Node.js](https://nodejs.org/) 24
- [pnpm](https://pnpm.io/) 10

### Utvikling

```bash
pnpm install
pnpm run dev
```

Åpne [http://localhost:3000/oppfolgingsplan-lps](http://localhost:3000/oppfolgingsplan-lps) i nettleseren.

### Kommandoer

| Kommando          | Beskrivelse            |
| ----------------- | ---------------------- |
| `pnpm run dev`    | Start utviklingsserver |
| `pnpm run build`  | Bygg for produksjon    |
| `pnpm run lint`   | Kjør Biome linter      |
| `pnpm run format` | Sjekk formatering      |
| `pnpm run check`  | Kjør lint + format     |

## Backend-referanser

Appen kommuniserer med:

- **[lps-oppfolgingsplan-mottak](https://github.com/navikt/lps-oppfolgingsplan-mottak)** — mottar innsendte oppfølgingsplaner fra LPS-systemer

## Arkitektur

```mermaid
graph LR
    A[LPS Demo<br>Next.js] -->|POST oppfølgingsplan| B[lps-oppfolgingsplan-mottak]
```

## Miljø

| Miljø          | URL                                                 |
| -------------- | --------------------------------------------------- |
| Demo (dev-gcp) | https://demo.ekstern.dev.nav.no/oppfolgingsplan-lps |

## Kontakt

- **Team**: [team-esyfo](https://github.com/orgs/navikt/teams/team-esyfo)
- **Slack**: #team-esyfo
