import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@navikt/ds-react"],
    turbopackFileSystemCacheForDev: true,
  },
  reactCompiler: true,
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
