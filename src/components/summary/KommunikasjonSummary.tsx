import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";
import { booleanToJaNei } from "@/text/textUtils";

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
          fieldValue={booleanToJaNei(
            globalFormState.kommunikasjonFormFields.trengerHjelpFraNav,
          )}
        />
        <SummaryField
          fieldName={
            fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
          }
          fieldValue={
            globalFormState.kommunikasjonFormFields
              .trengerHjelpFraNavBeskrivelse
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.beskjedTilFastlege}
          fieldValue={
            globalFormState.kommunikasjonFormFields.beskjedTilFastlege
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
          fieldValue={booleanToJaNei(
            globalFormState.kommunikasjonFormFields.sykmeldtHarMedvirket,
          )}
        />
        <SummaryField
          fieldName={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          fieldValue={
            globalFormState.kommunikasjonFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
        />

        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
          fieldValue={globalFormState.kommunikasjonFormFields.kontaktpersonNavn}
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
          fieldValue={
            globalFormState.kommunikasjonFormFields.kontaktpersonTelefonnummer
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
          fieldValue={
            globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger
          }
        />
      </VStack>
    </>
  );
};
