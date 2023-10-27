import { Accordion } from "@navikt/ds-react";
import { ArbeidsoppgaverSummary } from "@/components/summary/ArbeidsoppgaverSummary";
import { TilretteleggingSummary } from "@/components/summary/TilretteleggingSummary";
import { BedriftsinformasjonSummary } from "@/components/summary/BedriftsinformasjonSummary";
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
          <Accordion.Header>Informasjon om bedriften</Accordion.Header>
          <Accordion.Content>
            <BedriftsinformasjonSummary />
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>
            Kommunikasjon med NAV og fastlege
          </Accordion.Header>
          <Accordion.Content>
            <KommunikasjonSummary />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
