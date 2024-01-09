"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { InnsendingFormFields } from "@/types/FormType";
import { getLongDateFormat } from "@/utils/dateUtils";

interface Props {
  globalFormState: InnsendingFormFields;
}

export const OppfolgingGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Oppfølging">
      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.periodeFra}
        value={getLongDateFormat(
          globalFormState.oppfolgingsplanFormFields.periodeFra,
        )}
      />

      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.periodeTil}
        value={getLongDateFormat(
          globalFormState.oppfolgingsplanFormFields.periodeTil,
        )}
      />

      <FieldItem
        label={fieldTexts.oppfolgingsplanTexts.oppfolging}
        value={globalFormState.oppfolgingsplanFormFields.oppfolging}
      />
    </FieldGroup>
  );
};
