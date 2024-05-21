import { Heading, Textarea } from "@navikt/ds-react";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { Section } from "@/components/wrappers/Section";
import { useFormContext } from "react-hook-form";

export const Arbeidssituasjon = () => {
  const { globalFormState } = useGlobalState();
  const {
    register,
    formState: { errors },
  } = useFormContext<OppfolgingsplanFormFields>();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Arbeidssituasjon
      </Heading>

      <Section>
        <Textarea
          id="typicalWorkday"
          label={fieldTexts.oppfolgingsplanTexts.typiskArbeidshverdag}
          {...register("typiskArbeidshverdag", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields.typiskArbeidshverdag
          }
          error={errors.typiskArbeidshverdag?.message}
        />
        <Textarea
          id="tasksThatCanStillBeDone"
          label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomKanUtfores}
          {...register("arbeidsoppgaverSomKanUtfores", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .arbeidsoppgaverSomKanUtfores
          }
          error={errors.arbeidsoppgaverSomKanUtfores?.message}
        />
        <Textarea
          id="tasksThatCanNotBeDone"
          label={
            fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomIkkeKanUtfores
          }
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .arbeidsoppgaverSomIkkeKanUtfores
          }
          {...register("arbeidsoppgaverSomIkkeKanUtfores", {
            required: "Feltet er påkrevd",
          })}
          error={errors.arbeidsoppgaverSomIkkeKanUtfores?.message}
        />
      </Section>
    </div>
  );
};
