import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Heading, Textarea } from "@navikt/ds-react";
import { Section } from "@/components/wrappers/Section";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { OppfolgingsplanFormFields } from "@/types/FormType";

export const Arbeidssituasjon = () => {
  const { globalFormState } = useGlobalState();
  const { control } = useFormContext<OppfolgingsplanFormFields>();

  const typiskArbeidshverdag = useController({
    name: "typiskArbeidshverdag",
    control,
    defaultValue:
      globalFormState.oppfolgingsplanFormFields.typiskArbeidshverdag,
    rules: { required: "Feltet er påkrevd" },
  });

  const arbeidsoppgaverSomKanUtfores = useController({
    name: "arbeidsoppgaverSomKanUtfores",
    control,
    defaultValue:
      globalFormState.oppfolgingsplanFormFields.arbeidsoppgaverSomKanUtfores,
    rules: { required: "Feltet er påkrevd" },
  });

  const arbeidsoppgaverSomIkkeKanUtfores = useController({
    name: "arbeidsoppgaverSomIkkeKanUtfores",
    control,
    defaultValue:
      globalFormState.oppfolgingsplanFormFields
        .arbeidsoppgaverSomIkkeKanUtfores,
    rules: { required: "Feltet er påkrevd" },
  });

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Arbeidssituasjon
      </Heading>

      <Section>
        <Textarea
          id="typicalWorkday"
          label={fieldTexts.oppfolgingsplanTexts.typiskArbeidshverdag}
          {...typiskArbeidshverdag.field}
          value={typiskArbeidshverdag.field.value ?? ""}
          error={typiskArbeidshverdag.fieldState.error?.message}
        />
        <Textarea
          id="tasksThatCanStillBeDone"
          label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomKanUtfores}
          {...arbeidsoppgaverSomKanUtfores.field}
          value={arbeidsoppgaverSomKanUtfores.field.value ?? ""}
          error={arbeidsoppgaverSomKanUtfores.fieldState.error?.message}
        />
        <Textarea
          id="tasksThatCanNotBeDone"
          label={
            fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomIkkeKanUtfores
          }
          {...arbeidsoppgaverSomIkkeKanUtfores.field}
          value={arbeidsoppgaverSomIkkeKanUtfores.field.value ?? ""}
          error={arbeidsoppgaverSomIkkeKanUtfores.fieldState.error?.message}
        />
      </Section>
    </div>
  );
};
