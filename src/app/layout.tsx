import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <title>Oppfølgingsplan LPS</title>
        <meta name="description" content="Oppfølgingsplan" />
        <link rel="icon" href="/favicon.ico" />
      </head>
        <body className="bg-bg-subtle">
        <main id="maincontent" role="main">
          {children}
        </main>
        </body>
      </html>
  )
}
