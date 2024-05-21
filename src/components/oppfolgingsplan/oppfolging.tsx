import { Heading, Textarea } from "@navikt/ds-react";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { Section } from "@/components/wrappers/Section";
import { useFormContext } from "react-hook-form";
import { Evalueringsdato } from "@/components/datepicker/Evalueringsdato";
import { fieldTexts } from "@/text/fieldTexts";

export const Oppfolging = () => {
  const { globalFormState } = useGlobalState();
  const {
    register,
    formState: { errors },
  } = useFormContext<OppfolgingsplanFormFields>();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Oppfølging
      </Heading>
      <Section>
        <Textarea
          id="followUp"
          label={fieldTexts.oppfolgingsplanTexts.oppfolging}
          {...register("oppfolging", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={globalFormState.oppfolgingsplanFormFields.oppfolging}
          error={errors.oppfolging?.message}
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
