/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@navikt/ds-react"],
    turbopackFileSystemCacheForDev: true,
  },
  reactStrictMode: true,
  output: "standalone",
  basePath: "/oppfolgingsplan-lps",
  serverExternalPackages: [
    "pino",
    "pino-pretty",
    "thread-stream",
    "@navikt/next-logger",
    "@navikt/pino-logger",
  ],
};

export default nextConfig;
