import { LpsHeader } from "@/components/lpsheader/LpsHeader";
import { FormStateProvider } from "@/state/appState";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <head>
        <title>Oppfølgingsplan LPS</title>
        <meta name="description" content="Oppfølgingsplan" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[var(--ax-bg-neutral-soft)]">
        <LpsHeader />
        <main
          id="maincontent"
          // biome-ignore lint/a11y/noRedundantRoles: As expected, main role is needed for assistive technologies to skip header and nav when navigating to main content
          role="main"
          className="flex min-h-screen flex-col items-center"
        >
          <FormStateProvider>{children}</FormStateProvider>
        </main>
      </body>
    </html>
  );
}
