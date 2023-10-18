import { Checkbox, CheckboxGroup, Heading, TextField } from "@navikt/ds-react";

export const KommunikasjonMedNavOgSykmelder = () => {
  return (
    <>
      <Heading size="medium" level={"2"}>
        Kommunikasjon med NAV og sykmelder
      </Heading>

      <CheckboxGroup
        legend="Hvem vil du dele planen med?"
        onChange={(val: any[]) => console.log(val)}
      >
        <Checkbox value="NAV">NAV</Checkbox>
        <Checkbox value="LEGE">Lege</Checkbox>
      </CheckboxGroup>

      <TextField
        label="Har dere behov for bistand fra NAV?"
        description="Eksempelvis something"
      />
      <TextField label="Er det behov for noen avklaringer fra sykmelder?" />
    </>
  );
};
