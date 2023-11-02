import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const KontaktpersonSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.oppfolgingsansvarligTexts.fornavn}
        fieldValue={globalFormState.oppfolgingsansvarligFormFields.fornavn}
      />
      <SummaryField
        fieldName={fieldTexts.oppfolgingsansvarligTexts.etternavn}
        fieldValue={globalFormState.oppfolgingsansvarligFormFields.etternavn}
      />
      <SummaryField
        fieldName={
          fieldTexts.oppfolgingsansvarligTexts.telefonnummer
        }
        fieldValue={
          globalFormState.oppfolgingsansvarligFormFields.telefonnummer
        }
      />
    </VStack>
  );
};
