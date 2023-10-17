/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/oppfolgingsplan-lps-demo",
    pageExtensions: ["page.tsx", "page.ts", "page.js", "api.ts"],
    output: "standalone",
    productionBrowserSourceMaps: true,
}

module.exports = nextConfig
