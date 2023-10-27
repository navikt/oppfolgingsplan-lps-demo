"use client";
import {FieldGroup} from "@/components/pdf/FieldGroup";
import {FieldItem} from "@/components/pdf/FieldItem";
import {fieldTexts} from "@/text/fieldTexts";
import React from "react";
import {OppfolgingsplanFormFields} from "@/types/FormType";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const TilretteleggingGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Tilrettelegging">
      <FieldItem
        label={fieldTexts.tilretteleggingTexts.tidligereTilrettelegging}
        value={
          globalFormState.tilretteleggingFormFields.tidligereTilrettelegging
        }
      />
      <FieldItem
        label={fieldTexts.tilretteleggingTexts.tilretteleggingIDag}
        value={globalFormState.tilretteleggingFormFields.tilretteleggingIDag}
      />
      <FieldItem
        label={fieldTexts.tilretteleggingTexts.fremtidigTilrettelegging}
        value={
          globalFormState.tilretteleggingFormFields.fremtidigTilrettelegging
        }
      />
    </FieldGroup>
  );
};
