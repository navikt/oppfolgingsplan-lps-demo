import { Heading, TextField } from "@navikt/ds-react";

export const Tilrettelegging = () => {
  return (
    <>
      <Heading size="medium" level={"2"}>
        Tilrettelegging på arbeidsplassen
      </Heading>
      <TextField label="Har det blitt forsøkt tilrettelegging på et tidligere tidspunkt?" />
      <TextField label="Hvilken tilrettelegging blir gjort per i dag?" />
      <TextField label="Har dere fremtidige planer for tilrettelegging som ikke blir gjort i dag?" />
    </>
  );
};
