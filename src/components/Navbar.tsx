"use client";
import Link from "next/link";
import { Stepper } from "@navikt/ds-react";

interface Props {
  activeStep: number;
}

export const Navbar = ({ activeStep }: Props) => {
  return (
    <Stepper
      aria-labelledby="stepper-heading"
      activeStep={activeStep}
      orientation="horizontal"
      className="mb-8 mt-8 hidden md:flex"
    >
      <Link href={`/`}>
        <Stepper.Step>Oppfølgingsplan</Stepper.Step>
      </Link>
      <Link href={`/infotilnavoglege`}>
        <Stepper.Step>Informasjon til NAV og lege</Stepper.Step>
      </Link>
      <Link href={`/innsending`}>
        <Stepper.Step>Innsending</Stepper.Step>
      </Link>
    </Stepper>
  );
};
