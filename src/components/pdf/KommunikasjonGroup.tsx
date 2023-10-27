import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const KommunikasjonGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Kommunikasjon med NAV og lege">
      <FieldItem
        label={fieldTexts.kommunikasjonTexts.mottaker}
        value={globalFormState.kommunikasjonFormFields.mottaker.toString()}
      />
      <FieldItem
        label={fieldTexts.kommunikasjonTexts.bistandFraNav}
        value={globalFormState.kommunikasjonFormFields.bistandFraNav}
      />
      <FieldItem
        label={fieldTexts.kommunikasjonTexts.avklaringSykmelder}
        value={globalFormState.kommunikasjonFormFields.avklaringSykmelder}
      />
      <FieldItem
        label={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
        value={globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger}
      />
      <FieldItem
        label="Har arbeidstaker medvirket til oppfølgingsplanen?"
        value="Ja, arbeidstaker har medvirket til oppfølgingsplanen."
      />
    </FieldGroup>
  );
};
