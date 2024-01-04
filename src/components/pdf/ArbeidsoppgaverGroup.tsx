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
        label={fieldTexts.arbeidsoppgaveTexts.typiskArbeidshverdag}
        value={globalFormState.jobbOgMuligheterFormFields.typiskArbeidshverdag}
      />
      <FieldItem
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverSomKanUtfores}
        value={globalFormState.jobbOgMuligheterFormFields.arbeidsoppgaverSomKanUtfores}
      />
      <FieldItem
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverSomIkkeKanUtfores}
        value={globalFormState.jobbOgMuligheterFormFields.arbeidsoppgaverSomIkkeKanUtfores}
      />
    </FieldGroup>
  );
};
