"use client";
import { Button, TextField } from "@navikt/ds-react";
import NextLink from "next/link";
import { Side } from "@/components/Side";
import React from "react";

export default function Page() {
  return (
    <Side pageHeader="Informasjon om bedriften" activeStep={3}>
      <TextField label="Bedriftens navn" defaultValue="Virksomhet 123 AS" />
      <TextField
        label="Bedriftens virksomhetsnummer"
        defaultValue="999999999"
      />
      <TextField label="Nærmeste leders fornavn" defaultValue="Kåre" />
      <TextField label="Nærmeste leders etternavn" defaultValue="Kanon" />
      <TextField
        label="Nærmeste leders telefonnummer"
        defaultValue="99999999"
      />

      <NextLink href={"/kommunikasjon"} passHref>
        <Button variant="primary" className="w-36 mt-4">
          Neste
        </Button>
      </NextLink>
    </Side>
  );
}
