"use client";
import { Button, ConfirmationPanel } from "@navikt/ds-react";
import React, { useState } from "react";
import NextLink from "next/link";
import { Side } from "@/components/Side";

export default function Page() {
  const [bekreftMedvirkning, setBekreftMedvirkning] = useState<boolean>(false);

  return (
    <Side pageHeader="Oppsummering og innsending todo" activeStep={5}>
      <div>Oppsummering av svarene dine her.. TODO</div>

      <ConfirmationPanel
        checked={bekreftMedvirkning}
        label="Ja, den sykmeldte har medvirket til oppfølgingsplanen."
        onChange={() => setBekreftMedvirkning((x) => !x)}
      >
        For å kunne sende inn må du bekrefte at den sykmeldte har medvirket til
        oppfølgingsplanen
      </ConfirmationPanel>

      <NextLink href={"/kommunikasjon"} passHref>
        <Button variant="primary" className="mt-4">
          Send oppfølgingsplanen til NAV
        </Button>
      </NextLink>
    </Side>
  );
}
