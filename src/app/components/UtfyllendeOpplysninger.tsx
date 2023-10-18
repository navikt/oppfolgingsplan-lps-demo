import { Heading, Textarea } from "@navikt/ds-react";

export const UtfyllendeOpplysninger = () => {
  return (
    <>
      <Heading size="medium" level={"2"}>
        Utfyllende opplysninger
      </Heading>
      <Textarea
        label="Utfyllende opplysninger"
        description="Dersom det er behov for å gi mer opplysninger kan dere skrive det her."
      />
    </>
  );
};
