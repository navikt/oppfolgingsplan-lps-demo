import "./globals.css";
import {FormStateProvider} from "@/state/appState";
import {LpsHeader} from "@/components/lpsheader/LpsHeader";
import {fetchDecoratorReact} from "@navikt/nav-dekoratoren-moduler/ssr";
import Script from "next/script";

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const Decorator = await fetchDecoratorReact({
        env: "prod",
    });
    return (
        <html lang="no">
        <head>
            <Decorator.HeadAssets/>
        </head>
        <body className="bg-bg-subtle">
        <Decorator.Header/>
        <main
            id="maincontent"
            role="main"
            className="flex min-h-screen flex-col items-center"
        >
            <FormStateProvider>{children}</FormStateProvider>
        </main>
        <Decorator.Footer/>
        <Decorator.Scripts loader={Script}/>
        </body>
        </html>
    )
        ;
}
