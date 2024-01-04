import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const KommunikasjonSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <>
      <VStack gap="4">
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.mottaker}
          fieldValue={globalFormState.kommunikasjonFormFields.mottaker.toString()}
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
          fieldValue={globalFormState.kommunikasjonFormFields.bistandFraNav}
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.beskjedTilFastlege}
          fieldValue={
            globalFormState.kommunikasjonFormFields.beskjedTilFastlege
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
          fieldValue={
            globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger
          }
        />
      </VStack>
      <VStack gap="4">
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.navn}
          fieldValue={globalFormState.kommunikasjonFormFields.kontaktpersonNavn}
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.telefonnummer}
          fieldValue={
            globalFormState.kommunikasjonFormFields.kontaktpersonTelefonnummer
          }
        />
      </VStack>
    </>
  );
};
