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
      className="hidden md:flex mb-8 mt-8"
    >
      <Link href={`/`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={0}>Oppfølgingsplan</Stepper.Step>
      </Link>
      <Link href={`/infotilnavoglege`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={1}>Informasjon til NAV og lege</Stepper.Step>
      </Link>
      <Link href={`/innsending`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={2}>Innsending</Stepper.Step>
      </Link>
    </Stepper>
  );
};
