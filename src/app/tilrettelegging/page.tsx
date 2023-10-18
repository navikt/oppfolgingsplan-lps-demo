"use client";
import { Button, TextField } from "@navikt/ds-react";
import NextLink from "next/link";
import React from "react";
import { Side } from "@/components/Side";

export default function Page() {
  return (
    <Side pageHeader="Tilrettelegging på arbeidsplassen" activeStep={2}>
      <TextField label="Har det blitt forsøkt tilrettelegging på et tidligere tidspunkt?" />
      <TextField label="Hvilken tilrettelegging blir gjort per i dag?" />
      <TextField label="Har dere fremtidige planer for tilrettelegging som ikke blir gjort i dag?" />

      <NextLink href={"/bedriftsinformasjon"} passHref>
        <Button variant="primary" className="w-36 mt-4">
          Neste
        </Button>
      </NextLink>
    </Side>
  );
}
