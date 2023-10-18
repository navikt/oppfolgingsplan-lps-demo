import { Heading, TextField } from "@navikt/ds-react";

export const InfoOmBedriften = () => {
  return (
    <>
      <Heading size="medium" level={"2"}>
        Informasjon om bedriften
      </Heading>
      <TextField label="Bedriftens navn" defaultValue="Virksomhet 123 AS" />
      <TextField
        label="Bedriftens virksomhetsnummer"
        defaultValue="999999999"
      />
      <TextField label="Nærmeste leders fornavn" defaultValue="Kåre" />
      <TextField label="Nærmeste leders etternavn" defaultValue="Kanon" />
      <TextField
        label="Nærmeste leders telefonnummer"
        defaultValue="99999999"
      />
    </>
  );
};
