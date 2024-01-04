import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const ArbeidsoppgaverSummary = () => {
  const { globalFormState } = useGlobalState();

  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.typiskArbeidshverdag}
        fieldValue={globalFormState.oppfolgingsplanFormFields.typiskArbeidshverdag}
      />
      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomKanUtfores}
        fieldValue={globalFormState.oppfolgingsplanFormFields.arbeidsoppgaverSomKanUtfores}
      />
      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomIkkeKanUtfores}
        fieldValue={
          globalFormState.oppfolgingsplanFormFields.arbeidsoppgaverSomIkkeKanUtfores
        }
      />
    </VStack>
  );
};
