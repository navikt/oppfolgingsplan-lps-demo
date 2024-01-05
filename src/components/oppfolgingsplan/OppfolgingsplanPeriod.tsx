import { BodyLong, Heading } from "@navikt/ds-react";
import React from "react";
import { OpDatePicker } from "@/components/datepicker/OpDatePicker";
import { Section } from "@/components/wrappers/Section";

export const OppfolgingsplanPeriod = () => {
  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Oppfølgingsperiode
      </Heading>
      <Section>
        <BodyLong textColor="subtle">
          Oppgi hvor lenge dere ønsker at denne oppfølgingsplanen skal vare.
          Dette kan for eksempel være frem til dere ønsker å ta en
          oppfølgingssamtale (med eller uten NAV), og vurdere hvordan denne
          perioden har gått
        </BodyLong>
        <div className="flex flex-row gap-8">
          <OpDatePicker name="periodeFra" label="Fra dato" />
          <OpDatePicker name="periodeTil" label="Til dato" />
        </div>
      </Section>
    </div>
  );
};
