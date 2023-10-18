import { Heading, TextField } from "@navikt/ds-react";

export const Arbeidssituasjon = () => {
  return (
    <>
      <Heading size="medium" level={"2"}>
        Arbeidssituasjon
      </Heading>
      <TextField label="Hvilken stilling har den sykmeldte?" />
      <TextField label="Hvilke arbeidsoppgaver har den sykmeldte har til vanlig?" />
      <TextField label="Er det noen arbeidsoppgaver som ikke lenger kan utføres på grunn av sykdom?" />
    </>
  );
};
