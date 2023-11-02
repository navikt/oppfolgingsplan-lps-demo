"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const KontaktpersonGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Kontaktperson">
      <FieldItem
        label={fieldTexts.oppfolgingsansvarligTexts.fornavn}
        value={globalFormState.oppfolgingsansvarligFormFields.fornavn}
      />
      <FieldItem
        label={fieldTexts.oppfolgingsansvarligTexts.etternavn}
        value={globalFormState.oppfolgingsansvarligFormFields.etternavn}
      />
      <FieldItem
        label={fieldTexts.oppfolgingsansvarligTexts.telefonnummer}
        value={globalFormState.oppfolgingsansvarligFormFields.telefonnummer}
      />
    </FieldGroup>
  );
};
