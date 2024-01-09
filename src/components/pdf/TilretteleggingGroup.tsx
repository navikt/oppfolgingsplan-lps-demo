"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { InnsendingFormFields } from "@/types/FormType";
import { booleanToJaNei } from "@/text/textUtils";

interface Props {
  globalFormState: InnsendingFormFields;
}

export const TilretteleggingGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Tilrettelegging for å være i arbeid">
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingJaNei}
        value={booleanToJaNei(
          globalFormState.oppfolgingsplanFormFields.tidligereTilrettelegging,
        )}
      />

      <FieldItem
        label={
          fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingBeskrivelse
        }
        value={
          globalFormState.oppfolgingsplanFormFields
            .tidligereTilretteleggingBeskrivelse
        }
      />
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.tilretteleggingIDennePerioden}
        value={
          globalFormState.oppfolgingsplanFormFields
            .tilretteleggingIDennePerioden
        }
      />
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.muligheterForTilrettelegging}
        value={
          globalFormState.oppfolgingsplanFormFields.muligheterForTilrettelegging
        }
      />
    </FieldGroup>
  );
};
