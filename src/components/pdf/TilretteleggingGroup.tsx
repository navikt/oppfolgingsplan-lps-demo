"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const TilretteleggingGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Tilrettelegging">
      <FieldItem
        label={fieldTexts.tilretteleggingTexts.tidligereTilretteleggingJaNei}
        value={
          globalFormState.jobbOgMuligheterFormFields
            .tidligereTilrettelegging === true
            ? "Ja"
            : "Nei"
        }
      />

      <FieldItem
        label={
          fieldTexts.tilretteleggingTexts.tidligereTilretteleggingBeskrivelse
        }
        value={
          globalFormState.jobbOgMuligheterFormFields
            .tidligereTilretteleggingBeskrivelse
        }
      />
      <FieldItem
        label={fieldTexts.tilretteleggingTexts.tilretteleggingIDennePerioden}
        value={
          globalFormState.jobbOgMuligheterFormFields
            .tilretteleggingIDennePerioden
        }
      />
      <FieldItem
        label={fieldTexts.tilretteleggingTexts.muligheterForTilrettelegging}
        value={
          globalFormState.jobbOgMuligheterFormFields
            .muligheterForTilrettelegging
        }
      />
    </FieldGroup>
  );
};
