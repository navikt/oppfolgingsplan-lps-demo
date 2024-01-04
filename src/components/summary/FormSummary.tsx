import { Accordion } from "@navikt/ds-react";
import { ArbeidsoppgaverSummary } from "@/components/summary/ArbeidsoppgaverSummary";
import { TilretteleggingSummary } from "@/components/summary/TilretteleggingSummary";
import { KommunikasjonSummary } from "@/components/summary/KommunikasjonSummary";

export const FormSummary = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Arbeidsoppgaver</Accordion.Header>
          <Accordion.Content>
            <ArbeidsoppgaverSummary />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Tilrettelegging</Accordion.Header>
          <Accordion.Content>
            <TilretteleggingSummary />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Informasjon til NAV og lege</Accordion.Header>
          <Accordion.Content>
            <KommunikasjonSummary />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
