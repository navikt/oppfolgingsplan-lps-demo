"use client";

import {
  BodyLong,
  Button,
  Heading,
  Textarea,
  TextField,
} from "@navikt/ds-react";
import NextLink from "next/link";
import React from "react";
import { Side } from "@/components/Side";

export default function Home() {
  return (
    <Side pageHeader="Oppfølgingsplan for Kari Normann" activeStep={1}>
      <BodyLong textColor="subtle">Fødselsnummer: 123456789</BodyLong>
      <Heading size="medium" level={"2"}>
        Arbeidssituasjon
      </Heading>
      <TextField label="Hvilken stilling har den sykmeldte?" />
      <Textarea label="Hvilke arbeidsoppgaver har den sykmeldte har til vanlig?" />
      <Textarea label="Er det noen arbeidsoppgaver som ikke lenger kan utføres på grunn av sykdom?" />

      <NextLink href={"/tilrettelegging"} passHref>
        <Button variant="primary" className="w-36 mt-4">
          Neste
        </Button>
      </NextLink>
    </Side>
  );
}
