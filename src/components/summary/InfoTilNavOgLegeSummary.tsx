import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { booleanToJaNei } from "@/text/textUtils";

export const InfoTilNavOgLegeSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <>
      <VStack gap="4">
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.mottaker}
          fieldValue={globalFormState.infoTilNavOgLegeFormFields.mottaker.toString()}
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.beskjedTilFastlege}
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields.beskjedTilFastlege
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
          fieldValue={booleanToJaNei(
            globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav,
          )}
        />
        <SummaryField
          fieldName={
            fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
          }
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields
              .trengerHjelpFraNavBeskrivelse
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields.utfyllendeOpplysninger
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields.kontaktpersonNavn
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields
              .kontaktpersonTelefonnummer
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.kontaktpersonEpost}
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields.kontaktpersonEpost
          }
        />
        <SummaryField
          fieldName={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
          fieldValue={booleanToJaNei(
            globalFormState.infoTilNavOgLegeFormFields.sykmeldtHarMedvirket,
          )}
        />
        <SummaryField
          fieldName={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          fieldValue={
            globalFormState.infoTilNavOgLegeFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
        />
      </VStack>
    </>
  );
};
