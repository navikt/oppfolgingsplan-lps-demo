import { Heading } from "@navikt/ds-react";
import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { Section } from "@/components/wrappers/Section";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";

export const Arbeidssituasjon = () => {
  const { globalFormState } = useGlobalState();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Arbeidssituasjon
      </Heading>

      <Section>
        <ControlledTextarea
          name="typiskArbeidshverdag"
          label={fieldTexts.oppfolgingsplanTexts.typiskArbeidshverdag}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields.typiskArbeidshverdag
          }
          rules={{ required: "Feltet er påkrevd" }}
        />
        <ControlledTextarea
          name="arbeidsoppgaverSomKanUtfores"
          label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomKanUtfores}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .arbeidsoppgaverSomKanUtfores
          }
          rules={{ required: "Feltet er påkrevd" }}
        />
        <ControlledTextarea
          name="arbeidsoppgaverSomIkkeKanUtfores"
          label={
            fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomIkkeKanUtfores
          }
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .arbeidsoppgaverSomIkkeKanUtfores
          }
          rules={{ required: "Feltet er påkrevd" }}
        />
      </Section>
    </div>
  );
};
