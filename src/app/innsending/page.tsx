"use client";
import { Button } from "@navikt/ds-react";
import React from "react";
import NextLink from "next/link";
import { Side } from "@/components/Side";

export default function Page() {
  return (
    <Side pageHeader="Oppsummering og innsending todo" activeStep={5}>
      <NextLink href={"/kommunikasjon"} passHref>
        <Button variant="primary" className="w-36 mt-4">
          Send inn
        </Button>
      </NextLink>
    </Side>
  );
}
