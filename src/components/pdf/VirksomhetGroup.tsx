import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const VirksomhetGroup = ({ globalFormState }: Props) => {
  return (
    <FieldGroup heading="Om virksomheten">
      <FieldItem
        label={fieldTexts.bedriftsinformasjonTexts.virksomhetsnavn}
        value={globalFormState.virksomhetFormFields.virksomhetsnavn}
      />
      <FieldItem
        label={fieldTexts.bedriftsinformasjonTexts.virksomhetsnummer}
        value={globalFormState.virksomhetFormFields.virksomhetsnummer}
      />
      <FieldItem
        label={fieldTexts.bedriftsinformasjonTexts.narmestelederfornavn}
        value={globalFormState.virksomhetFormFields.narmestelederfornavn}
      />
      <FieldItem
        label={fieldTexts.bedriftsinformasjonTexts.narmestelederetternavn}
        value={globalFormState.virksomhetFormFields.narmestelederetternavn}
      />
      <FieldItem
        label={fieldTexts.bedriftsinformasjonTexts.narmesteledertelefonnummer}
        value={globalFormState.virksomhetFormFields.narmesteledertelefonnummer}
      />
    </FieldGroup>
  );
};
