import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Heading, Textarea } from "@navikt/ds-react";
import { Evalueringsdato } from "@/components/datepicker/Evalueringsdato";
import { Section } from "@/components/wrappers/Section";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { OppfolgingsplanFormFields } from "@/types/FormType";

export const Oppfolging = () => {
  const { globalFormState } = useGlobalState();
  const { control } = useFormContext<OppfolgingsplanFormFields>();

  const oppfolging = useController({
    name: "oppfolging",
    control,
    defaultValue: globalFormState.oppfolgingsplanFormFields.oppfolging,
    rules: { required: "Feltet er påkrevd" },
  });

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Oppfølging
      </Heading>
      <Section>
        <Textarea
          id="followUp"
          label={fieldTexts.oppfolgingsplanTexts.oppfolging}
          {...oppfolging.field}
          value={oppfolging.field.value ?? ""}
          error={oppfolging.fieldState.error?.message}
        />
        <Evalueringsdato
          id="evaluationDate"
          label={fieldTexts.oppfolgingsplanTexts.evalueringsdato}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields.evalueringsdato
          }
        />
      </Section>
    </div>
  );
};
