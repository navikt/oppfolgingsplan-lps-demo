"use client";
import { Button, Checkbox, CheckboxGroup, Textarea } from "@navikt/ds-react";
import NextLink from "next/link";
import { Side } from "@/components/Side";
import React from "react";

export default function Page() {
  return (
    <Side pageHeader="Kommunikasjon med NAV og sykmelder" activeStep={4}>
      <>
        <CheckboxGroup
          legend="Hvem vil du dele planen med?"
          onChange={(val: any[]) => console.log(val)}
        >
          <Checkbox value="NAV">NAV</Checkbox>
          <Checkbox value="LEGE">Lege</Checkbox>
        </CheckboxGroup>

        <Textarea
          label="Har dere behov for bistand fra NAV?"
          description="Eksempelvis something"
        />
        <Textarea label="Har dere behov for avklaringer fra sykmelder?" />

        <Textarea
          label="Utfyllende opplysninger"
          description="Dersom det er behov for å gi mer opplysninger"
        />
      </>

      <NextLink href={"/innsending"} passHref>
        <Button variant="primary" className="w-36 mt-4">
          Neste
        </Button>
      </NextLink>
    </Side>
  );
}
