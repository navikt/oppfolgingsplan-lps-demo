import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Heading, Textarea } from "@navikt/ds-react";
import { Section } from "@/components/wrappers/Section";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import { OppfolgingsplanFormFields } from "@/types/FormType";

export const Tilrettelegging = () => {
  const { globalFormState } = useGlobalState();
  const { control } = useFormContext<OppfolgingsplanFormFields>();

  const tidligereTilretteleggingBeskrivelse = useController({
    name: "tidligereTilretteleggingBeskrivelse",
    control,
    defaultValue:
      globalFormState.oppfolgingsplanFormFields
        .tidligereTilretteleggingBeskrivelse,
    rules: { required: "Feltet er påkrevd" },
  });

  const tilretteleggingIDennePerioden = useController({
    name: "tilretteleggingIDennePerioden",
    control,
    defaultValue:
      globalFormState.oppfolgingsplanFormFields.tilretteleggingIDennePerioden,
    rules: { required: "Feltet er påkrevd" },
  });

  const muligheterForTilrettelegging = useController({
    name: "muligheterForTilrettelegging",
    control,
    defaultValue:
      globalFormState.oppfolgingsplanFormFields.muligheterForTilrettelegging,
  });

  return (
    <div>
      <Heading size="medium" level={"2"} spacing>
        Tilrettelegging for å være i arbeid
      </Heading>

      <Section>
        <Textarea
          id="previousFacilitation"
          label={
            fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingBeskrivelse
          }
          description="Beskriv hva dere har forsøkt av tilrettelegging så langt i sykefraværet. Hva har fungert, og hva har ikke fungert?"
          {...tidligereTilretteleggingBeskrivelse.field}
          value={tidligereTilretteleggingBeskrivelse.field.value ?? ""}
          error={tidligereTilretteleggingBeskrivelse.fieldState.error?.message}
        />
        <Textarea
          id="plannedFacilitation"
          label={fieldTexts.oppfolgingsplanTexts.tilretteleggingIDennePerioden}
          description="Beskriv hva dere skal gjøre for at arbeidstakeren kan være i noe jobb"
          {...tilretteleggingIDennePerioden.field}
          value={tilretteleggingIDennePerioden.field.value ?? ""}
          error={tilretteleggingIDennePerioden.fieldState.error?.message}
        />
        <Textarea
          id="otherFacilitationOptions"
          label={optionalText(
            fieldTexts.oppfolgingsplanTexts.muligheterForTilrettelegging,
          )}
          description="For eksempel involvering av bedriftshelsetjeneste, eller utføre andre typer arbeidsoppgaver"
          {...muligheterForTilrettelegging.field}
          value={muligheterForTilrettelegging.field.value ?? ""}
        />
      </Section>
    </div>
  );
};
