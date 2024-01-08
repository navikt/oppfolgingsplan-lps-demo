import { Heading, Textarea } from "@navikt/ds-react";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { Section } from "@/components/wrappers/Section";
import { useFormContext } from "react-hook-form";

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
          label="Hvordan skal dere følge opp avtalt tilrettelegging?"
          description="Beskriv når og hvordan dere skal vurdere om det er behov for å gjøre endringer i planen"
          {...register("oppfolging", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={globalFormState.oppfolgingsplanFormFields.oppfolging}
          error={errors.oppfolging?.message}
        />
      </Section>
    </div>
  );
};
