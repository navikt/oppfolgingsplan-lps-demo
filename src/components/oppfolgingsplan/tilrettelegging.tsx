import { Heading, Textarea } from "@navikt/ds-react";
import { useFormContext } from "react-hook-form";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { Section } from "@/components/wrappers/Section";

export const Tilrettelegging = () => {
  const { globalFormState } = useGlobalState();
  const {
    register,
    formState: { errors },
  } = useFormContext<OppfolgingsplanFormFields>();

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Tilrettelegging for å være i arbeid
      </Heading>

      <Section>
        <Textarea
          label={
            fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingBeskrivelse
          }
          description="Beskriv hva dere har forsøkt av tilrettelegging så langt i sykefraværet. Hva har fungert, og hva har ikke fungert?"
          {...register("tidligereTilretteleggingBeskrivelse", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .tidligereTilretteleggingBeskrivelse
          }
          error={errors.tidligereTilretteleggingBeskrivelse?.message}
        />
        <Textarea
          label={fieldTexts.oppfolgingsplanTexts.tilretteleggingIDennePerioden}
          description="Beskriv hva dere skal gjøre for at arbeidstakeren kan være i noe jobb"
          {...register("tilretteleggingIDennePerioden", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .tilretteleggingIDennePerioden
          }
          error={errors.tilretteleggingIDennePerioden?.message}
        />
        <Textarea
          label={optionalText(
            fieldTexts.oppfolgingsplanTexts.muligheterForTilrettelegging,
          )}
          description="For eksempel involvering av bedriftshelsetjeneste, eller utføre andre typer arbeidsoppgaver"
          {...register("muligheterForTilrettelegging")}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .muligheterForTilrettelegging
          }
        />
      </Section>
    </div>
  );
};
