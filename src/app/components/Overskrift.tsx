import { BodyLong, Heading } from "@navikt/ds-react";

export const Overskrift = () => {
  return (
    <div>
      <Heading spacing size="large" level={"1"}>
        Oppfølgingsplan for Kari Normann
      </Heading>
      <BodyLong textColor="subtle">Fødselsnummer: 123456789</BodyLong>
    </div>
  );
};
