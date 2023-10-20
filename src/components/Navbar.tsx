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
        <Stepper.Step unsafe_index={0}>Arbeidsituasjon</Stepper.Step>
      </Link>
      <Link href={`/tilrettelegging`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={1}>Tilrettelegging</Stepper.Step>
      </Link>
      <Link href={`/bedriftsinformasjon`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={2}>Info om bedriften</Stepper.Step>
      </Link>
      <Link href={`/kommunikasjon`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={3}>Kommunikasjon</Stepper.Step>
      </Link>
      <Link href={`/innsending`} passHref={true} legacyBehavior>
        <Stepper.Step unsafe_index={4}>Innsending</Stepper.Step>
      </Link>
    </Stepper>
  );
};
