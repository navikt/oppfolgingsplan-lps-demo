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
      <Stepper.Step href="/">Oppfølgingsplan</Stepper.Step>
      <Stepper.Step href="/infotilnavoglege">
        Informasjon til NAV og lege
      </Stepper.Step>
      <Stepper.Step href="/innsending">Innsending</Stepper.Step>
    </Stepper>
  );
};
