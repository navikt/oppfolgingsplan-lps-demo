"use client";
import { Box, Stepper } from "@navikt/ds-react";
import Link from "next/link";

interface Props {
  activeStep: number;
}

export const Navbar = ({ activeStep }: Props) => {
  return (
    <Box marginBlock="space-8" className="hidden md:block">
      <Stepper
        aria-label="Steg i oppfølgingsplanen"
        activeStep={activeStep}
        orientation="horizontal"
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
    </Box>
  );
};
