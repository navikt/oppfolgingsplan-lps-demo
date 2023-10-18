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
      <body className="bg-bg-subtle">
        <main
          id="maincontent"
          role="main"
          className="flex min-h-screen flex-col items-center"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
