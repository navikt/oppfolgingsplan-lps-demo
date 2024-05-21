import { Accordion } from "@navikt/ds-react";
import { ArbeidssituasjonSummary } from "@/components/summary/ArbeidssituasjonSummary";
import { TilretteleggingSummary } from "@/components/summary/TilretteleggingSummary";
import { InfoTilNavOgLegeSummary } from "@/components/summary/InfoTilNavOgLegeSummary";
import { OppfolgingSummary } from "@/components/summary/OppfolgingSummary";

export const FormSummary = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Arbeidssituasjon</Accordion.Header>
          <Accordion.Content>
            <ArbeidssituasjonSummary />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            Tilrettelegging for å være i arbeid
          </Accordion.Header>
          <Accordion.Content>
            <TilretteleggingSummary />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Oppfølging</Accordion.Header>
          <Accordion.Content>
            <OppfolgingSummary />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Informasjon til NAV og lege</Accordion.Header>
          <Accordion.Content>
            <InfoTilNavOgLegeSummary />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
