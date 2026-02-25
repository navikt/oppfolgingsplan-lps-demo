"use client";
import { Stepper } from "@navikt/ds-react";
import Link from "next/link";

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
      <Stepper.Step as={Link} href="/">
        Oppfølgingsplan
      </Stepper.Step>
      <Stepper.Step as={Link} href="/infotilnavoglege">
        Informasjon til NAV og lege
      </Stepper.Step>
      <Stepper.Step as={Link} href="/innsending">
        Innsending
      </Stepper.Step>
    </Stepper>
  );
};
