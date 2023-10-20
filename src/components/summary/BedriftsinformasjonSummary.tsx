import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const BedriftsinformasjonSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.bedriftsinformasjonTexts.virksomhetsnavn}
        fieldValue={globalFormState.virksomhetFormFields.virksomhetsnavn}
      />
      <SummaryField
        fieldName={fieldTexts.bedriftsinformasjonTexts.virksomhetsnummer}
        fieldValue={globalFormState.virksomhetFormFields.virksomhetsnummer}
      />
      <SummaryField
        fieldName={fieldTexts.bedriftsinformasjonTexts.narmestelederfornavn}
        fieldValue={globalFormState.virksomhetFormFields.narmestelederfornavn}
      />
      <SummaryField
        fieldName={fieldTexts.bedriftsinformasjonTexts.narmestelederetternavn}
        fieldValue={globalFormState.virksomhetFormFields.narmestelederetternavn}
      />
      <SummaryField
        fieldName={
          fieldTexts.bedriftsinformasjonTexts.narmesteledertelefonnummer
        }
        fieldValue={
          globalFormState.virksomhetFormFields.narmesteledertelefonnummer
        }
      />
    </VStack>
  );
};
