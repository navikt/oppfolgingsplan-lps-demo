"use client";
import { Button, Textarea } from "@navikt/ds-react";
import NextLink from "next/link";
import React from "react";
import { Side } from "@/components/Side";

export default function Page() {
  return (
    <Side pageHeader="Tilrettelegging på arbeidsplassen" activeStep={2}>
      <Textarea label="Har det blitt forsøkt tilrettelegging på et tidligere tidspunkt?" />
      <Textarea label="Hvilken tilrettelegging blir gjort per i dag?" />
      <Textarea label="Har dere fremtidige planer for tilrettelegging som ikke blir gjort i dag?" />

      <NextLink href={"/bedriftsinformasjon"} passHref>
        <Button variant="primary" className="w-36 mt-4">
          Neste
        </Button>
      </NextLink>
    </Side>
  );
}
