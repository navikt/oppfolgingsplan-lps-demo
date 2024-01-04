"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { InnsendingFormFields } from "@/types/FormType";

interface Props {
  globalFormState: InnsendingFormFields;
}

export const ArbeidsoppgaverGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Arbeidsoppgaver">
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.typiskArbeidshverdag}
        value={globalFormState.oppfolgingsplanFormFields.typiskArbeidshverdag}
      />
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomKanUtfores}
        value={globalFormState.oppfolgingsplanFormFields.arbeidsoppgaverSomKanUtfores}
      />
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomIkkeKanUtfores}
        value={globalFormState.oppfolgingsplanFormFields.arbeidsoppgaverSomIkkeKanUtfores}
      />
    </FieldGroup>
  );
};
