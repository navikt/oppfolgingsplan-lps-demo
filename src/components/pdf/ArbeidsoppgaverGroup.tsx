"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const ArbeidsoppgaverGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Arbeidsoppgaver">
      <FieldItem
        label={fieldTexts.arbeidsoppgaveTexts.stilling}
        value={globalFormState.arbeidsoppgaveFields.stilling}
      />
      <FieldItem
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaver}
        value={globalFormState.arbeidsoppgaveFields.arbeidsoppgaver}
      />
      <FieldItem
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverikkeutfores}
        value={globalFormState.arbeidsoppgaveFields.arbeidsoppgaverikkeutfores}
      />
    </FieldGroup>
  );
};
