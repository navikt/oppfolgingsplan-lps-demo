"use client";
import { Stepper } from "@navikt/ds-react";

interface Props {
  activeStep: number;
}

export const Navbar = ({ activeStep }: Props) => {
  return (
    <div className="pt-12 pb-12">
      <Stepper
        aria-labelledby="stepper-heading"
        activeStep={activeStep}
        orientation="horizontal"
      >
        <Stepper.Step href="/oppfolgingsplan-lps">Arbeidsituasjon</Stepper.Step>
        <Stepper.Step href="/oppfolgingsplan-lps/tilrettelegging">
          Tilrettelegging
        </Stepper.Step>
        <Stepper.Step href="/oppfolgingsplan-lps/bedriftsinformasjon">
          Info om bedriften
        </Stepper.Step>
        <Stepper.Step href="/oppfolgingsplan-lps/kommunikasjon">
          Kommunikasjon
        </Stepper.Step>
        <Stepper.Step href="/oppfolgingsplan-lps/innsending">
          Innsending
        </Stepper.Step>
      </Stepper>
    </div>
  );
};
