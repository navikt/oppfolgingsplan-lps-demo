import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const KommunikasjonSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.kommunikasjonTexts.mottaker}
        fieldValue={globalFormState.kommunikasjonFormFields.mottaker.toString()}
      />
      <SummaryField
        fieldName={fieldTexts.kommunikasjonTexts.bistandFraNav}
        fieldValue={globalFormState.kommunikasjonFormFields.bistandFraNav}
      />
      <SummaryField
        fieldName={fieldTexts.kommunikasjonTexts.avklaringSykmelder}
        fieldValue={globalFormState.kommunikasjonFormFields.avklaringSykmelder}
      />
      <SummaryField
        fieldName={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
        fieldValue={
          globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger
        }
      />
    </VStack>
  );
};
