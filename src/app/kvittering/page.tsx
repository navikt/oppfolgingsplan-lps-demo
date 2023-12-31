"use client";
import { BodyLong, GuidePanel, Heading } from "@navikt/ds-react";
import React from "react";
import { useGlobalState } from "@/state/appState";
// @ts-ignore
import { usePDF } from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import { PdfPlan } from "@/components/pdf/PdfPlan";
import { FilePdfIcon } from "@navikt/aksel-icons";

export default function Page() {
  const { globalFormState } = useGlobalState();
  const [instance, updateInstance] = usePDF({
    document: <PdfPlan globalFormState={globalFormState} />,
  });

  return (
    <div className="max-w-4xl pt-12">
      <Heading spacing size={"large"} level={"1"}>
        Tusen takk for hjelpen!
      </Heading>

      <GuidePanel poster>
        <BodyLong spacing>
          Takk for at du er med å teste ny oppfølgingsplan!
        </BodyLong>

        <BodyLong spacing>
          Vi ønsker å lage oppfølgingsplanen så god som mulig! Send oss gjerne
          forbedringsforslag, ris eller ros på e-post. Vi setter også stor pris
          på om du laster ned og deler utfylt plan med oss, slik at vi får et
          bedre inntrykk av hvordan en utfylt plan ser ut. Husk å ikke legg ved
          informasjon om faktiske personer.
        </BodyLong>

        <BodyLong spacing>
          Du kan sende e-post til:{" "}
          <a href="mailto:team-esyfo@nav.no?Subject=Oppfølgingsplan">
            team-esyfo@nav.no
          </a>
        </BodyLong>
        <a
          href={instance.url!}
          download={`Oppfolgingsplan-${new Date().toLocaleDateString()}.pdf`}
          className="w-fit navds-button navds-button--primary navds-button--medium"
        >
          <FilePdfIcon fontSize="1.5rem" />
          Last ned PDF
        </a>
      </GuidePanel>
    </div>
  );
}
